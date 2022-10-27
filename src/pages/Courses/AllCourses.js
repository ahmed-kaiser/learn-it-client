import { useLoaderData } from "react-router-dom";
import CourseCard from "../../components/CourseCard";

const AllCourses = () => {
  const allCourse = useLoaderData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-6">
      {allCourse.map((item) => (
        <CourseCard key={item.id} course={item} />
      ))}
    </div>
  );
};

export default AllCourses;
