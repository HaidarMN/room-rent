import { Outlet } from "react-router";

// Components
import Navbar from "../Components/General/Navbar";
// import Sidebar from "../Components/General/Sidebar";
import Footer from "../Components/General/Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      {/* <Sidebar /> */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
