import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = ({selectTabHandler, selectedTab, tabs}) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {tabs.map((tab, tabkey) => <Tab key={tabkey} tab={tab} selectTabHandler={selectedTab} selectTabHandler={selectTabHandler} />)}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.PropTypes = {
  tab: PropTypes.string.isRequired
};
export default Tabs;
