import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/LightModeContext";

const CategoryCard = ({ category }) => {
  const { lightState } = useContext(DarkModeContext);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/courses/category/${id}`);
  };

  return (
    <div
      onClick={() => handleClick(category.id)}
      className={`w-[140px] sm:w-[160px] max-w-[200px] border text-center p-2 cursor-pointer rounded-md shadow hover:shadow-md font-semibold ${
        lightState
          ? "text-slate-800 bg-slate-50"
          : "text-slate-700 bg-slate-400"
      }`}
    >
      <img src={category.image} alt="" className="w-[50px] h-[50px] mx-auto" />
      <h4 className="mt-2 text-slate-800">{category.name}</h4>
      <p>
        {category.total_course}{" "}
        {category.total_course > 1 ? "Corses" : "Course"}
      </p>
    </div>
  );
};

export default CategoryCard;
