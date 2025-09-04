const router = require("express").Router();
const verify = require("../utils/verify");
const controller = require("../controllers/admin");
router.get("/event/all", verify.verifyUser, controller.listAllevents);
router.post("/event/add", verify.verifyAdmin, controller.addEvent);
router.post("/event/update/:id", verify.verifyAdmin, controller.editEvent);
router.get("/event/:id", controller.getSingleEvent);
router.post(
  "/allocate/:ticketId",
  verify.verifyAdmin,
  controller.allocateTicket
);
router.get("/analytics", verify.verifyAdmin, controller.analytics);
module.exports = router;
