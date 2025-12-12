import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { findUserByEmailAndPassword } from "../../api/authAPI";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

export default function Login() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    if (!email.trim() || !password.trim()) {
      return setErr("All fields required");
    }

    try {
      const res = await findUserByEmailAndPassword(email, password);

      if (res.data.length === 0) {
        return setErr("Invalid email or password");
      }

      const user = res.data[0];

      login(user);

      toast.success("Login Successfully! ✔");

      nav("/home");
    } catch (error) {
      console.error(error);
      setErr("Login failed");
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card p-4 shadow" style={{ width: 400 }}>
        <h3 className="text-center">Login</h3>

        {err && <div className="alert alert-danger">{err}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100">Login</button>
        </form>

        <div className="text-center mt-3">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-primary fw-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
