import React from "react";
import Button from "@material-ui/core/Button";

const FbButton = (props) => {
  const { children, ...other } = props;

  return <Button {...other}>{children}</Button>;
};

export default FbButton;
