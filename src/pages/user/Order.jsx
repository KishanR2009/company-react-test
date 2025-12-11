import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

export default function Order() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  const loadOrders = async () => {
    const ordersRespone = await axios.get("http://localhost:3000/orders");

    const usersResponse = await axios.get("http://localhost:3000/users");

    setUsers(usersResponse.data);

    const filteredOrders =
      user.role === "admin"
        ? ordersRespone.data
        : ordersRespone.data.filter((order) => order.userId === user.id);

    setOrders(filteredOrders);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const getUserName = (userId) => {
    const u = users.find((user) => user.id === userId);
    return u ? u.username : "Unknown";
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>
        <h3 className="fw-bold text-primary mb-3">Orders</h3>

        {orders.length === 0 ? (
          <h5 className="text-center text-muted">No orders found</h5>
        ) : (
          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                {user.role === "admin" && <th>Customer</th>}
                <th>Order Date</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o, index) => (
                <tr key={o.id}>
                  <td>{index + 1}</td>
                  <td>{o.name}</td>
                  <td>{o.price}</td>
                  <td>{o.qty}</td>
                  <td>{o.price * o.qty}</td>
                  {user.role === "admin" && <td>{getUserName(o.userId)}</td>}
                  <td>{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
