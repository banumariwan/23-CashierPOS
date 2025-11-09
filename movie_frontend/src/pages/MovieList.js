import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get("movies/");
        setMovies(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <p className="text-center mt-4">Loading movies...</p>;

  if (movies.length === 0)
    return <p className="text-center mt-4">No movies available.</p>;

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={movie.poster_url}
                className="card-img-top"
                alt={movie.title}
                style={{ objectFit: "cover", maxHeight: "250px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{movie.title}</h5>
                <p className="text-muted mb-1">Genre: {movie.genre}</p>
                <p className="text-muted mb-2">Duration: {movie.duration} mins</p>

                {movie.screenings && movie.screenings.length > 0 ? (
                  <p className="mb-2">
                    Next Screening:{" "}
                    {movie.screenings[0].theater_name} - {movie.screenings[0].date} at{" "}
                    {movie.screenings[0].time}
                  </p>
                ) : (
                  <p className="text-muted mb-2">No screenings available</p>
                )}

                <Link
                  to={`/movie/${movie.id}`}
                  className="btn btn-primary mt-auto w-100"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
