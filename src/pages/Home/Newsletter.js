import { useContext } from "react";
import { DarkModeContext } from "../../context/LightModeContext";

const Newsletter = () => {
  const { lightState } = useContext(DarkModeContext);

  return (
    <section className="py-10 px-2 md:px-6">
      <div className={`md:container mx-auto lg:max-w-7xl text-center py-16 px-2 rounded-lg ${lightState? ' bg-slate-300' : ' bg-slate-700'}`}>
        <h3 className="font-serif font-bold text-3xl text-blue-600">
          Subscribe our Newsletter
        </h3>
        <form  className="bg-white w-[300px] sm:w-[350px] mx-auto py-2 px-3 mt-6 rounded-md flex flex-col sm:flex-row justify-between gap-4">
          <input
            type="email"
            placeholder="Your Email..."
            className="grow outline-none"
          />
          <button disabled
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
