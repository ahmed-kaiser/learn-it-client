import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import FormInputAlert from "../components/FormInputAlert";
import { DarkModeContext } from "../context/LightModeContext";
import { AuthContext } from "../context/UserContext";

const PaymentDetail = () => {
  const { userData } = useContext(AuthContext);
  const { lightState } = useContext(DarkModeContext);
  const [isAccept, setIsAccept] = useState(false);
  const course = useLoaderData();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setValue("name", userData?.displayName);
    setValue("email", userData?.email);
  }, [setValue, userData]);

  const handleFormSubmit = (data) => {
    navigate("/order-summary");
  };

  const handleAcceptBtn = (e) => {
    setIsAccept(e.target.checked);
  };

  return (
    <section className="px-2 md:px-6">
      <div className="sm:container mx-auto lg:max-w-7xl py-10">
        <h1
          className={`text-center font-bold text-xl ${
            lightState ? "text-slate-600" : "text-slate-300"
          }`}
        >
          Payment Details
        </h1>
        <div className="border px-3 py-3 mt-4 rounded-md">
          <p className="my-2">
            <span className="font-semibold mr-1">Registering for:</span>{" "}
            <span>{course.title}</span>
          </p>
          <p className="my-2">
            <span className="font-semibold mr-1">Price:</span>
            <span>{course.price}</span>
          </p>
        </div>
        {/* -------- Payment Detail form -------- */}
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="my-6 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border rounded-md"
        >
          <div className="px-4">
            {/* -------- Name field -------- */}
            <div className="my-3">
              <label
                className={`inline-block font-semibold pb-1 ${
                  lightState ? "text-slate-700" : "text-slate-400"
                }`}
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                {...register("name", { required: "Name required" })}
                type="text"
                placeholder="Your Name"
                className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
              />
              {errors.name && <FormInputAlert message={errors.name?.message} />}
            </div>
            {/* -------- Email field ------- */}
            <div className="my-3">
              <label
                className={`inline-block font-semibold pb-1 ${
                  lightState ? "text-slate-700" : "text-slate-400"
                }`}
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                {...register("email", { required: "Email required" })}
                type="email"
                placeholder="Your Email"
                className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
              />
              {errors.email && (
                <FormInputAlert message={errors.email?.message} />
              )}
            </div>
            {/* -------- College / Organization name field --------  */}
            <div className="my-3">
              <label
                className={`inline-block font-semibold pb-1 ${
                  lightState ? "text-slate-700" : "text-slate-400"
                }`}
              >
                College / Organization Name
                <span className="text-red-500">*</span>
              </label>
              <input
                {...register("institute_name", {
                  required: "Institute name required",
                })}
                type="text"
                placeholder="Institute Name"
                className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
              />
              {errors.institute_name && (
                <FormInputAlert message={errors.institute_name?.message} />
              )}
            </div>
            {/* -------- Graduation Year field -------- */}
            <div className="my-3">
              <label
                className={`inline-block font-semibold pb-1 ${
                  lightState ? "text-slate-700" : "text-slate-400"
                }`}
              >
                Graduation Year<span className="text-red-500">*</span>
              </label>
              <input
                {...register("pass_year", {
                  required: "Graduation year required",
                })}
                type="number"
                placeholder="Graduation year"
                className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
              />
              {errors.pass_year && (
                <FormInputAlert message={errors.pass_year?.message} />
              )}
            </div>
          </div>
          <div className="px-4">
            {/* -------- Profession field --------- */}
            <div className="my-3">
              <label
                className={`inline-block font-semibold pb-1 ${
                  lightState ? "text-slate-700" : "text-slate-400"
                }`}
              >
                You are a?<span className="text-red-500">*</span>
              </label>
              <div className="flex justify-around">
                <div className="flex gap-1">
                  <input
                    {...register("profession", {
                      required: "Profession type required",
                    })}
                    type="radio"
                    value="student"
                  />
                  <label>Student</label>
                </div>
                <div className="flex gap-1">
                  <input
                    {...register("profession", {
                      required: "Profession type required",
                    })}
                    type="radio"
                    value="working professional"
                  />
                  <label>Working Professional</label>
                </div>
              </div>
              {errors.profession && (
                <FormInputAlert message={errors.profession?.message} />
              )}
            </div>
            {/* -------- Phone number field -------- */}
            <div className="my-3">
              <label
                className={`inline-block font-semibold pb-1 ${
                  lightState ? "text-slate-700" : "text-slate-400"
                }`}
              >
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                {...register("phone_number", {
                  required: "Phone number required",
                })}
                type="number"
                placeholder="Phone Number"
                className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
              />
              {errors.phone_number && (
                <FormInputAlert message={errors.phone_number?.message} />
              )}
            </div>
            {/* -------- Country field -------- */}
            <div className="my-3">
              <label
                className={`inline-block font-semibold pb-1 ${
                  lightState ? "text-slate-700" : "text-slate-400"
                }`}
              >
                Country<span className="text-red-500">*</span>
              </label>
              <input
                {...register("country", {
                  required: "Counter name required",
                })}
                type="text"
                placeholder="Country"
                className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
              />
              {errors.country && (
                <FormInputAlert message={errors.country?.message} />
              )}
            </div>
            {/* -------- Terms and condition check box ------- */}
            <div className="flex items-center gap-2">
              <input onChange={handleAcceptBtn} type="checkbox" />
              <label>
                You agree to our{" "}
                <Link className="text-blue-700 underline">Privacy Policy</Link>{" "}
                and{" "}
                <Link className="text-blue-700 underline">
                  terms & conditions
                </Link>
                .
              </label>
            </div>
            <button
              disabled={!isAccept}
              className={`py-2 px-6 w-full mt-4 text-white font-semibold rounded-md ${
                isAccept ? "bg-green-500" : "bg-slate-300"
              }`}
            >
              Save & Next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PaymentDetail;
