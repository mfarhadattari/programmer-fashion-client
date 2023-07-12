import axios from "axios";

// !Create a instance for axios req
const axiosPublic = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: "https://programmer-fashion.vercel.app",
});

const useAxiosPublic = () => {
  return {
    axiosPublic,
  };
};

export default useAxiosPublic;
