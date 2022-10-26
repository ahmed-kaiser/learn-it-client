import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import ReactTooltip from "react-tooltip";
import {
  RiMenuFill,
  RiCloseFill,
  RiLightbulbFlashLine,
  RiLightbulbLine,
} from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../context/UserContext";
import defaultProfile from "../assets/images/default-profile.jpg";

const activeLink = "underline text-slate-200";
const inActiveLink = "text-slate-300";

const Navbar = () => {
  const { userData, userSignOut } = useContext(AuthContext);
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
    <nav className="bg-slate-800 h-16 flex items-center text-slate-200 relative px-2 md:px-6">
      <div className="md:container mx-auto lg:max-w-7xl flex items-center justify-between w-full">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[180px]" />
        </Link>
        <div
          className={`absolute md:static left-0 w-full bg-slate-800 ${
            menuView ? "top-16" : "-top-[300px]"
          } -z-10 md:z-10 duration-500 ease-in-out pt-3 md:pt-0 pb-6 md:pb-0 px-3 flex flex-col md:flex-row gap-4 items-center justify-between border-t-2 border-slate-700 md:border-t-0`}
        >
          <div className="grow flex flex-col md:flex-row gap-4 justify-center w-full md:w-auto order-2 md:order-1">
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
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto order-1 md:order-2">
            {!userData ? (
              <>
                <Link
                  to="/sign-in"
                  className="w-fit border py-1 px-3 rounded-md font-semibold shadow-md hover:bg-slate-600 text-sm"
                >
                  Sign-In
                </Link>
                <Link
                  to="/sign-up"
                  className="w-fit border py-1 px-3 rounded-md font-semibold shadow-md hover:bg-slate-600 text-sm"
                >
                  Sign-Up
                </Link>
              </>
            ) : (
              <>
                <Link to='/profile' data-tip={userData.displayName}>
                  <img
                    src={userData.photoURL}
                    onError={(e) => (e.currentTarget.src = defaultProfile)}
                    alt="profile_picture"
                    className="w-9 h-9 rounded-full"
                  />
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-fit border py-1 px-3 rounded-md font-semibold shadow-md text-sm hover:bg-slate-600"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
          <div className="order-3 w-full md:w-auto">
            <button>
              <RiLightbulbFlashLine className="w-6 h-6 text-yellow-400" />
            </button>
          </div>
        </div>
        <div onClick={handleMenuBtn} className="md:hidden">
          {menuView ? (
            <RiCloseFill className="h-7 w-7" />
          ) : (
            <RiMenuFill className="h-7 w-7" />
          )}
        </div>
      </div>
      <ReactTooltip />
    </nav>
  );
};

export default Navbar;
