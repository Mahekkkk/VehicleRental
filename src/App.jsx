import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import BookingSuccess from "./pages/BookingSuccess";



function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicle/:slug" element={<VehicleDetails />} />
            <Route path="/booking/:slug" element={<Booking />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;