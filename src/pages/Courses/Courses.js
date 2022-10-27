import { Outlet } from "react-router-dom";
import SideNavbar from "./SideNavbar";

const Courses = () => {
  return (
    <section className="px-2 md:px-6">
      <div className="md:container mx-auto lg:max-w-7xl py-6 grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="col-span-2 lg:col-span-3 order-2 md:order-1">
          <h2 className="font-serif font-bold text-xl border-b-2 border-slate-100 pb-2">
            All Courses
          </h2>
          <Outlet />
        </div>
        <SideNavbar />
      </div>
    </section>
  );
};

export default Courses;
