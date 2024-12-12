// src/components/Tabs.js
import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tabs">
        {React.Children.map(children, (child, index) => (
          <button
            onClick={() => handleTabClick(index)}
            style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
