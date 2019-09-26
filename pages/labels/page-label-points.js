import React from "react";

import Container from "../../components/container";
import LabelPoints from "../../components/Labels/LabelPoints";

const LabelPointsPage = () => (
  <Container>
    <LabelPoints className="completed"/>
    <LabelPoints className="on-track"/>
    <LabelPoints className="cancelled"/>
  </Container>
);

export default LabelPointsPage;
