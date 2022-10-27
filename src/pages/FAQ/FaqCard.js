import { useContext } from "react";
import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { DarkModeContext } from "../../context/LightModeContext";

const FaqCard = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  const { lightState } = useContext(DarkModeContext);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      onClick={handleClick}
      className={`border-l-2 border-cyan-700 p-2 mb-4 cursor-pointer select-none ${
        lightState ? "bg-slate-100" : "bg-slate-800"
      }`}
    >
      <h4 className="font-semibold flex items-center gap-1 mb-1">
        <span className="w-4 h-4">
          <RiAddCircleLine className="w-4 h-4" />
        </span>
        {question}
      </h4>
      {show && <p className="pl-4">{answer}</p>}
    </div>
  );
};

export default FaqCard;
