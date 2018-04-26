import React, { Component } from "react";
import "./Navigation.css";
import LanguageButton from "../languageButton/languagebutton";
import Logo from "../logo/Logo";
// import Searchbar from "../searchbar/SearchBar";

// import images
import shifraLogo from "../../images/shifraLogo.png";

class Navigation extends Component {
  // remove it in componendWilluNmount
  render() {
    const lang = this.props.lang;
    const toggleLanguage = this.props.toggleLanguage;
    const style = this.props.style;

    return (
      <header className={`nav-header style-${this.props.style}`}>
        <Logo src={shifraLogo} alt="Shifra.io" />
        <LanguageButton
          lang={lang}
          toggleLanguage={toggleLanguage}
          style={style}
        />
      </header>
    );
  }
}

export default Navigation;
