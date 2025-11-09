import { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    api
      .get("dashboard/", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-4">Loading dashboard...</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Admin Dashboard</h2>
      <div className="row g-4">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card shadow-sm text-center h-100">
              <div className="card-body">
                <h3 className="card-title">{value}</h3>
                <p className="card-text text-muted">
                  {key.replaceAll("_", " ").toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
