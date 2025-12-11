import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user?.role === "admin";

  const handleLogout = () => {
    logout();
    toast.success("Logout Successfully! ✔");

    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4">
      <Link
        className="navbar-brand fw-bold fs-4 d-flex align-items-center"
        to="/home"
      >
        <i className="bi bi-box-seam me-2"></i> MyApp
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        {!user ? (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link px-3 fw-semibold text-white" to="/">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link px-3 fw-semibold text-white"
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        ) : (
          <>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link px-3 fw-semibold text-white"
                  to="/home/category"
                >
                  Category
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link px-3 fw-semibold text-white"
                  to="/home/food"
                >
                  Food
                </Link>
              </li>

              {!isAdmin && (
                <li className="nav-item">
                  <Link
                    className="nav-link px-3 fw-semibold text-white"
                    to="/home/cart"
                  >
                    Cart
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link
                  className="nav-link px-3 fw-semibold text-white"
                  to="/home/order"
                >
                  Order
                </Link>
              </li>
            </ul>

            <button
              className="btn btn-danger btn-sm ms-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
