import React from "react";

import Container from "../../components/container";
import TabsLight from "../../components/Tabs/TabsLight";
const tabs = [
  { label: "Monday, 13 May", id: "monday" },
  { label: "TUESDAY, 14 MAY", id: "tuesday" },
  { label: "WEDNESDAY, 15 MAY", id: "wednesday" },
  { label: "THURSDAY, 16 MAY", id: "thursday" }
];

const Tabs02Page = () => (
  <Container>
    <TabsLight tabs={tabs} />
  </Container>
);

export default Tabs02Page;
