import { RiGithubFill, RiGoogleFill } from "react-icons/ri";

const FormSocialLinkBtn = () => {
  return (
    <>
      <div className="flex items-center gap-2 justify-center">
        <p className="w-24 border block"></p>
        <p className="font-semibold text-slate-600">OR</p>
        <p className="w-24 border block"></p>
      </div>
      <div>
        <button className="flex items-center justify-center gap-1 w-full my-2 py-2 px-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md">
          <RiGoogleFill className="w-5 h-5" />
          Google
        </button>
        <button className="flex items-center justify-center gap-1 w-full my-2 py-2 px-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-md">
          <RiGithubFill className="w-5 h-5" /> Github
        </button>
      </div>
    </>
  );
};

export default FormSocialLinkBtn;
