import { useContext, createContext, useState, useEffect } from "react";
import useSessionStorage from "../hooks/useSessionStorage";
import { useGoogleLogin } from "@react-oauth/google";
import fetchUser from "services/fetchUser";
import moment from "moment";

export const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

// Create a provider for components to consume and subscribe to changes
export const UserProvider = ({ children }) => {
  const [user, setUser] = useSessionStorage("user", null);
  const [token, setToken] = useSessionStorage("accessToken", null);

  useEffect(() => {
    if (token) {
      fetchUser(token).then((res) => {
        if (res.status === "success") {
          const data = res.data.user;

          data.date_of_birth = moment(data.date_of_birth).format("YYYY-MM-DD");
          data.gender = data.gender === "male" ? "Laki-laki" : "Perempuan";

          setUser(data);
        }
      });
    }
  }, [token]);

  // Create the initial user object
  const value = {
    user: user,
    setUser: setUser,
    token: token,
    setToken: setToken,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
