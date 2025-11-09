import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedScreening, setSelectedScreening] = useState("");
  const [seats, setSeats] = useState(1);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await api.get(`movies/${id}/`);
        setMovie(res.data);
        if (res.data.screenings.length > 0) {
          setSelectedScreening(res.data.screenings[0].id);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const handleBooking = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to book.");
      return;
    }

    try {
      await api.post(
        "bookings/",
        { screening: selectedScreening, seats },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Booking confirmed!");
      setSeats(1);
    } catch (err) {
      console.error(err);
      alert("Booking failed. Make sure you selected a screening and are logged in.");
    }
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (!movie) return <p className="text-center mt-4">Movie not found.</p>;

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {/* Movie Info */}
        <div className="col-md-7">
          <div className="card shadow-sm h-100">
            <img
              src={movie.poster_url}
              className="card-img-top"
              alt={movie.title}
              style={{ objectFit: "cover", maxHeight: "400px" }}
            />
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
              <p className="card-text">{movie.description}</p>
              <p className="text-muted">Genre: {movie.genre}</p>
              <p className="text-muted">Duration: {movie.duration} mins</p>

              <h5 className="mt-4">Screenings:</h5>
              {movie.screenings.length > 0 ? (
                <ul className="list-group">
                  {movie.screenings.map((s) => (
                    <li
                      key={s.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span>
                        {s.theater_name} - {s.date} at {s.time}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No screenings available.</p>
              )}
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="col-md-5">
          <form onSubmit={handleBooking} className="p-3 border rounded bg-light">
            <div className="mb-3">
              <label htmlFor="screening" className="form-label">
                Select Screening
              </label>
              <select
                id="screening"
                className="form-select"
                value={selectedScreening}
                onChange={(e) => setSelectedScreening(e.target.value)}
                required
              >
                {movie.screenings.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.theater_name} - {s.date} at {s.time} (Seats: {s.available_seats})
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="seats" className="form-label">
                Number of Seats
              </label>
              <input
                type="number"
                id="seats"
                className="form-control"
                min="1"
                max={movie.screenings.find((s) => s.id === parseInt(selectedScreening))?.available_seats || 1}
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
