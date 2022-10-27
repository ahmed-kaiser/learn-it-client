import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FormInputAlert from "../../components/FormInputAlert";
import { AuthContext } from "../../context/UserContext";

const ChangePassword = () => {
  const { userSignOut, changePassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const handleFormSubmit = (data) => {
    if (data.password1 !== data.password2) {
      setError("password2", { message: "Password didn't match" });
    } else {
      changePassword(data.password1)
        .then(() => {
          toast.success("Password Successfully Changed..");
          userSignOut();
          navigate("/sign-in");
        })
        .catch((error) => toast.error(error.code));
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="font-bold font-serif text-center">Change password</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="my-2">
          <input
            {...register("password1", {
              required: "Password required",
              minLength: {
                value: 8,
                message: "minimum 8 character required",
              },
            })}
            type="password"
            placeholder="New Password"
            className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
          />
          {errors.password1 && (
            <FormInputAlert message={errors.password1?.message} />
          )}
        </div>
        <div className="my-2">
          <input
            {...register("password2", {
              required: "Password required",
              minLength: {
                value: 8,
                message: "minimum 8 character required",
              },
            })}
            type="password"
            placeholder="Confirm Password"
            className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
          />
          {errors.password2 && (
            <FormInputAlert message={errors.password2?.message} />
          )}
        </div>
        <button className="bg-green-500 hover:bg-green-600 py-1 px-1 my-2 w-full rounded-md text-white font-semibold">
          Change
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
