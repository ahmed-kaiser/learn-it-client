import { RiStarFill, RiArrowRightSFill } from "react-icons/ri";

const CourseCard = ({ course }) => {
  return (
    <div className="w-[280px] rounded-lg bg-slate-50 relative cursor-pointer shadow-md hover:shadow-lg">
      <img
        src={course.image}
        alt=""
        className="w-full h-40 rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-2 mb-14">
        <h4 className="font-bold text-slate-600">{course.title}</h4>
      </div>
      <div className="absolute left-0 bottom-0 w-full p-2 flex justify-between items-center border-t-2">
        <p className="flex items-center gap-1 font-semibold">
          <RiStarFill className="text-yellow-400 h-5 w-5" />
          {course.ratting}
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 py-1 px-4 rounded-md text-slate-100 font-semibold flex items-center">
          Explore
          <RiArrowRightSFill className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
