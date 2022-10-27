import { useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import FormInputAlert from "../../components/FormInputAlert";
import { AuthContext } from "../../context/UserContext";

const AccountSetting = () => {
  const { userData, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("name", userData?.displayName);
    setValue("photo_url", userData?.photoURL);
  }, [setValue, userData]);

  const handleFormSubmit = (data) => {
    updateUserProfile(data.name, data.photo_url)
      .then(() => {
        toast.success("Profile updated successfully..");
        navigate("/profile");
      })
      .catch((error) => toast.error(error.code));
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="font-bold font-serif text-center">Update Profile</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="my-2">
          <input
            {...register("name", {
              required: "Name required",
              maxLength: { value: 20, message: "Maximum 20 character" },
            })}
            type="text"
            placeholder="Your Full Name"
            className="border px-2 py-2 w-full rounded-md outline-none text-slate-600"
          />
          {errors.name && <FormInputAlert message={errors.name?.message} />}
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
        <button className="bg-green-500 hover:bg-green-600 py-1 px-1 my-2 w-full rounded-md text-white font-semibold">
          Update
        </button>
      </form>
    </div>
  );
};

export default AccountSetting;
