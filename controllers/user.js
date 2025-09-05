const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ quiet: true });
const jwt = require("jsonwebtoken");
const client = new MongoClient(process.env.DATABASE_URL);
async function signin(req, res) {
  const { email, password } = req.body;
  let data;
  let collection;
  try {
    try {
      await client.connect();
      collection = client.db("eventX").collection("users");
    } catch (e) {
      throw e;
    }
    data = await collection.findOne({ email: email });
    if (!data) {
      return res.status(400).json("email doesnt exist");
    }
    if (data.password !== password) {
      return res.status(400).json("password is not correct ");
    }
    const newData = { id: data.altid, email: data.email, role: data.role };
    token = await jwt.sign(newData, process.env.SECRET);
    const isAdmin = newData.role === "Admin";
    res.json({ token, isAdmin });

    console.log(data);
  } catch (e) {
    throw e;
  } finally {
    await client.close();
  }
}
async function buyTicket(req, res) {
  await client.connect();

  try {
    const eventId = Number(req.params.id);
    const userId = Number(req.user.id);

    const user = await client
      .db("eventX")
      .collection("users")
      .findOne({ altid: userId });

    const event = await client
      .db("eventX")
      .collection("events")
      .findOne({ altid: eventId });

    if (!user || !event) {
      console.log(req.user);
      return res.send("wait");
    }

    const eventUpdateResult = await client
      .db("eventX")
      .collection("events")
      .updateOne(
        { altid: eventId, availableSeats: { $gt: 0 } },
        {
          $inc: { availableSeats: -1, soldSeats: 1 },
          $push: { buyers: user },
        }
      );

    await client
      .db("eventX")
      .collection("users")
      .updateOne({ altid: userId }, { $push: { purchasedEvents: event } });

    res.status(200).json({ message: "Ticket purchased successfully!" });
  } catch (error) {
    console.error("error");
    res.status(500).json({ message: error.message });
  } finally {
    await client.close();
  }
}
async function listOwnedTickets(req, res) {
  const client = new MongoClient(process.env.DATABASE_URL);
  id = Number(req.user.id);
  try {
    await client.connect();
    const data = await client
      .db("eventX")
      .collection("users")
      .findOne({ altid: id });
    res.json(data.purchasedEvents);
  } catch {
    res.json("error");
  } finally {
    client.close();
  }
}
module.exports = { signin, buyTicket, listOwnedTickets };
