import axios from "axios";
import { useEffect } from "react";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const secureAxios = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://dmf-language-club.vercel.app",
});
const useSecureAxios = () => {
  const { logoutUser } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    secureAxios.interceptors.request.use((request) => {
      const token = localStorage.getItem("dmf-lg-club-token");
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }
      return request;
    });

    secureAxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          (error.response && error.response.status === 401) ||
          error.response.status === 403
        ) {
          await logoutUser();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logoutUser, navigate]);

  return { secureAxios };
};

export default useSecureAxios;
