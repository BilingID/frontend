import { UserProvider } from "context/UserContext";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Routes from "routes";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
