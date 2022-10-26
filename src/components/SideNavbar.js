import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="font-serif font-bold text-xl border-b-2 border-slate-100 pb-2">
        All Category
      </h2>
      <ul>
        {categories.map((item) => (
          <li key={item.id}>
            <NavLink
              key={item.id}
              to={`/category/${item.id}/courses`}
              className={({ isActive }) =>
                `block py-2 px-2 border my-2 rounded-sm font-semibold text-blue-700 ${
                  isActive ? "bg-blue-50" : "hover:bg-blue-50"
                }`
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
