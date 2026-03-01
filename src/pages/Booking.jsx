import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import vehicles from "../data/vehicles";

function Booking() {
  const { slug } = useParams(); // ✅ slug
  const navigate = useNavigate();

  const vehicle = vehicles.find((v) => v.slug === slug);

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-IN").format(value);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold mb-6">Vehicle Not Found</h1>
        <button
          onClick={() => navigate("/vehicles")}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold
                     hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Browse Vehicles
        </button>
      </div>
    );
  }

  const pricePerDay = vehicle.pricePerDay || 0;
  const deposit = vehicle.securityDeposit || 0;

  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 0;
    const diff = (new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const totalDays = calculateDays();
  const rentalCost = totalDays * pricePerDay;
  const totalPrice = rentalCost + deposit;

  const isInvalidDate = pickupDate && returnDate && new Date(returnDate) <= new Date(pickupDate);
  const isPhoneValid = /^[6-9]\d{9}$/.test(phone);
  const isFormValid = totalDays > 0 && fullName.trim() !== "" && isPhoneValid && !isInvalidDate;

  const handleSubmit = () => {
    alert("Booking confirmed! (Demo)");
    navigate("/vehicles");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10">

        <div className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight">Book {vehicle.name}</h1>
          <p className="text-gray-400 mt-3">₹{formatPrice(pricePerDay)} / day</p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); if (isFormValid) handleSubmit(); }}
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-gray-300">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your name"
              className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-gray-300">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit mobile number"
              className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              required
            />
            {phone && !isPhoneValid && <p className="text-red-400 text-sm mt-1">Enter a valid 10-digit mobile number</p>}
          </div>

          {/* Pickup */}
          <div>
            <label className="block mb-2 text-gray-300">Pickup Date</label>
            <input
              type="date"
              min={today}
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white"
              required
            />
          </div>

          {/* Return */}
          <div>
            <label className="block mb-2 text-gray-300">Return Date</label>
            <input
              type="date"
              min={pickupDate || today}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white"
              required
            />
            {isInvalidDate && <p className="text-red-400 text-sm mt-1">Return date must be after pickup date</p>}
          </div>

          {/* Summary */}
          <div className="mt-8 bg-white/5 border border-white/10 p-6 rounded-2xl space-y-2">
            <p>Total Days: {totalDays}</p>
            <p>Rental: ₹{formatPrice(pricePerDay)} × {totalDays} = ₹{formatPrice(rentalCost)}</p>
            <p>Security Deposit: ₹{formatPrice(deposit)}</p>
            <p className="text-2xl font-bold mt-3">Total Payable: ₹{formatPrice(totalPrice)}</p>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full mt-6 py-4 rounded-full font-semibold transition-all duration-300 ${
              isFormValid ? "bg-white text-black hover:scale-105 hover:shadow-2xl" : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;