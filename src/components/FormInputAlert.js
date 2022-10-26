import { RiAlertLine } from "react-icons/ri";

const FormInputAlert = ({ message }) => {
  return (
    <small className="text-red-500 pl-2 flex items-center gap-1">
      <RiAlertLine />
      <span>{message}</span>
    </small>
  );
};

export default FormInputAlert;
