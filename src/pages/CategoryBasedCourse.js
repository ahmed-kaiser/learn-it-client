import { useLoaderData } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import SideNavbar from "../components/SideNavbar";

const CategoryBasedCourse = () => {
    const allCourse = useLoaderData();

    return (
        <section className="px-2 md:px-6">
            <div className="md:container mx-auto lg:max-w-7xl py-6 grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <h2 className="font-serif font-bold text-xl border-b-2 border-slate-100 pb-2">All Courses</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-6">
                        {
                            allCourse.map(item => <CourseCard key={item.id} course={item} />)
                        }
                    </div>
                </div>
                <SideNavbar />
            </div>
        </section>
    );
};

export default CategoryBasedCourse;