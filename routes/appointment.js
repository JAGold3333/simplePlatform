const express = require("express");
const router = express.Router();
const AppointmentController = require("../controllers/appointments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, AppointmentController.getProfile)

router.post("/createAppointment", AppointmentController.createAppt)

router.put("/inProgress/:id", AppointmentController.inProg)

router.put("/completed/:id", AppointmentController.completed)

router.put("/paid/:id", AppointmentController.paidIt)

router.put("/assignPractitioner/:id", AppointmentController.assignOne)

router.delete("/deleteAppointment/:id", AppointmentController.deleteAppt)

module.exports = router;