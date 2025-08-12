import React, { useState } from "react";
import axios from "axios";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({ name: "", service: "", date: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5001/api/appointments", formData);
    alert("Appointment booked!");
    setFormData({ name: "", service: "", date: "" });
  };

  return (
    <form className="flex flex-col gap-3 max-w-md mx-auto mt-5" onSubmit={handleSubmit}>
      <input name="name" placeholder="Your Name" className="p-2 border" onChange={handleChange} value={formData.name} />
      <input name="service" placeholder="Service" className="p-2 border" onChange={handleChange} value={formData.service} />
      <input type="date" name="date" className="p-2 border" onChange={handleChange} value={formData.date} />
      <button className="bg-pink-500 text-white p-2 rounded" type="submit">Book Appointment</button>
    </form>
  );
}
