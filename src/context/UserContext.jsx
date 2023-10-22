import { useContext, createContext, useState } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

export const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

// Create a provider for components to consume and subscribe to changes
export const UserProvider = ({ children }) => {
  const mockUser = {
    id: 1,
    fullName: "Arla Sifhana Putri",
    email: "arla@gmail.com",
    gender: "Perempuan",
    dateOfBirth: "31/12/2003",
    phone: "081234567890",
    profilePicture: null,
  };
  const [user, setUser] = useSessionStorage("user", mockUser);

  // Create the initial user object
  const value = {
    user: user,
    setUser: setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
