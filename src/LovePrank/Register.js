import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CustomFormGroup from "../Components/CustomFormGroup";
import { textConstant } from "../Constants/textConstants";
import { URLCONSTANTS } from "../Constants/urlConstant";
import axios from "../Axios/axios"
import { Context } from "../store";

const Register = () => {
  let history = useHistory();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    setError("");
  }, [username, password, name]);

  const handleSubmit = () => {
    axios
      .post(URLCONSTANTS.USER_REGISTRATION, {
        username: username,
        password: password,
        name: name,
      })
      .then(function (response) {
        console.log(response);
        dispatch({ type: "SET_USER_DETAILS", payload: response.data });
        history.push("/funwithfriends")
      })
      .catch(function (error) {
        console.log(error);
        const err =
          error.response && error.response.data.message
            ? error.response.data.message
            : "";
        setError(err);
      });
  };

  const login = () => {
    history.push("/login");
  };
  return (
    <Row>
      <Col md="6" className="m-auto">
        <Card className="p-2 mt-5">
          <Card.Title>
            <div className="text-center">Register</div>
          </Card.Title>
          <Card.Body className="p-1">
            <Form autoComplete="off">
              <CustomFormGroup
                label={"Name"}
                type="text"
                placeholder="Name"
                value={name}
                setValue={setName}
              />
              <CustomFormGroup
                label={"User Name"}
                type="text"
                placeholder="username"
                value={username}
                setValue={setUserName}
              />
              <CustomFormGroup
                label={"Password"}
                type="password"
                placeholder="Password"
                value={password}
                setValue={setPassword}
              />
            </Form>
          </Card.Body>
          <div className="w-100 text-center text-danger">{error}</div>
          <div className="d-flex ">
            <Button variant="success w-50 m-2" onClick={handleSubmit}>
              Register
            </Button>
            <Button variant="success w-50 m-2" onClick={login}>
              Login
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
