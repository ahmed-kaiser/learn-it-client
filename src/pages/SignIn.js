import { useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import FormInputAlert from "../components/FormInputAlert";
import FormSocialLinkBtn from "../components/FormSocialLinkBtn";
import { AuthContext } from "../context/UserContext";

const SignIn = () => {
  const { signInWithEmail } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const handleFormSubmit = (data) => {
    signInWithEmail(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success(`Welcome, ${result.user.displayName}`);
      })
      .catch((error) => toast.error(error.code));
  };

  useEffect(() => {
    if(isSubmitSuccessful) {
        reset({
            email: "",
            password: "",
          });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <section className="px-2 md:px-6">
      <div className="w-[310px] sm:w-[340px] mx-auto my-16 p-4 border border-slate-600 shadow-md rounded-md">
        <h1 className="text-center text-lg font-serif font-bold text-slate-600 border-b-2 pb-2">
          Sign-In
        </h1>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-2">
          <div className="my-2">
            <input
              {...register("email", {
                required: "email required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
                  message: "Invalid pattern",
                },
              })}
              type="email"
              placeholder="Your Email"
              className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
            />
            {errors.email && <FormInputAlert message={errors.email?.message} />}
          </div>
          <div className="my-2">
            <input
              {...register("password", {
                required: "Password required",
                minLength: {
                  value: 8,
                  message: "minimum 8 character required",
                },
              })}
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
            sign in
          </button>
        </form>
        <p className="text-center py-2">
          No account?{" "}
          <Link to="/sign-up" className="text-blue-600 underline">
            Sign-Up
          </Link>
        </p>
        <FormSocialLinkBtn />
      </div>
    </section>
  );
};

export default SignIn;
