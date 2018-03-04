import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
// import images
import imgHeader from '../../images/shifraLogo.png';

class Nav extends Component {
  componentDidMount() {
    this.btnEnglish.addEventListener('click', e => e.preventDefault())
    this.btnArabic.addEventListener('click', e => e.preventDefault())
  }
  // remove it in componendWilluNmount
  render() {
    const lang = this.props.lang
    return (
      <div className="nav">
        <NavLink exact activeClassName='active' to='/'>
          <div className={`nav-header style-${this.props.style}`}>
            <h1 className="nav-header-title">
              <button disabled={lang === 'en'} ref={ref => this.btnEnglish = ref} onClick={this.props.toggleLanguage} className="language-btn lang-en">English</button>
              <button disabled={lang === 'ar'} ref={ref => this.btnArabic = ref} onClick={this.props.toggleLanguage} className="language-btn lang-ar">عربى</button>
              <img className="image-banner" src={imgHeader} alt="Header" />
            </h1>
          </div>
        </NavLink>
      </div>
    )
  }
}

export default Nav