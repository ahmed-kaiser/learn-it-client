import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { DarkModeContext } from "../context/LightModeContext";

const Root = () => {
  const { lightState } = useContext(DarkModeContext);

  return (
    <>
      <Navbar />
      <main
        className={`min-h-screen ${
          lightState ? "" : "bg-slate-900 text-white"
        } duration-700`}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
