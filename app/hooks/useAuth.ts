import React from "react";
import useAuthStore from "../store/useAuthStore";
import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

const useAuth = () => {
    const router = useRouter();
    const refreshToken = useAuthStore((state) => state.refreshToken);

    React.useEffect(() => {
        const checkAndRefreshToken = async () => {
          const storedRefreshToken = localStorage.getItem("refreshToken");
          const storedAccessToken = localStorage.getItem("accessToken");
    
          if (!storedAccessToken && !storedRefreshToken) {
            router.push('/login');
            return;
          }
    
          if (storedRefreshToken) {
            try {
              await refreshToken();
            } catch (error) {
              console.error("Token refresh failed:", error);
              router.push('/login');
            }
          }
        };
    
        checkAndRefreshToken();
      }, []);
}

export default useAuth;