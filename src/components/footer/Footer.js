import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
import IoPhone from 'react-icons/lib/io/ios-telephone-outline';
import './Footer.css'

class Footer extends Component {

  render() {
    const lang = this.props.lang
    return (
      <div className="footer">
        <div className="footerEmergencyBanner">
          <a href="tel:000"><IoPhone size={25} />{lang === 'en'? 'In case of emergency call 000' : 'في حالة الطوارئ، استدعاء 000'}</a>
          <a href="tel:131114"><IoPhone size={25} />{lang === 'en'? 'Lifeline Phone Service 13 11 14' : 'خدمة هاتف شريان الحياة 13 11 14'}</a>
        </div>

        <div className="footerCore">
          <div className="footerItem">
            <ul>
              <li><Link to="/about">About Shifra</Link></li>
              {/* <li><a>All Topics</a></li> */}
              <li><a href="http://www.madapt.org/contact/">Contact</a></li>
            </ul>
          </div>

          <div className="footerItem social">
            {/* <h4>{lang === 'en' ? 'Save our website on your phone!' : 'حفظ موقعنا على الهاتف الخاص بك!'}</h4> */}
            <ul className="footerIcons">
              <li><SocialIcon url="https://www.facebook.com/mAdapt-1777571399195093/" network="facebook" color="white" style={{ height:23, width:23 }}/></li>
              {/* <li><SocialIcon url="https://twitter.com/mAdapt_app" network="twitter" color="white" style={{ height:23, width:23 }}/></li>
              <li><SocialIcon url="https://www.youtube.com/watch?v=fOcwWc9X8v4" network="youtube" color="white" style={{ height:23, width:23 }}/></li> */}
              <li><SocialIcon url="https://www.instagram.com/Shifra_au/" network="instagram" color="white" style={{ height:23, width:23 }}/></li>
            </ul>
          </div>

          <div className="footerCopyright footerItem">
            <p>&copy; 2017 Shifra. All rights reserved.</p>
            <p style={lang === 'en' ? {direction: 'ltr', textAlign: 'left'} : {direction: 'rtl'}} className="disclaimer">{lang === 'en' ? 'This website and the resources to which it refers are intended to provide educational and general information only. They do not provide comprehensive medical or legal advice. Please seek specific medical or legal advice in relation to individual circumstances. mAdapt accepts no responsibility or legal liability for reliance on the information contained on this site, or other sites to which this site links.' : 'ويهدف هذا الموقع والموارد التي يشير إليها إلى توفير المعلومات التعليمية والعامة فقط. وهي لا تقدم المشورة الطبية أو القانونية الشاملة. يرجى طلب المشورة الطبية أو القانونية المحددة فيما يتعلق بالظروف الفردية. mAdapt لا تتحمل أي مسؤولية أو مسؤولية قانونية عن الاعتماد على المعلومات الواردة في هذا الموقع، أو المواقع الأخرى التي يرتبط بها هذا الموقع.'}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
