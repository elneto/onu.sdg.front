import React from "react";

import Container from "../../components/container";
import TabsButton from "../../components/Tabs/TabsButton";

const tabs = [
  { label: "By years", id: "years" },
  { label: "By SDGS", id: "sdgs" },
];

const Tabs03Page = () => (
  <Container>
   <TabsButton tabs={tabs}/>
  </Container>
);

export default Tabs03Page;
