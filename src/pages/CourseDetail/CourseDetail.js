import { Link, useLoaderData } from "react-router-dom";
import { RiFocus3Line, RiPrinterLine } from "react-icons/ri";
import image_1 from "../../assets/images/image2.png";
import image_2 from "../../assets/images/image1.png";
import CourseContent from "./CourseContent";
import ReactTooltip from "react-tooltip";
import Pdf from "react-to-pdf";
import { useRef } from "react";

const CourseDetail = () => {
  const course = useLoaderData();
  const pdfRef = useRef();

  return (
    <section className="px-2 md:px-6 pt-6">
      <div className="sm:container mx-auto lg:max-w-6xl">
        <h2 className="font-serif font-bold text-2xl text-slate-700 pb-4 flex items-center gap-3">
          {course.title}{" "}
          <Pdf targetRef={pdfRef} filename="course-content.pdf" x={5} y={20} scale={0.8}>
            {({ toPdf }) => <span
            onClick={toPdf}
            className="h-6 w-6 cursor-pointer"
            data-tip="Print Course Content"
          >
            <RiPrinterLine />
          </span>}
          </Pdf>
        </h2>
        {/* ------- Course Description -------- */}
        <div className="flex flex-col md:flex-row items-center border rounded-md mb-14">
          <img
            src={course.image}
            alt=""
            className="w-full md:max-w-[350px] min-h-[250px] rounded-tl-md rounded-tr-md md:rounded-bl-md "
          />
          <div className="col-span-2 px-3 pb-3 md:pb-0">
            <h3 className="font-bold text-xl pb-3 pt-2 md:pt-0">
              Course Description
            </h3>
            <p className="font-semibold">{course.description}</p>
            <Link
              to={`/course/${course.id}/payment-detail`}
              className="inline-block bg-blue-500 py-2 px-5 font-semibold text-white mt-3 rounded-md upp "
            >
              Get Premium Access
            </Link>
          </div>
        </div>

        {/* -------- What you will learn -------- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-14">
          <div>
            <h3 className="font-bold text-2xl pb-4 text-slate-700">
              What You will Learn
            </h3>
            <ul className="max-w-sm">
              {course["you-will-learn"].map((item, index) => (
                <li key={index} className="flex items-center gap-1 my-1">
                  <span className="h-4 w-4">
                    <RiFocus3Line className="h-4 w-4 text-blue-600" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={image_1} alt="" />
        </div>

        {/* -------- Benefits -------- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-14">
          <img src={image_2} alt="" className="order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <h3 className="font-bold text-2xl pb-4 text-slate-700">
              Other Benefit
            </h3>
            <ul className="max-w-sm">
              {course["benefit"].map((item, index) => (
                <li key={index} className="flex items-center gap-1 my-1">
                  <span className="h-4 w-4">
                    <RiFocus3Line className="h-4 w-4 text-blue-600" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* -------- Course content -------- */}
        <div className="mb-16 max-w-4xl mx-auto" ref={pdfRef}>
          <h3 className="font-bold text-2xl pb-4 text-center text-slate-700">
            Course Content
          </h3>
          <ul>
            {course["course-content"].map((item, index) => (
              <CourseContent key={index} content={item} count={index} />
            ))}
          </ul>
        </div>

        {/* -------- Course Instructor -------- */}
        <div className="mb-16 max-w-4xl mx-auto bg-slate-50 px-6 py-10 rounded-lg">
          <h3 className="font-bold text-2xl pb-4 text-center text-slate-700">
            Course Instructor
          </h3>
          <div className="mt-6">
            <img
              src={course.instructor.image}
              alt="instructor_image"
              className="w-28 h-28 rounded-full mx-auto"
            />
            <div>
              <h4 className="font-bold mb-3 text-lg text-center">
                {course.instructor.name}
              </h4>
              <p className="max-w-4xl mx-auto">{course.instructor.about}</p>
            </div>
          </div>
        </div>
        <ReactTooltip />
      </div>
    </section>
  );
};

export default CourseDetail;
