import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logout Successfully! ✔");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4 shadow-sm fixed-top d-flex justify-content-end">
  

      {/* Show Logout ONLY when user is logged in */}
      {user && (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}
