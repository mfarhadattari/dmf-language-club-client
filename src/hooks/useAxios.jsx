import axios from "axios";

const axiosReq = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxios = () => {
  return { axiosReq };
};

export default useAxios;
