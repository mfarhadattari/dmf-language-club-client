import axios from "axios";

const axiosReq = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://dmf-language-club.vercel.app",
});

const useAxios = () => {
  return { axiosReq };
};

export default useAxios;
