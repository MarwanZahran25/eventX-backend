require("dotenv").config({ quiet: true });
const jwt = require("jsonwebtoken");
async function verifyUser(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET, {});
    const { email, role, id } = decoded;
    req.user = { email, role, id };
    console.log(req.user.email);
    next();
  } catch (err) {
    res.status(401).json({ error: "couldnt verify" });
  }
}
async function verifyAdmin(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    const { email, role, id } = decoded;
    req.user = { email, role, id };
    if (role === "Admin") {
      next();
    } else {
      res.status(401).json({ error: "admins only allowed" });
    }
  } catch (err) {
    res.status(401).json(err.message);
  }
}
module.exports = { verifyUser, verifyAdmin };
