import Navbar from "../components/navbar";
import Sidebar from "../components/side-bar";
import Footer from "../components/footer";
import { useEffect } from "react";
import feather from "feather-icons";

const MainLayout = ({ children }) => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <>
      <Sidebar />
      <div className="page-wrapper">
        <Navbar />

        {children}

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
