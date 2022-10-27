import { useContext } from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { DarkModeContext } from "../../context/LightModeContext";

const CourseContent = ({ content, count }) => {
  const { lightState } = useContext(DarkModeContext);

  return (
    <div className="border border-l-4 border-slate-400 my-2 p-2 rounded-sm">
      <h4
        className={`font-semibold text-lg pb-2 ${
          lightState ? "text-slate-600" : "text-slate-400"
        }`}
      >
        <span className="text-xl text-blue-600">{count + 1}</span>{" "}
        {content.title}
      </h4>
      <ul className="pl-3">
        {content.content.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <span className="h-4 w-4">
              <RiCheckboxCircleLine />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseContent;
