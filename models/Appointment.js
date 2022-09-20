const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  apptType: {
    type: String,
    required: true,
  },
  apptDate: {
    type: String,
    required: true,
  },
  customerDescription: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  apptStatus: {
    type: String,
    default: "Incomplete",
  },
  practitionerName: {
    type: String,
    default: "Unassigned",
  },
  paid: {
    type: String,
    default: "false",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
