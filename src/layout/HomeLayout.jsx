import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import { useAuth } from "../context/AuthContext";

export default function HomeLayout() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />

      {user && <Sidebar />}

      <div
        style={{
          marginTop: "70px",
          marginLeft: user ? "250px" : "0",
          padding: "20px",
          transition: "0.3s",
        }}
      >
        <Outlet />
      </div>
    </>
  );
}
