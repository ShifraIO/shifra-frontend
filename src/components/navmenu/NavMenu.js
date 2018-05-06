import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import MediaQuery from 'react-responsive';

import iconAccess from "../../images/icons/access/access.png";
import iconFamilyPlanning from "../../images/icons/familyplanning/family-planning.png";
import iconPregnancy from "../../images/icons/pregnancynewborn/pregnancy-newborn.png";
import iconSexualHealth from "../../images/icons/sexualhealth/sexual-health.png";
import iconFamilyHealth from "../../images/icons/familyhealth/family-health.png";
import iconClinics from "../../images/icons/extraicons/findahealthservice.png";

class NavMenu extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      windowWidth: window.innerWidth,
      menu: true,
      menuItems: [
        {
          icon: iconAccess,
          name: {
            en: "Healthcare in Australia",
            ar: "العنايه الصحيه في أستراليا"
          },
          url: "/healthcare-australia"
        },
        {
          icon: iconFamilyPlanning,
          name: {
            en: "Family Planning",
            ar: "تنظيم الأسرة"
          },
          url: "/family-planning"
        },
        {
          icon: iconPregnancy,
          name: {
            en: "Pregnancy and Newborn",
            ar: "الحمل وحديثي الولادة"
          },
          url: "/pregnancy-newborn"
        },
        {
          icon: iconSexualHealth,
          name: {
            en: "Sexual Health",
            ar: "الحياة الجنسية"
          },
          url: "/sexual-health"
        },
        {
          icon: iconFamilyHealth,
          name: {
            en: "Community Health",
            ar: "صحة المجتمع والعائلة"
          },
          url: "/community-health"
        },
        {
          icon: iconClinics,
          name: {
            en: "Clinic Locations",
            ar: "مواقع العيادة"
          },
          url: "/clinics"
        }
      ]
    };
    // Bindings
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  getHideShowText(menuVisible) {
    return menuVisible ? "Hide Menu" : "Show Menu";
  }

  isHidden() {
    return !this.state.menu ? "nav-menu_item_hidden" : "";
  }

  handleResize() {
  this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  buildMenuItem(index, item, selectedLanguage) {
    return (
      <Link
        to={item.url}
        key={index}
        className={`nav-menu_item nav-menu_item_${index +
          1} ${this.isHidden()}`}
      >
        <div className="nav-menu_content-wrapper">
          <img className="nav-menu_icon" src={item.icon} alt="Access" />
          <div className="nav-menu_text">{item.name[selectedLanguage]}</div>
        </div>
      </Link>
    );
  }

  mapMenuItems(menuItems, selectedLanguage) {
    return menuItems.map((item, index) => {
      return this.buildMenuItem(index, item, selectedLanguage);
    });
  }

  render() {
    let lang = this.props.lang;
    let style = this.props.style;

    if(this.state.windowWidth < 768) {
      return (
      <div className={`nav-menu nav-menu_${style}`} onClick={this.showMenu}>
        <button className="menu-toggle" onClick={this.toggleMenu}>
          {this.getHideShowText(this.state.menu)}
        </button>
        <span className="inline" onClick={this.toggleMenu}>{this.mapMenuItems(this.state.menuItems, lang)}</span>
      </div>
    );}
    return (
    <div className={`nav-menu nav-menu_${style}`}>
      <span className="inline">{this.mapMenuItems(this.state.menuItems, lang)}</span>
    </div>
  );
  }
}

export default NavMenu;
