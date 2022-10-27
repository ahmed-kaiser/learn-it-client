import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";

const FaqCard = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      onClick={handleClick}
      className="border-l-2 border-cyan-700 p-2 mb-4 bg-slate-100 cursor-pointer select-none"
    >
      <h4 className="font-semibold flex items-center gap-1 mb-1">
        <span className="w-4 h-4"><RiAddCircleLine className="w-4 h-4" /></span>
        {question}
      </h4>
      {show && <p className="pl-4">{answer}</p>}
    </div>
  );
};

export default FaqCard;
