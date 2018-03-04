import React, { Component } from 'react';
import './CardGrid.css'

class CardGrid extends Component {
  render() {
    return (
      <main className="cards">
        {this.props.children}
      </main>
    )
  }
}

export default CardGrid
