import React from "react";
import FbButton from "./Button";
const Dashboard = () => {
  return (
    <div>
      <FbButton
        variant="contained"
        disableRipple
        style={{
          backgroundColor: " #F8B817",
          width: "200px",
          color: "black",
        }}
      >
        Get Started
      </FbButton>
      <FbButton
        variant="contained"
        color="secondary"
        style={{ width: "1000px", height: "100px" }}
      >
        view or update
      </FbButton>
      <FbButton
        variant="contained"
        color="default"
        style={{ width: "200px", height: "50px" }}
      >
        billing
      </FbButton>
    </div>
  );
};

export default Dashboard;
