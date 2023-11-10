import { UserProvider } from "context/UserContext";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Routes from "routes";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <UserProvider>
      <GoogleOAuthProvider clientId="900142679726-gnidev3k303igit8dbq8r193d3qq8bl2.apps.googleusercontent.com">
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
      </GoogleOAuthProvider>
    </UserProvider>
  );
};

export default App;
