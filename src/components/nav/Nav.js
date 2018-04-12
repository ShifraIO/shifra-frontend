import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import images
import SiteLogo from '../logo/Logo';
import Searchbar from '../searchbar/SearchBar';
import LanguageButton from '../languageButton/languagebutton';

class Nav extends Component {
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
                <SiteLogo className="image-banner" alt="Header" />
                <LanguageButton lang={lang} toggleLanguage={toggleLanguage} style={style}/>
                <Searchbar/>
              </div>
            </header>
          </div>
        </NavLink>
    )
  }
}

export default Nav
