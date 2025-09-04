const express = require("express");
const controller = require("../controllers/user");
const verify = require("../utils/verify");
const router = express.Router();
router.post("/signin", controller.signin);
router.get("/", verify.verifyUser, (req, res) => {
  console.log(req.user.role);
  res.json(req.user.id);
});
router.get("/event/buy/:id", verify.verifyUser, controller.buyTicket);
router.get("/ticket", verify.verifyUser, controller.listOwnedTickets);

module.exports = router;
