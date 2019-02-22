import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = ({selectTabHandler, selected, tabs}) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tabs.map((tab, t) => <Tab key={t} tab={tab} selected={selected} selectTabHandler={selectTabHandler} />)}
      </div>
    </div>
  )
}

// Make sure to use PropTypes to validate your types!
Tabs.PropTypes = {
  tabs: PropTypes.string.isRequired
};
export default Tabs;
