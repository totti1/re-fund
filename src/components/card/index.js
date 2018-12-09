import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./style/cardstyle.css";
// import styles from "./style/styles";
// import user_icon from "../../assets/images/icons/user.png";

// import logo from "../../assets/images/logo/LOGORe-Fund.jpg";

// const selected = ()=> {}

const Card = props => {
  const { title, description, onClick } = props;
  return (
    <div
      class="card mycard"
      style={{ width: "60%", marginTop: 20, alignSelf: "center" }}
    >
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        {/* <Link to="/projet+realises"> */}
        <button type="button" class="btn btn-outline-dark" onClick={onClick}>
          See more
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func
  //   selected: PropTypes.bool,
  //   selected2: PropTypes.bool,
  //   selected3: PropTypes.bool
};
export default Card;
