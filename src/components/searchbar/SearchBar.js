import Search from 'react-search-box';
import React, { Component } from 'react';
import './SearchBar.css';
import searchButtonIcon from '../../images/icons/extraicons/search.png';
import { Container, Row, Col } from 'reactstrap';
import myData from './fake.json';

export default class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
    .then(res => res.json())
    .then(data => {
      this.setState({
        data: data.items,
      });
    })
  }

  handleChange(value) {
    console.log(value);
  }

  render() {
    return (
      <Container fluid className="searchComponent">
      <Row>
        <Col lg="10">
          <Search
            data={ this.state.data }
            onChange={ this.handleChange.bind(this) }
            placeholder="Search for a string..."
            class="search-class"
            searchKey="full_name"/>
        </Col>
          <img className="searchIcon" src={searchButtonIcon} />
        <Col>
        </Col>
      </Row>
      </Container>
    );
  }
}
