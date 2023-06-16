import axios from "axios";

const axiosReq = axios.create({
  baseURL: "https://dmf-language-club.vercel.app",
});

const useAxios = () => {
  return { axiosReq };
};

export default useAxios;
