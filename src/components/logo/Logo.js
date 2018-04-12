import React from 'react';
import shifraLogo from '../../images/shifraLogo.png';

class SiteLogo extends React.Component {
  render() {
    return (
        <img className="logo" src={shifraLogo} alt={this.props.alt} />
      );
    }
  }

export default SiteLogo;
