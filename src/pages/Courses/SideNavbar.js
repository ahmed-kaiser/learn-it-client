import { useContext } from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../../context/LightModeContext";

const SideNavbar = () => {
  const [categories, setCategories] = useState([]);
  const { lightState } = useContext(DarkModeContext);

  useEffect(() => {
    fetch("https://learnit-server-ahmed-kaiser.vercel.app/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="order-1 md:order-2">
      <h2 className="font-serif font-bold text-xl border-b-2 border-slate-100 pb-2">
        All Category
      </h2>
      <ul>
        {categories.map((item) => (
          <li key={item.id}>
            <NavLink
              key={item.id}
              to={`/courses/category/${item.id}`}
              className={({ isActive }) =>
                `block py-2 px-2 border my-2 rounded-sm font-semibold duration-500 ${
                  isActive ? "bg-blue-50" : "hover:bg-blue-50"
                } ${
                  lightState
                    ? "text-blue-700"
                    : "text-slate-300 hover:text-slate-900"
                } ${isActive && !lightState ? "text-slate-900" : ""}`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
