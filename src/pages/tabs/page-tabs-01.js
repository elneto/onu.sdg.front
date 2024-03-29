import React from "react";

import TabsDark from "../../components/Tabs/TabsDark";
const tabs = [
    { label: "Overview", id: "overview" },
    { label: "Targets and Indicators", id: "targets" },
    { label: "Progress and Info", id: "progress" },
  ];
const Tabs01Page = () => <TabsDark tabs={tabs} />;

export default Tabs01Page;
