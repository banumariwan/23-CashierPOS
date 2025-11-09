import { useState } from "react";
import api from "../services/api";

export default function BookingForm({ movieId }) {
  const [screening, setScreening] = useState("");
  const [seats, setSeats] = useState(1);
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(
        "bookings/",
        { screening, seats },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Booking confirmed!");
      setScreening("");
      setSeats(1);
    } catch (err) {
      console.error(err);
      alert("Booking failed. Please check your inputs or login.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      <div className="mb-3">
        <label htmlFor="screening" className="form-label">
          Screening ID
        </label>
        <input
          id="screening"
          type="text"
          className="form-control"
          placeholder="Enter Screening ID"
          value={screening}
          onChange={(e) => setScreening(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="seats" className="form-label">
          Number of Seats
        </label>
        <input
          id="seats"
          type="number"
          className="form-control"
          min="1"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Book
      </button>
    </form>
  );
}
