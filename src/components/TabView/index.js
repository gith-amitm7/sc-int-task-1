import { Actors } from "components/Actors";
import Alignment from "components/Alignment";
import Background from "components/Background";
import Voice from "components/Voice";
import React, { useCallback, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tab-view.scss";

const TabView = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabSelect = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return (
    <div id="tab-view">
      <Tabs defaultIndex={activeIndex} onSelect={handleTabSelect}>
        <TabList>
          <Tab className="typ-tab">Actor</Tab>
          <Tab className="typ-tab">Voice</Tab>
          <Tab className="typ-tab">Alignment</Tab>
          <Tab className="typ-tab">Background</Tab>
        </TabList>

        <TabPanel>
          <div className="panel">
            <Actors />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel">
            <Voice />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel">
            <Alignment />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel">
            <Background />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabView;
