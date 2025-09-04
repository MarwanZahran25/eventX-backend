const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ quiet: true });
const client = new MongoClient(process.env.DATABASE_URL);

async function listAllevents(req, res) {
  try {
    const client = new MongoClient(process.env.DATABASE_URL);
    try {
      await client.connect();
    } catch {
      throw new Error({ message: "couldnt connect to database" });
    }
    let data = await client
      .db("eventX")
      .collection("events")
      .find({})
      .toArray();
    res.json(data);
  } catch (e) {
    res.json(e.message);
  } finally {
    await client.close();
  }
}
async function addEvent(req, res) {
  try {
    const client = new MongoClient(process.env.DATABASE_URL);
    try {
      await client.connect();
    } catch {
      throw new Error({ message: "couldnt connect to database" });
    }
    const data = req.body;
    const response = await client
      .db("eventX")
      .collection("events")
      .insertOne(data);
    res.send(response);
  } catch {
    res.send("error adding event");
  }
}
async function editEvent(req, res) {
  try {
    const client = new MongoClient(process.env.DATABASE_URL);
    try {
      await client.connect();
    } catch {
      throw new Error({ message: "couldnt connect to database" });
    }
    const eventId = req.params["id"];

    const response = await client
      .db("eventX")
      .collection("events")
      .updateOne({ _id: new ObjectId(eventId) }, { $set: req.body });
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
}
async function getSingleEvent(req, res) {
  const client = new MongoClient(process.env.DATABASE_URL);
  try {
    try {
      await client.connect();
    } catch {
      throw new Error({ message: "couldnt connect to database" });
    }
    console.log(req.params);
    const eventId = new ObjectId(req.params["id"].trim());
    console.log(`${ObjectId.isValid(req.params.id)} ${req.params.id}`);
    const event = await client
      .db("eventX")
      .collection("events")
      .findOne({ _id: eventId });

    res.json(event);
  } catch (e) {
    res.json(e.message);
  } finally {
    await client.close();
  }
}
async function allocateTicket(req, res) {
  const client = new MongoClient(process.env.DATABASE_URL);
  const user = req.body.userId;
  const ticket = req.params.ticketId;
  const eventId = new ObjectId(ticket);
  const userId = new ObjectId(user);

  try {
    await client.connect();
    const user = await client
      .db("eventX")
      .collection("users")
      .findOne({ _id: userId });

    const event = await client
      .db("eventX")
      .collection("events")
      .findOne({ _id: eventId });

    if (!user || !event) {
      console.table(user);
      return res.send("wait");
    }

    const eventUpdateResult = await client
      .db("eventX")
      .collection("events")
      .updateOne(
        { _id: eventId, availableSeats: { $gt: 0 } },
        {
          $inc: { availableSeats: -1, soldSeats: 1 },
          $push: { buyers: user },
        }
      );

    if (eventUpdateResult.modifiedCount === 0) {
      throw new Error({ message: "please" });
    }

    await client
      .db("eventX")
      .collection("users")
      .updateOne({ _id: userId }, { $push: { purchasedEvents: event } });

    res.status(200).json({ message: "Ticket allocated successfully!" });
  } catch (error) {
    console.error("error");
    res.status(500).json({ message: error.message });
  } finally {
    await client.close();
  }
}

async function analytics(req, res) {
  const client = new MongoClient(process.env.DATABASE_URL);
  try {
    await client.connect();

    const collection = client.db("eventX").collection("events");

    // Get all events (filter out empty objects)
    const events = await collection.find({}).toArray();

    // Calculate analytics
    let totalRevenue = 0;

    let totalTicketsSold = 0;
    const genderStats = { male: 0, female: 0 };
    const locationStats = {};

    events.forEach((event) => {
      // Revenue calculation (price * sold seats)
      totalRevenue += (event.price || 0) * (event.soldSeats || 0);

      // Attendees (expected attendance)

      // Tickets sold
      totalTicketsSold += event.soldSeats || 0;

      // Gender and location stats from buyers
      if (event.buyers && Array.isArray(event.buyers)) {
        event.buyers.forEach((buyer) => {
          // Gender stats
          if (buyer.gender === "male") genderStats.male++;
          else if (buyer.gender === "female") genderStats.female++;

          // Location stats
          if (buyer.city) {
            locationStats[buyer.city] = (locationStats[buyer.city] || 0) + 1;
          }
        });
      }
    });

    // Prepare response
    const analytics = {
      totalRevenue,

      totalTicketsSold,
      genderDistribution: {
        male: genderStats.male,
        female: genderStats.female,
        malePercentage:
          totalTicketsSold > 0
            ? (
                (genderStats.male / (genderStats.male + genderStats.female)) *
                100
              ).toFixed(1)
            : 0,
        femalePercentage:
          totalTicketsSold > 0
            ? (genderStats.female / (genderStats.male + genderStats.female)) *
              100
            : 0,
      },
      locationDistribution: locationStats,
      totalEvents: events.length,
    };

    res.json({
      success: true,
      data: analytics,
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    res.status(500).json({
      error: "Failed to fetch analytics data",
    });
  }
}

module.exports = {
  listAllevents,
  addEvent,
  editEvent,
  getSingleEvent,
  allocateTicket,
  analytics,
};
