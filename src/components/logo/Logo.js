import React from "react";
import { NavLink } from "react-router-dom";
import "./logo.css";

class Logo extends React.Component {
  render() {
    return (
      <NavLink exact className="site-logo" to="/">
        <img
          className="site-logo_image"
          src={this.props.src}
          alt={this.props.alt}
        />
      </NavLink>
    );
  }
}

export default Logo;
