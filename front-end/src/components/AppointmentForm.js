import React, { useState } from "react";

export default function AppointmentForm() {
  const [form, setForm] = useState({ name: "", service: "", date: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${form.name}`);
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>
      <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
      <select name="service" onChange={handleChange} required>
        <option value="">Select a Service</option>
        <option value="Hair Styling">Hair Styling</option>
        <option value="Facial Treatment">Facial Treatment</option>
        <option value="Manicure & Pedicure">Manicure & Pedicure</option>
      </select>
      <input type="date" name="date" onChange={handleChange} required />
         <input type="time" name="time" onChange={handleChange} required />
      <button type="submit">Confirm Booking</button>
    </form>
  );
}
