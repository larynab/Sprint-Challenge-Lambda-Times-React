import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  };

  componentDidMount() {
    console.log('WHY AM I YELLING? BY THE WAY THE COMPONENTS DID MOUNT')
    this.setState({
      tabs: tabData,
      cards: cardData
      });
  };

  selectTabHandler = tab => {
    console.log("TAB SELECTED!");
    this.setState({selected: tab})
    console.log("ACTIVATE FILTER!");
    this.filterCards()
  };

  filterCards = () => {
    const {cards, selected} = this.state
    if(selected === 'all') {
    console.log('ALL CARDS!');
    return cards
    };
    console.log('FILTERING...!');
    return cards.filter(card => card.tab === selected );
  };

  render(){
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} selected={this.state.selected} selectTabHandler={this.selectTabHandler}/>
        <Cards cards={this.filterCards()}/>
      </div>
    );
  };
};
