import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Create an axios instance with a base URL
    const axiosInstance = axios.create({
      baseURL: "http://localhost:5000/", // Replace with your base URL
    });

    // Intercept each request to inject the authorization header
    axiosInstance.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem("access-token");
        if (accessToken) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Intercept the response to handle 401 and 403 errors
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const { response } = error;
        if (response && (response.status === 401 || response.status === 403)) {
          // Log out the user asynchronously
          logOut()
            .then(() => {
              // Redirect the user to the login page
              navigate("/login");
            })
            .catch((error) => {
              console.log("Error logging out:", error);
            });
        }
        return Promise.reject(error);
      }
    );

    // Return the modified axios instance
    return axiosInstance;
  }, [logOut, navigate]);

  return null;
};

export default useAxiosSecure;
