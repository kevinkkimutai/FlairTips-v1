import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logOut } from "@/redux/reducers/AuthReducers";
import { useRouter } from "next/navigation";

const useAuthTimeout = () => {
  const dispatch = useDispatch();
   const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("access_token");

    if (token) {
      const expirationTime = 60 * 60 * 1000; 
      const storedTime = localStorage.getItem("login_time");

      const remainingTime =
        storedTime ? expirationTime - (Date.now() - storedTime) : expirationTime;

      if (remainingTime > 0) {
        const timeout = setTimeout(() => {
          dispatch(logOut());
          router.push("/");
        }, remainingTime);

        return () => clearTimeout(timeout);
      } else {
        dispatch(logOut());
        router.push("/");
      }
    }
  }, [dispatch]);
};

export default useAuthTimeout;
