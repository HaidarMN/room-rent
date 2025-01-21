import { Outlet } from "react-router";

// Components
import Navbar from "../Components/General/Navbar";
import Footer from "../Components/General/Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
