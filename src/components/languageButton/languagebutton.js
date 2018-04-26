import React from "react";
import "./languagebutton.css";

class LanguageButton extends React.Component {
  componentDidMount() {
    this.btnEnglish.addEventListener("click", e => e.preventDefault());
    this.btnArabic.addEventListener("click", e => e.preventDefault());
  }
  render() {
    return (
      <div className="language-selector">
        <button
          className="language-selector_button"
          disabled={this.props.lang === "en"}
          ref={ref => (this.btnEnglish = ref)}
          onClick={this.props.toggleLanguage}
        >
          English
        </button>

        <button
          className="language-selector_button"
          disabled={this.props.lang === "ar"}
          ref={ref => (this.btnArabic = ref)}
          onClick={this.props.toggleLanguage}
        >
          عربى
        </button>
      </div>
    );
  }
}

export default LanguageButton;
