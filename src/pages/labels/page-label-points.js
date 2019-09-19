import React from "react";

import Container from "../../components/container";
import LabelPoints from "../../components/Labels/LabelPoints";

const LabelPointsPage = () => (
  <Container>
    <LabelPoints status="completed"/>
    <LabelPoints status="on-track"/>
    <LabelPoints status="cancelled"/>
  </Container>
);

export default LabelPointsPage;
