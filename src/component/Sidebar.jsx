import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div
      className="d-flex flex-column p-4 bg-dark text-white"
      style={{
        width: "200px",
        position: "fixed",
        top: "53px",
        left: 0,
        height: "calc(100vh - 53px)", // ⭐ Sidebar fits perfectly
        overflowY: "auto", // ⭐ Enables scrolling
      }}
    >
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
