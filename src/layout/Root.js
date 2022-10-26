import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <>
            <Navbar />
            <main className="relative -z-20 md:static min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;