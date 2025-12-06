import React, { useEffect, useState, useCallback } from "react"; // ⬅️ ADDED useCallback
import axios from "axios";
import "./Orders.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Wrap in useCallback to memoize the function definition
  const fetchOrders = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/allOrders`, {
        withCredentials: true,
      });
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders", error);
    }
  }, []); // Dependency is constant, so fetchOrders is stable

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]); // Now safely lists the stable fetchOrders function

  if (orders.length === 0) {
    return (
      <div className="orders empty-orders">
        <p>You haven't placed any orders today</p>
      </div>
    );
  }

  return (
    <div className="orders">
      <h2 className="orders-title">Orders</h2>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Price (₹)</th>
            <th>Type</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>

              <td className={order.mode === "BUY" ? "buy-text" : "sell-text"}>
                {order.mode}
              </td>

              <td>
                {new Date(
                  order.createdAt || order._id.substring(0, 8)
                ).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
