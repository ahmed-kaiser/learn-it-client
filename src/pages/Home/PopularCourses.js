import { useEffect } from "react";
import { useState } from "react";
import CourseCard from "../../components/CourseCard";

const PopularCourses = () => {
  let [popularList, setPopularList] = useState([]);

  useEffect(() => {
    fetch("https://learnit-server-ahmed-kaiser.vercel.app/courses")
      .then((response) => response.json())
      .then((data) => {
        let tempList = [];
        for (let i of data) {
          if (i.ratting === 5) {
            tempList.push(i);
          }
          if (tempList.length === 4) {
            break;
          }
        }
        setPopularList(tempList);
      });
  }, []);

  return (
    <section className="px-3 md:px-6">
      <div className="md:container mx-auto lg:max-w-7xl py-10">
        <h2 className="font-serif font-bold text-2xl border-b-2 border-slate-100 pb-2">
          Our Popular Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mt-6">
          {popularList.map((item) => (
            <CourseCard key={item.id} course={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
