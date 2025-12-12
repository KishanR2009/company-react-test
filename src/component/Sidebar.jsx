import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  if (!user) return null; // Hide sidebar if not logged in

  return (
    <div
      className="d-flex flex-column p-3 bg-dark text-white vh-100"
      style={{ width: "250px", position: "fixed", top: 0, left: 0 }}
    >
      <Link
        to="/home"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none fw-bold fs-4"
      >
        <i className="bi bi-list me-2"></i> Menu
      </Link>
      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/home/category" className="nav-link text-white">
            <i className="bi bi-tags me-2"></i> Category
          </Link>
        </li>

        <li>
          <Link to="/home/food" className="nav-link text-white">
            <i className="bi bi-basket me-2"></i> Food
          </Link>
        </li>

        {user.role !== "admin" && (
          <li>
            <Link to="/home/cart" className="nav-link text-white">
              <i className="bi bi-cart me-2"></i> Cart
            </Link>
          </li>
        )}

        <li>
          <Link to="/home/order" className="nav-link text-white">
            <i className="bi bi-receipt me-2"></i> Order
          </Link>
        </li>
      </ul>

      <hr />

      <div className="text-center text-secondary small">
        Logged in as <strong>{user?.username}</strong>
      </div>
    </div>
  );
}
