import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core/styles";
import styles from "./style/styles";

const InputField = props => {
  const { classes, onChange, value, label } = props;
  return (
    <TextField
      className={classes.margin}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused
        }
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline
        }
      }}
      label={label}
      variant="outlined"
      onChange={onChange}
      value={value}
      //   id="custom-css-outlined-input"
    />
  );
};
InputField.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
  label: PropTypes.string
};
export default withStyles(styles)(InputField);
