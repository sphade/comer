/* eslint-disable react/jsx-key */
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useSWR from "swr";
import { fetcher } from "../lib/fetch";
import Card3 from "./Card3";
import Slider from "./Slider";

const Tbs = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const { data, error } = useSWR(
    "https://fakestoreapi.com/products/categories",
    fetcher
  );
  if (!data) {
    return  <div className="w-full flex items-center justify-center">  <ClipLoader  size={150} /></div>  
  }
  if (error) {
    return <div>error occured</div>;
  }
  return (
    <Tabs selectedTabClassName="border outline-red-100 bg-red-500 text-xs rounded-full text-white">
      <TabList className="my-6 mx-5  flex flex-row space-x-3 items-center ">
        {data.map((name) => (
          <Tab >{name}</Tab>
        ))}
      </TabList>
      {data.map((name) => (
        <TabPanel>
          <Card3 cat={name} />
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Tbs;
