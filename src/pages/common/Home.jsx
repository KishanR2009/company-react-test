import React from "react";
import { useAuth } from "../../context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="mt-5">
      <h2>Welcome {user?.username}</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
}
