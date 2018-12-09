import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

import "./style/header.css";
import styles from "./style/styles";
import user_icon from "../../assets/images/icons/user.png";

import logo from "../../assets/images/logo/refund.png";

// const selected = ()=> {}

const Header = props => {
  // const { selected, selected2, selected3 } = props;
  return (
    <div>
      <nav class="navbar navbar-light bg-light" style={styles.navbar}>
        <Link to="/" style={{ textTransform: "none", color: "black" }}>
          <img src={logo} width="70" height="50" alt="" />
        </Link>
        {/* <a class="navbar-link">How we Work</a> */}
        <Link to="/login" style={{ color: "black" }}>
          <div class="navbar-link">
            <img
              src={user_icon}
              alt="user icon"
              width={25}
              height={25}
              style={{ marginRight: 10 }}
            />
            <a>Login</a>
          </div>
        </Link>
      </nav>
    </div>
  );
};
Header.propTypes = {
  // selected: PropTypes.bool,
  // selected2: PropTypes.bool,
  // selected3: PropTypes.bool
};
export default Header;
