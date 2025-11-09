import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="card h-100">
      <img
        src={movie.poster_url}
        className="card-img-top"
        alt={movie.title}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text text-muted">{movie.genre}</p>
        <Link to={`/movie/${movie.id}`} className="btn btn-primary mt-auto">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
