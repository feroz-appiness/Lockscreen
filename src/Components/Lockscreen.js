import React, { Children } from "react";

import flexibeesLogo from "../Assets/Group.png";

import FbButton from "../Components/Button";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "100%",
  },

  flexiRoundedLogo: {},
  rightSidePart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",

    // border: "1px solid",
    marginTop: "10%",
    marginLeft: "20%",
    height: "100%",
  },
  loginButton: {
    marginTop: "50%",
  },
  loginText: {
    width: "320px",
    fontSize: "34px",
    fontWeight: 400,
    fontFamily: "manrope",
    fontStyle: "normal",
  },
  loginAndInputsWrapper: {
    marginLeft: "7%",
  },
});

const Lockscreen = (props) => {
  console.log("🚀 ~ file: Lockscreen.js ~ line 51 ~ Lockscreen ~ props", props);
  const classes = useStyles();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const handleSetLogIn = () => {
    setisLoggedIn(true);
  };
  isLoggedIn && <Redirect to="/Dashboard" />;

  return (
    <Box className={classes.container} component={Grid} container>
      <Grid item lg={6} xs={12} md={12} sm={6}>
        <img
          src={props.loginImageforBD}
          alt="login-img"
          height="400"
          style={{ height: "auto", maxWidth: "100%" }}
        />
      </Grid>

      <Grid item lg={6} xs={12} sm={6} md={12}>
        <Box className={classes.rightSidePart}>
          <img
            alt="flexibees logo"
            src={flexibeesLogo}
            className={classes.flexiRoundedLogo}
          />
          <Box className={classes.loginAndInputsWrapper}>
            <Typography className={classes.loginText}>
              {props.loginText}
            </Typography>

            <Box className={classes.loginButton}>
              <FbButton
                variant="contained"
                onClick={handleSetLogIn}
                disableRipple
                disabled
                style={{
                  backgroundColor: " #F8B817",
                  width: "200px",
                  height: "50px",
                  color: "white",
                }}
              >
                Get Started
              </FbButton>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Lockscreen;
