import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import ReactTooltip from "react-tooltip";
import { RiMenuFill, RiCloseFill, RiLightbulbFlashLine } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../context/UserContext";
import defaultProfile from "../assets/images/default-profile.jpg";
import { DarkModeContext } from "../context/LightModeContext";

const activeLink = "underline text-slate-200";
const inActiveLink = "text-slate-300";

const Navbar = () => {
  const { userData, userSignOut } = useContext(AuthContext);
  const { handleLightState, lightState } = useContext(DarkModeContext);

  const [menuView, setMenuView] = useState(false);
  const navigate = useNavigate();

  const handleMenuBtn = () => {
    setMenuView(!menuView);
  };

  const handleSignOut = () => {
    userSignOut()
      .then(() => navigate("/"))
      .catch((error) => toast.error(error.code));
  };

  return (
    <nav
      className={`bg-slate-800 h-16 flex items-center text-slate-200 px-2 md:px-6 sticky top-0 z-10 ${
        lightState ? "" : "border-b-2 border-slate-600"
      }`}
    >
      <div className="md:container mx-auto lg:max-w-7xl flex items-center justify-between w-full">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[180px]" />
        </Link>
        <div
          className={`absolute top-16 md:static w-1/2 sm:w-1/3 h-[100vh] md:h-auto bg-slate-800 ${
            menuView ? "left-0" : "-left-[350px]"
          } duration-500 ease-in-out pt-3 md:pt-0 pb-6 md:pb-0 px-3 md:grow flex flex-col md:flex-row gap-4 items-center border-t-2 border-slate-700 md:border-t-0`}
        >
          <div className="md:grow flex flex-col md:flex-row gap-4 justify-center w-full md:w-auto order-2 md:order-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? activeLink : inActiveLink
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? activeLink : inActiveLink
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? activeLink : inActiveLink
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? activeLink : inActiveLink
              }
            >
              FAQ
            </NavLink>
          </div>
          {/* ----- Sign-In, Sign-Up, Sign-Out button, and Profile Image -------- */}
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto order-1 md:order-2">
            {!userData ? (
              <>
                <Link
                  to="/sign-in"
                  className="w-fit border border-blue-500 py-1 px-3 rounded-md font-semibold shadow-md hover:bg-slate-600 text-sm"
                >
                  Sign-In
                </Link>
                <Link
                  to="/sign-up"
                  className="w-fit border border-blue-500 py-1 px-3 rounded-md font-semibold shadow-md hover:bg-slate-600 text-sm"
                >
                  Sign-Up
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile" data-tip={userData.displayName}>
                  <img
                    src={userData.photoURL}
                    onError={(e) => (e.currentTarget.src = defaultProfile)}
                    alt="profile_picture"
                    className="w-9 h-9 rounded-full border-2 border-slate-100"
                  />
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-fit border border-blue-500 py-1 px-3 rounded-md font-semibold shadow-md text-sm hover:bg-slate-600"
                >
                  Sign Out
                </button>
                <ReactTooltip />
              </>
            )}
          </div>
          {/* ----- dark and light mode button ------ */}
          <div className="order-3 w-full md:w-auto">
            <button onClick={handleLightState} data-tip={lightState? "Dark Mode Off" : "Dark Mode On"}>
              <RiLightbulbFlashLine
                className={`w-6 h-6 ${lightState ? "text-yellow-400" : ""}`}
              />
            </button>
            <ReactTooltip />
          </div>
        </div>
        {/* ----- Menu button ----- */}
        <div onClick={handleMenuBtn} className="md:hidden">
          {menuView ? (
            <RiCloseFill className="h-7 w-7" />
          ) : (
            <RiMenuFill className="h-7 w-7" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
