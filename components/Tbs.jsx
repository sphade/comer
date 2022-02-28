import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "./Slider";

const Tbs = () => {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <Tabs selectedTabClassName="border outline-red-100 bg-red-500 rounded-full text-white">
      <TabList className="my-6 mx-5  flex flex-row space-x-3 items-center ">
        <Tab>camera</Tab>
        <Tab>Gaming</Tab>
        <Tab>Entertinment</Tab>
      </TabList>

      <TabPanel>
        <Slider />
      </TabPanel>
      <TabPanel>
        <Slider />
      </TabPanel>
      <TabPanel>
        <Slider />
      </TabPanel>
      <TabPanel>
        <Slider />
      </TabPanel>
    </Tabs>
  );
};

export default Tbs;
