import React, { Component } from 'react';
import CardGrid from '../cardgrid/CardGrid'
import Card from '../card/Card'

class GridPageContainer extends Component {
  componentDidMount() {
    global.logPageView(window.location.pathname + window.location.search)
  }
  render() {
    return (
      <CardGrid>
        {this.props.cards.map((item, index) => {
          return (
            <Card
							key={index}
              lang={this.props.lang}
              imgSrc={item.imgSrc}
              theme={item.theme}
              titleText={item.titleText[this.props.lang]}
              linkUrl={item.linkUrl} />
          )
        })}
      </CardGrid>
    )
  }
}

export default GridPageContainer