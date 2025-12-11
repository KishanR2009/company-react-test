import React from "react";
import Router from "./router/Router";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <AuthProvider>
      <Router />
      <Toaster position="top-left" />
    </AuthProvider>
  );
}
