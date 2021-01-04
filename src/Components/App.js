import React from "react";
import LockScreenRoutes from "../Routes/LockScreenRoutes";
import LockScreen from "./Lockscreen";

import loginImage from "../Assets/Login-image.png";
import Dashboard from "./Dashboard";

const App = (props) => {
  return (
    <div className="App-Container">
      <LockScreen
        loginText="Login to flexibees as a Super admin"
        loginImageforBD={loginImage}
      />
    </div>
  );
};

export default App;
