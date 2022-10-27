import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

const PublicProfile = () => {
  const { userData } = useContext(AuthContext);
  
  return (
    <div className="block text-center sm:text-left sm:flex items-center gap-3">
      <img src={userData.photoURL} alt="" className="h-28 w-28 rounded-full mx-auto sm:m-0" />
      <div className="mt-3 sm:mt-0">
        <h2 className="font-serif font-semibold text-lg">
          {userData.displayName}
        </h2>
        <p>{userData.email}</p>
      </div>
    </div>
  );
};

export default PublicProfile;
