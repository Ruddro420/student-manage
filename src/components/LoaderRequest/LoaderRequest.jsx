import { LogOut } from "lucide-react";
import "./Loader.css";
import useAuth from "../../hooks/useAuth";
const LoaderRequest = () => {
  const {logOut} = useAuth()
  const handleLogOut = () => {
    logOut()
  }
  return (
    <div className="mx-auto w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl">
      <div className="bg-[#333] flex items-center p-[5px] text-whitec relative">
        <div className="flex absolute left-3">
          <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
          <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
          <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
        </div>
        <div className="flex-1 text-center text-white">status</div>
        <div onClick={handleLogOut} className="cursor-pointer"><LogOut size={18}/></div>
      </div>
      <div className="p-2.5 text-[#0f0]">
        <div>
          <span className="mr-2">Your join request is being processed...</span>
          <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">
            .
          </span>
          <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">
            .
          </span>
          <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">
            .
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoaderRequest;
