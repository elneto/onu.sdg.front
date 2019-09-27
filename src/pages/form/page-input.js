import React from "react";

import Container from "../../components/container";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/TextArea";

const InputPage = () => (
  <Container>
    <form className="form-un row">
      <Input
        id="normall"
        type="text"
        placeholder="Text"
        label="Input"
        className="col-6"
      />
      <Input
        id="invalid"
        type="text"
        placeholder="Text"
        label="Input"
        className="col-6"
        required="true"
        invalid
      />
      <Input
        type="seach"
        placeholder="Text"
        label="Input"
        subLabel="Please clearly describe how this initiative is carried out"
        className="col-6"
      />
      <Input
        type="text"
        placeholder="Text"
        label="Input"
        subLabel="Please clearly describe how this initiative is governed"
        className="col-6"
      />
      <Input
        type="date"
        placeholder="dd/mm/yyyy"
        label="Start date"
        subLabel="Enter the star date (Year Month) of the iniciative"
        className="col-6"
        required
      />
      <TextArea 
       placeholder="Description (max. 100 words)"
       label="TextArea"
       subLabel="Please describe as clearly as possible what the objective of this initiative/partnership/commitment is."
       className="col-7"
       required="true"
       invalid
      />
    </form>
  </Container>
);

export default InputPage;
