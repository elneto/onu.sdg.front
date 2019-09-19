import React from "react";

import Container from "../../components/container";
import LabelStatus from "../../components/Labels/LabelStatus";

const LabelStatusPage = () => (
  <Container>
    <LabelStatus status="completed">Completed</LabelStatus>
    <LabelStatus status="on-track">On track</LabelStatus>
    <LabelStatus status="cancelled">Cancelled</LabelStatus>
  </Container>
);

export default LabelStatusPage;
