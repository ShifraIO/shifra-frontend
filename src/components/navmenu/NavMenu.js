import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavMenu.css'

import iconAccess from '../../images/icons/access/access.png'
import iconFamilyPlanning from '../../images/icons/familyplanning/family-planning.png';
import iconPregnancy from '../../images/icons/pregnancynewborn/pregnancy-newborn.png';
import iconSexualHealth from '../../images/icons/sexualhealth/sexual-health.png';
import iconFamilyHealth from '../../images/icons/familyhealth/family-health.png';
import iconClinics from '../../images/icons/extraicons/findahealthservice.png';

class NavMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false,
      menuItems: [
        {
          icon: iconAccess,
          name: {
            en: 'Healthcare in Australia',
            ar: 'العنايه الصحيه في أستراليا'
          },
          url: '/healthcare-australia'
        },
        {
          icon: iconFamilyPlanning,
          name: {
            en: 'Family Planning',
            ar: 'تنظيم الأسرة' 
          },
          url: '/family-planning'
        },
        {
          icon: iconPregnancy,
          name: {
            en: 'Pregnancy and Newborn',
            ar: 'الحمل وحديثي الولادة' 
          },
          url: '/pregnancy-newborn'
        },
        {
          icon: iconSexualHealth,
          name: {
            en: 'Sexual Health',
            ar: 'الحياة الجنسية' 
          },
          url: '/sexual-health'
        },
        {
          icon: iconFamilyHealth,
          name: {
            en: 'Community Health',
            ar: 'صحة المجتمع والعائلة'
          },
          url: '/community-health'
        },
        {
          icon: iconClinics,
          name: {
            en: 'Clinic Locations',
            ar: 'مواقع العيادة'
          },
          url: '/clinics'
        },
      ]
    }
    this.showMenu = this.showMenu.bind(this)
  }

  showMenu() {
    this.setState({menu: !this.state.menu});
  }

  render() {
    var lang = this.props.lang
    return (
      <div className="menuWrapper">
        <div className="toggleMenu">
        <button onClick={this.showMenu} className={this.state.menu ? 'rotate toggleMenuButton' : 'toggleMenuButton'}>
          <div className="bar"></div>
          <div className ="bar"></div>
          <div className ="bar"></div>
        </button>
        </div>

        <div className="menu">
          {this.state.menuItems.map((item, index) => {
            return (
              <Link to={item.url} key={index}>
                <div className={`item item-${index + 1}`}>
                  <img className="icon" src={item.icon} alt="Access"/>
                  <div className="item-text"><p>{item.name[lang]}</p></div>
                  <div className="item-overhang"></div>
                </div>
              </Link>
            )
          })}            
        </div>

        {this.state.menu && 
          <div className="mobile-menu">
             {this.state.menuItems.map((item, index) => {
              return (
                <Link to={item.url} key={index}>
                  <div className={`mobile-item item-${index + 1}`} onClick={this.showMenu}>
                    <img className="icon" src={item.icon} alt="Access"/>
                    <p className="item-text">{item.name[lang]}</p>
                  </div>
                </Link>
              )
            })} 
        </div>}
      </div>
    )
  }
}

export default NavMenu