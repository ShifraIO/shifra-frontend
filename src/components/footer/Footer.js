import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
import IoPhone from 'react-icons/lib/io/ios-telephone-outline';
import './Footer.css'
import swinburneLogo from "../../images/swinburne.png";
import monashLogo from "../../images/monash.png";
import ygapLogo from "../../images/ygap.png";
import gcgLogo from "../../images/gcgmonash.png";


class Footer extends Component {
  render() {
    const lang = this.props.lang;
    return (
      <div className="footer">
        <div className="footerEmergencyBanner">
          <a href="tel:000">
            <IoPhone size={25} />
            {lang === "en"
              ? "In case of emergency call 000"
              : "في حالة الطوارئ، استدعاء 000"}
          </a>
          <a href="tel:131114">
            <IoPhone size={25} />
            {lang === "en"
              ? "Lifeline Phone Service 13 11 14"
              : "خدمة هاتف شريان الحياة 13 11 14"}
          </a>
        </div>

        <div className="footerCore">
          <div className="footerItem about">
            <ul className="footerAbout">
              <li><a href="/about">About Shifra</a></li>
              {/* <li><a>All Topics</a></li> */}
              <li><a href="mailto:info@shifra.io">Contact</a></li>
			</ul>
		  </div>
		  
		  <div className="footerItem social">
            {/* <h4>{lang === 'en' ? 'Save our website on your phone!' : 'حفظ موقعنا على الهاتف الخاص بك!'}</h4> */}
            <ul className="footerIcons">
              <li>
                <SocialIcon
                  url="https://www.facebook.com/mAdapt-1777571399195093/"
                  network="facebook"
                  color="white"
                  style={{ height: 35, width: 35 }}
                />
              </li>
              {/* <li><SocialIcon url="https://twitter.com/mAdapt_app" network="twitter" color="white" style={{ height:23, width:23 }}/></li>
              <li><SocialIcon url="https://www.youtube.com/watch?v=fOcwWc9X8v4" network="youtube" color="white" style={{ height:23, width:23 }}/></li> */}
              <li>
                <SocialIcon
                  url="https://www.instagram.com/Shifra_au/"
                  network="instagram"
                  color="white"
                  style={{ height: 35, width: 35 }}
                />
              </li>
            </ul>
          </div>
		  
		  <div className="footerItem privacy">
			<ul className="footerPrivacy">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/termsofuse">Terms of Use</a></li>
            </ul>
          </div>
          
          <div className="banner">
            <div className="inline-block">
              <img src={swinburneLogo} alt="Swinburne Logo"/>
            </div>
            <div className="inline-block">
              <img src={ygapLogo} slt="YGAP Logo"/>
            </div>
            <div className="inline-block">
              <img src={monashLogo} alt="Monash Logo"/>
            </div>
            <div className="inline-block">
              <img src={gcgLogo} alt="GCG Logo"/>
            </div>
          </div>

          <div className="footerCopyright footerItem">
            <p>&copy; 2017 Shifra. All rights reserved.</p>
            <p style={lang === 'en' ? {direction: 'ltr', textAlign: 'left'} : {direction: 'rtl'}} className="disclaimer">{lang === 'en' ? 'This website and the resources to which it refers are intended to provide educational and general information only. They do not provide comprehensive medical or legal advice. Please seek specific medical or legal advice in relation to individual circumstances. Shifra accepts no responsibility or legal liability for reliance on the information contained on this site, or other sites to which this site links.' : 'ويهدف هذا الموقع والموارد التي يشير إليها إلى توفير المعلومات التعليمية والعامة فقط. وهي لا تقدم المشورة الطبية أو القانونية الشاملة. يرجى طلب المشورة الطبية أو القانونية المحددة فيما يتعلق بالظروف الفردية. Shifra لا تتحمل أي مسؤولية أو مسؤولية قانونية عن الاعتماد على المعلومات الواردة في هذا الموقع، أو المواقع الأخرى التي يرتبط بها هذا الموقع.'}</p>
            <p
              style={
                lang === "en"
                  ? { direction: "ltr", textAlign: "left" }
                  : { direction: "rtl" }
              }
              className="disclaimer"
            >
			{/*{lang === "en"
                ? "This website and the resources to which it refers are intended to provide educational and general information only. They do not provide comprehensive medical or legal advice. Please seek specific medical or legal advice in relation to individual circumstances. Shifra accepts no responsibility or legal liability for reliance on the information contained on this site, or other sites to which this site links."
                : "ويهدف هذا الموقع والموارد التي يشير إليها إلى توفير المعلومات التعليمية والعامة فقط. وهي لا تقدم المشورة الطبية أو القانونية الشاملة. يرجى طلب المشورة الطبية أو القانونية المحددة فيما يتعلق بالظروف الفردية. Shifra لا تتحمل أي مسؤولية أو مسؤولية قانونية عن الاعتماد على المعلومات الواردة في هذا الموقع، أو المواقع الأخرى التي يرتبط بها هذا الموقع."}
            */}
			</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
