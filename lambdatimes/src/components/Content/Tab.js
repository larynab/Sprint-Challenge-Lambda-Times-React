import React from 'react';

const Tab = ({tab, selected, selectTabHandler}) => {
  let selectedTab = 'tab'
  if (tab === selected) {
    selectedTab = 'tab active-tab'
  }
  return (
    <div className={selectedTab} onClick={() => {selectTabHandler(tab)}}>
      {tab.toUpperCase()}
    </div>
  )
}

export default Tab;
