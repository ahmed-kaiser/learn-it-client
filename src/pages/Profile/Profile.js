import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { DarkModeContext } from "../../context/LightModeContext";

const Profile = () => {
  const { lightState } = useContext(DarkModeContext);

  return (
    <section className="px-2 md:px-6">
      <div className="sm:container mx-auto lg:max-w-4xl py-6">
        <div
          className={`md:grid grid-cols-4 gap-6 ${
            lightState ? "text-slate-700" : "text-slate-300"
          }`}
        >
          <div className="border-b-2 md:border-b-0 md:border-r-2 h-auto md:h-screen block sm:flex gap-4 md:block">
            <NavLink
              to="/profile"
              end
              className={({ isActive }) =>
                `my-2 block font-semibold ${isActive ? "text-blue-600" : ""}`
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/profile/account-setting"
              className={({ isActive }) =>
                `my-2 block font-semibold ${isActive ? "text-blue-600" : ""}`
              }
            >
              Account Setting
            </NavLink>
            <NavLink
              to="/profile/change-password"
              className={({ isActive }) =>
                `my-2 block font-semibold ${isActive ? "text-blue-600" : ""}`
              }
            >
              Change Password
            </NavLink>
          </div>
          <div className="col-span-3 mt-6 md:mt-0">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
