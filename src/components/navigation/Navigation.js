import React, { Component } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import shifraLogo from '../../images/shifraLogo.png';

// import images
import Logo from '../logo/Logo';
import Searchbar from '../searchbar/SearchBar';
import LanguageButton from '../languageButton/languagebutton';

class Navigation extends Component {
  // remove it in componendWilluNmount
  render() {
    const lang = this.props.lang
    const toggleLanguage = this.props.toggleLanguage
    const style = this.props.style

    return (
        <NavLink exact activeClassName='active nav' to='/'>
          <div className={`nav-header style-${this.props.style}`}>
            <header className="nav-header-title">
              <div>
                <Logo src={shifraLogo} alt="Header" />
                <LanguageButton lang={lang} toggleLanguage={toggleLanguage} style={style}/>
                <Searchbar/>
              </div>
            </header>
          </div>
        </NavLink>
    )
  }
}

export default Navigation
