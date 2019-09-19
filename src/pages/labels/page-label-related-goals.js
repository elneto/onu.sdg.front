import React from "react";

import Container from "../../components/container";
import LabelNumericGroup from "../../components/Labels/LabelNumericGroup";
import LabelNumeric from "../../components/Labels/LabelNumeric";

const LabelRelatedGoalsPage = () => (
  <Container>
    <LabelNumericGroup>
      <LabelNumeric color={"goal-9"}>9</LabelNumeric>
      <LabelNumeric color={"goal-13"}>13</LabelNumeric>
      <LabelNumeric color={"goal-15"}>15</LabelNumeric>
      <LabelNumeric color={"goal-16"}>16</LabelNumeric>
    </LabelNumericGroup>
  </Container>
);

export default LabelRelatedGoalsPage;
