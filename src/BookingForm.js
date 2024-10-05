// src/BookingForm.js

import React, { useState } from "react";
import "./BookingForm.css"; // Add your CSS file for styling

const BookingForm = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!guests || guests <= 0)
      newErrors.guests = "Number of guests must be greater than 0";
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
    if (!contact) newErrors.contact = "Contact information is required";
    else if (!/\S+@\S+\.\S+/.test(contact))
      newErrors.contact = "Email format is invalid";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Booking submitted successfully!");
      // You can add logic to send data to an API here
      // Reset form
      setName("");
      setGuests("");
      setDate("");
      setTime("");
      setContact("");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book a Table</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
        {errors.guests && <p className="error">{errors.guests}</p>}
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        {errors.date && <p className="error">{errors.date}</p>}
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        {errors.time && <p className="error">{errors.time}</p>}
      </div>
      <div>
        <label htmlFor="contact">Contact Email:</label>
        <input
          type="email"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        {errors.contact && <p className="error">{errors.contact}</p>}
      </div>
      <button type="submit">Submit Booking</button>
    </form>
  );
};

export default BookingForm;
