import { useContext } from "react";
import { DarkModeContext } from "../context/LightModeContext";

const Footer = () => {
  const { lightState } = useContext(DarkModeContext);

  return (
    <footer
      className={`py-10 px-2 md:px-6 bg-slate-800 text-slate-300 ${
        lightState ? "" : "border-t-2 border-slate-600"
      }`}
    >
      <div className="md:container mx-auto lg:max-w-7xl flex flex-col md:flex-row justify-between">
        <p className="order-2 md:order-1 mt-10 md:mt-0 text-center md:text-left">
          @2022 Learnit. All Right Reserved.
        </p>
        <ul className="flex flex-col md:flex-row gap-5 order-1 md:order-2">
          <li className="hover:underline">Help</li>
          <li className="hover:underline">Terms Condition</li>
          <li className="hover:underline">Security</li>
          <li className="hover:underline">Privacy Policy</li>
          <li className="hover:underline">Return Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
