import { RiCheckboxCircleLine } from "react-icons/ri";

const CourseContent = ({ content, count }) => {
  return (
    <div className="border border-l-4 border-slate-400 my-2 p-2 rounded-sm">
      <h4 className="font-semibold text-lg text-slate-700 pb-2">
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
