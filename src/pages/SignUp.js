import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormInputAlert from "../components/FormInputAlert";
import FormSocialLinkBtn from "../components/FormSocialLinkBtn";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="px-2 md:px-6">
      <div className="w-[310px] sm:w-[340px] mx-auto my-16 p-4 border border-slate-600 shadow-md rounded-md">
        <h1 className="text-center text-lg font-serif font-bold text-slate-600 border-b-2 pb-2">
          Sign-Up Now
        </h1>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-2">
          <div className="my-2">
            <input
              {...register("full_name", {
                required: "Name required",
                maxLength: { value: 20, message: "Maximum 20 character" },
              })}
              type="text"
              placeholder="Your Full Name"
              className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
            />
            {errors.full_name && (
              <FormInputAlert message={errors.full_name?.message} />
            )}
          </div>
          <div className="my-2">
            <input
              {...register("photo_url", { required: "Photo url required" })}
              type="text"
              placeholder="Your Photo URL"
              className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
            />
            {errors.photo_url && (
              <FormInputAlert message={errors.photo_url?.message} />
            )}
          </div>
          <div className="my-2">
            <input
              {...register("email", { required: "email required", pattern: {value: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/ , message: "Invalid pattern"}})}
              type="email"
              placeholder="Your Email"
              className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
            />
            {errors.email && <FormInputAlert message={errors.email?.message} />}
          </div>
          <div className="my-2">
            <input
              {...register("password", { required: "Password required", minLength: {value: 8, message: "minimum 8 character required"} })}
              type="password"
              placeholder="Password"
              className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
            />
            {errors.password && (
              <FormInputAlert message={errors.password?.message} />
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 w-full py-2 px-2 mt-3 text-white uppercase font-semibold rounded-md"
          >
            sign up
          </button>
        </form>
        <p className="text-center py-2">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-blue-600 underline">
            Sign-In
          </Link>
        </p>
        <FormSocialLinkBtn />
      </div>
    </section>
  );
};

export default SignUp;
