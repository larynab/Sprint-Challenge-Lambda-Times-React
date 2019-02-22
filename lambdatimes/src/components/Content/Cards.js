import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(
        card => <Card key={card.headline} headline={card.headline} img={card.img} author={card.author} />)}    
    </div>
  )
}

Cards.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}

export default Cards;