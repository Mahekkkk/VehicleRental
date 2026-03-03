import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import vehicles from "../data/vehicles";

function Booking() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const vehicle = vehicles.find((v) => v.slug === slug);

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-IN").format(value);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold mb-6">Vehicle Not Found</h1>
        <button
          onClick={() => navigate("/vehicles")}
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold
                     hover:bg-orange-600 hover:scale-105 hover:shadow-lg
                     hover:shadow-orange-500/30 transition-all duration-300"
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
    const diff =
      (new Date(returnDate) - new Date(pickupDate)) /
      (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const totalDays = calculateDays();
  const rentalCost = totalDays * pricePerDay;
  const totalPrice = rentalCost + deposit;

  // 20% advance payment
  const advanceAmount = Math.round(totalPrice * 0.2);

  const isInvalidDate =
    pickupDate &&
    returnDate &&
    new Date(returnDate) <= new Date(pickupDate);

  const isPhoneValid = /^[6-9]\d{9}$/.test(phone);

  const isFormValid =
    totalDays > 0 &&
    fullName.trim() !== "" &&
    isPhoneValid &&
    !isInvalidDate &&
    paymentMethod !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    const bookingId = "BK-" + crypto.randomUUID().slice(0, 6);

    const bookingData = {
      bookingId,
      vehicleName: vehicle.name,
      vehicleNumber: vehicle.vehicleNumber || "N/A",
      fullName,
      phone,
      pickupDate,
      returnDate,
      totalDays,
      totalPrice,
      paymentMethod,
      paidAmount:
        paymentMethod === "Pay Later" ? 0 : advanceAmount,
    };

    navigate("/booking-success", { state: bookingData });
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">
      <div
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 
                   rounded-3xl shadow-2xl p-10
                   hover:shadow-orange-500/10 transition-all duration-500"
      >
        <div className="mb-10">
          <h1
            className="text-4xl font-extrabold tracking-tight
                       bg-gradient-to-r from-orange-400 to-orange-600
                       bg-clip-text text-transparent"
          >
            Book {vehicle.name}
          </h1>
          <p className="text-orange-500 mt-3 font-medium">
            ₹{formatPrice(pricePerDay)} / day
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
              placeholder="Enter your name"
              className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400
                         focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              placeholder="10-digit mobile number"
              className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400
                         focus:outline-none focus:border-orange-500"
              required
            />
            {phone && !isPhoneValid && (
              <p className="text-red-400 text-sm mt-1">
                Enter a valid 10-digit mobile number
              </p>
            )}
          </div>

          {/* Pickup */}
          <div>
            <label className="block mb-2 text-gray-300">
              Pickup Date
            </label>
            <input
              type="date"
              min={today}
              value={pickupDate}
              onChange={(e) =>
                setPickupDate(e.target.value)
              }
              className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white
                         focus:outline-none focus:border-orange-500
                         [color-scheme:dark]"
            />
          </div>

          {/* Return */}
          <div>
            <label className="block mb-2 text-gray-300">
              Return Date
            </label>
            <input
              type="date"
              min={pickupDate || today}
              value={returnDate}
              onChange={(e) =>
                setReturnDate(e.target.value)
              }
              className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white
                         focus:outline-none focus:border-orange-500
                         [color-scheme:dark]"
            />
            {isInvalidDate && (
              <p className="text-red-400 text-sm mt-1">
                Return date must be after pickup date
              </p>
            )}
          </div>

          {/* Summary */}
          <div className="mt-8 bg-white/5 border border-white/10 p-6 rounded-2xl space-y-2">
            <p>Total Days: {totalDays}</p>
            <p>
              Rental: ₹{formatPrice(pricePerDay)} ×{" "}
              {totalDays} = ₹{formatPrice(rentalCost)}
            </p>
            <p>
              Security Deposit: ₹{formatPrice(deposit)}
            </p>
            <p className="text-2xl font-bold mt-3 text-orange-500">
              Total Payable: ₹{formatPrice(totalPrice)}
            </p>
          </div>

          {/* Payment Section */}
          <div className="mt-8 bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
            <h3 className="text-xl font-semibold text-orange-400">
              Select Payment Method
            </h3>

            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  value="UPI"
                  checked={paymentMethod === "UPI"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />
                UPI (GPay / PhonePe / Paytm)
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  value="Card"
                  checked={paymentMethod === "Card"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />
                Debit / Credit Card
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  value="Pay Later"
                  checked={
                    paymentMethod === "Pay Later"
                  }
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />
                Pay at Pickup
              </label>
            </div>

            {paymentMethod &&
              paymentMethod !== "Pay Later" && (
                <div className="mt-4 text-sm text-orange-300">
                  Advance Payable Now: ₹
                  {formatPrice(advanceAmount)}
                </div>
              )}
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full mt-6 py-4 rounded-full font-semibold transition-all duration-300 ${
              isFormValid
                ? "bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
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