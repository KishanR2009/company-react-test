import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { findUserByEmail, registerUser } from "../../api/authAPI";
import toast from "react-hot-toast";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "",
    fullName: "",
    email: "",
  });
  const [err, setErr] = useState("");

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setErr("");

    if (
      !form.username ||
      !form.email ||
      !form.password ||
      !form.fullName ||
      !form.role
    ) {
      return setErr("All fields are required");
    }

    if (form.username.length < 3) {
      return setErr("Username must be at least 3 characters");
    }

    if (form.password.length < 4) {
      return setErr("Password must be at least 4 characters");
    }

    try {
      const exist = await findUserByEmail(form.email);
      if (exist.data.length > 0) {
        return setErr("Email already registered");
      }

      await registerUser({ ...form, role: "customer" });

      toast.success("Registration Successfully! ✔");

      nav("/");
    } catch (error) {
      console.error(error);
      setErr("Registration failed");
    }
  };

 return (
  <div className="d-flex justify-content-center mt-5">
    <div className="card p-4 shadow" style={{ width: 400 }}>
      <h3 className="text-center">Register</h3>

      {err && <div className="alert alert-danger">{err}</div>}

      <form onSubmit={submit}>
        <input
          name="username"
          className="form-control mb-3"
          placeholder="Username"
          value={form.username}
          onChange={change}
        />

        <input
          name="email"
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={form.email}
          onChange={change}
        />

        <input
          name="password"
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={form.password}
          onChange={change}
        />

        <div className="mb-3">
          <select
            className="form-control"
            name="role"
            value={form.role}
            onChange={change}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Customer">Customer</option>
          </select>
        </div>

        <input
          name="fullName"
          type="text"
          className="form-control mb-3"
          placeholder="FullName"
          value={form.fullName}
          onChange={change}
        />

        <button className="btn btn-success w-100">Register</button>

        {/* Login Link here */}
        <p className="text-center mt-3">
          Already have an account?{" "}
          <a href="/" className="text-primary" style={{ textDecoration: "none" }}>
            Login
          </a>
        </p>
      </form>
    </div>
  </div>
);

}
