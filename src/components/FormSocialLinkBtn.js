import { useContext } from "react";
import toast from "react-hot-toast";
import { RiGithubFill, RiGoogleFill } from "react-icons/ri";
import { AuthContext } from "../context/UserContext";

const FormSocialLinkBtn = () => {
  const { googleSignIn, githubSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => console.log(result.user))
    .catch(error => toast.error(error.code))
  }

  const handleGithubSignIn = () => [
    githubSignIn()
    .then(result => console.log(result.user))
    .catch(error => toast.error(error.code))
  ]

  return (
    <>
      <div className="flex items-center gap-2 justify-center">
        <p className="w-24 border block"></p>
        <p className="font-semibold text-slate-600">OR</p>
        <p className="w-24 border block"></p>
      </div>
      <div>
        <button onClick={handleGoogleSignIn} className="flex items-center justify-center gap-1 w-full my-2 py-2 px-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md">
          <RiGoogleFill className="w-5 h-5" />
          Google
        </button>
        <button onClick={handleGithubSignIn} className="flex items-center justify-center gap-1 w-full my-2 py-2 px-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-md">
          <RiGithubFill className="w-5 h-5" /> Github
        </button>
      </div>
    </>
  );
};

export default FormSocialLinkBtn;
