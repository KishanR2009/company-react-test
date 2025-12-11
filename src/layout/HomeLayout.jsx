import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}
