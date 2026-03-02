import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      
      <header>
        <Navbar />
      </header>

      <main className="flex-1 w-full">
        <Outlet />
      </main>        

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default Layout;