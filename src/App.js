import { UserProvider } from "context/UserContext";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Routes from "routes";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const App = () => {
  return (
    <UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
