import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <>
            <Navbar />
            <main className="relative -z-20 md:static">
                <Outlet />
            </main>
        </>
    );
};

export default Root;