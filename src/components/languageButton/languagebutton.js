import React from 'react';
import { Button } from 'reactstrap';
import { Dropdown , DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  UncontrolledDropdown} from 'reactstrap';
  import './languagebutton.css';


class LanguageButton extends React.Component {
  componentDidMount() {
    this.btnEnglish.addEventListener('click', e => e.preventDefault())
    this.btnArabic.addEventListener('click', e => e.preventDefault())
  }

  render() {
    return (
      <div className="lngButton">
        <UncontrolledDropdown direction="left">
          <DropdownToggle caret>
            Language
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <button disabled={this.props.lang === 'en'} ref={ref => this.btnEnglish = ref} onClick={this.props.toggleLanguage} className="language-btn lang-en">English</button>
            </DropdownItem>
            <DropdownItem>
              <button disabled={this.props.lang === 'ar'} ref={ref => this.btnArabic = ref} onClick={this.props.toggleLanguage} className="language-btn lang-ar">عربى</button>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      );
    }
  }

export default LanguageButton
