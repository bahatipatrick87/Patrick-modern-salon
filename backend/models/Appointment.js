import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model("Appointment", appointmentSchema);
