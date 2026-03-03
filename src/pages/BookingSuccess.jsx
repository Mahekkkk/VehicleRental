import { useLocation, useNavigate } from "react-router-dom";

function BookingSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1>No Booking Data Found</h1>
      </div>
    );
  }

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-IN").format(value);

  const remainingAmount =
    state.totalPrice - (state.paidAmount || 0);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 
                      rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-green-400 mb-6">
          🎉 Booking Confirmed!
        </h1>

        <div className="space-y-3 text-lg">

          <p><strong>Booking ID:</strong> {state.bookingId}</p>
          <p><strong>Vehicle:</strong> {state.vehicleName}</p>
          <p><strong>Vehicle Number:</strong> {state.vehicleNumber}</p>
          <p><strong>Name:</strong> {state.fullName}</p>
          <p><strong>Phone:</strong> {state.phone}</p>
          <p><strong>Pickup Date:</strong> {state.pickupDate}</p>
          <p><strong>Return Date:</strong> {state.returnDate}</p>
          <p><strong>Total Days:</strong> {state.totalDays}</p>

          <div className="border-t border-white/10 pt-4 mt-4 space-y-2">
            <p><strong>Payment Method:</strong> {state.paymentMethod}</p>

            <p>
              <strong>Total Booking Amount:</strong> ₹
              {formatPrice(state.totalPrice)}
            </p>

            <p className="text-green-400 font-semibold">
              <strong>Amount Paid:</strong> ₹
              {formatPrice(state.paidAmount || 0)}
            </p>

            {remainingAmount > 0 && (
              <p className="text-yellow-400 font-semibold">
                <strong>Remaining Amount (Pay at Pickup):</strong> ₹
                {formatPrice(remainingAmount)}
              </p>
            )}
          </div>

          {remainingAmount === 0 ? (
            <p className="mt-4 text-green-400">
              ✅ Your booking is fully paid.
            </p>
          ) : (
            <p className="mt-4 text-orange-400">
              💡 Please pay the remaining amount at vehicle pickup.
            </p>
          )}

        </div>

        <button
          onClick={() => navigate("/vehicles")}
          className="mt-8 bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-600 transition"
        >
          Back to Vehicles
        </button>

      </div>
    </div>
  );
}

export default BookingSuccess;