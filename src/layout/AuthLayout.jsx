import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4">
        <Link
          className="navbar-brand fw-bold fs-4 d-flex align-items-center"
          to="/"
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
        </div>
      </nav>

      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
}
