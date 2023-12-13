import { useRecoilState } from "recoil";
import useShowToast from "./useShowToast";
import userAtom from "../atoms/userAtom";


const useLogOut = () => {
    const setUser = useRecoilState(userAtom)
    const showToast = useShowToast()
    
    const logout = async () => {
        try {
          const res = await fetch("/api/users/logout", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
          });
          const data = await res.json();
    
          if (data.error) {
            useShowToast("Error", data.error, "error");
            return;
          }
          localStorage.removeItem("user-threads");
          setUser(null);
        } catch (error) {
          showToast("Error", error, "error");
        }
      };
      return logout
};

export default useLogOut;
