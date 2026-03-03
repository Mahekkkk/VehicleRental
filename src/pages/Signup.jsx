import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">

      {/* Orange Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15),transparent_60%)]"></div>

      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">

        <h1 className="text-4xl font-extrabold text-center mb-8 
               bg-gradient-to-r from-orange-400 to-orange-600 
               bg-clip-text text-transparent">
          Create Account
        </h1>

        <form className="space-y-6">

          <div>
            <label className="text-gray-400 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 py-3 rounded-full font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30"
          >
            Sign Up
          </button>

        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;