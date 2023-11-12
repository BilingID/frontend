import { useContext, createContext, useState, useEffect } from "react";
import useSessionStorage from "../hooks/useSessionStorage";
import AuthService from "services/api/auth";
import moment from "moment";

export const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

// Create a provider for components to consume and subscribe to changes
export const UserProvider = ({ children }) => {
  const [user, setUser] = useSessionStorage("user", null);
  const [token, setToken] = useSessionStorage("accessToken", null);

  const formatUser = (user) => {
    return {
      ...user,
      date_of_birth: moment(user.date_of_birth).format("YYYY-MM-DD"),
    };
  };

  const updateUserData = () => {
    AuthService.fetch(token).then((res) => {
      if (res.status === "success") {
        setUser(formatUser(res.data.user));
      }
    });
  };

  useEffect(() => {
    if (token) {
      updateUserData();
    }
  }, [token]);

  // Create the initial user object
  const value = {
    user: user,
    setUser: setUser,
    token: token,
    setToken: setToken,
    updateUserData: updateUserData,
    formatUser: formatUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
