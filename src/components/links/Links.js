import React, { Component } from 'react';

class Links extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: 'en'
    }
  }

  render() {
    var lang = this.state.lang
    return (
      <div>
				{this.props.links && this.props.links.map((link, index) => {
					return <div key={index}><span><Link title={link.title[lang]} url={link.url}/></span><br/></div>
				})}
      </div>
    )
  }
}

const Link = props => {
  return <a href={props.url}>{props.title}</a>
}

export default Links


