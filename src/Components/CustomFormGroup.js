import React from "react";
import {Form} from "react-bootstrap";


const CustomFormGroup = (props) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </Form.Group>
  );
};

export default CustomFormGroup;
