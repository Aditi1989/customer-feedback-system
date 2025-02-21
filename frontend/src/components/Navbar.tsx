import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="p-4 bg-blue-600 text-white flex justify-between">
    <h1 className="text-xl font-bold">Customer Feedback System</h1>
    <div>
      <Link className="px-3" to="/">Home</Link>
      <Link className="px-3" to="/dashboard">Dashboard</Link>
      <Link className="px-3" to="/admin">Admin Panel</Link>
    </div>
  </nav>
);

export default Navbar;
