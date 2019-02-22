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
  );
};

Tabs.propTypes = {
  tab: PropTypes.string
};
export default Tabs;
