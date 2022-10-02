import axios from "../Axios/axios"
import React, { useEffect, useState } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import CustomFormGroup from "../Components/CustomFormGroup";
import { textConstant } from "../Constants/textConstants";
import { URLCONSTANTS } from "../Constants/urlConstant";
const LoveCalculatorPranki = () => {
  const [yourName, setYourName] = useState("");
  const [yourPartner, setYourPartner] = useState("");
  const [percentage, setPercentage] = useState();
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [userPranked, setUserPranked] = useState(false);

  useEffect(() => {
    let url = new URL(window.location.href);
    let user = url.searchParams.get("user");
    setUserId(user);
  }, []);

  useEffect(() => {
    setPercentage("");
    setMessage("");
  }, [yourName, yourPartner]);

  const calculate = () => {
    let requestPacket = {
      prankname: yourName,
      crushname: yourPartner,
      user: userId,
    };
    axios
      .post(URLCONSTANTS.SAVE_PRANK, requestPacket)
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          setUserPranked(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const reset = () => {
    setYourName("");
    setYourPartner("");
    setPercentage(0);
  };

  return (
    <Row>
      <Col md="6" className="m-auto">
        {userPranked ? (
          <>
          <Row className="mt-4">
            <Col md="8" className="m-auto"><img width={300} alt="hhih" src={require('../Images/prank.jpg')}/></Col>
            <Col md="12"><h1>You are Pranked! Your Crush Name has been sent to your friend 🤣🤣</h1></Col>
          </Row>
          </>
        ) : (
          <>
            <p className="mt-4">{textConstant.love_calculator_description}</p>
            <Card className="p-2 mt-2">
              <Card.Title>
                <div className="text-center">❤️Love Calculator</div>
              </Card.Title>
              <Card.Body className="p-1">
                <Form autoComplete="off">
                  <CustomFormGroup
                    label={"YOUR NAME😍"}
                    type="text"
                    placeholder="your name"
                    value={yourName}
                    setValue={setYourName}
                  />
                  <CustomFormGroup
                    label={"PARTNER'S NAME😍"}
                    type="text"
                    placeholder="partner's name"
                    value={yourPartner}
                    setValue={setYourPartner}
                  />
                </Form>
              </Card.Body>
              {percentage ? (
                <>
                  <div id="perc" className={`love-font text-center`} />
                  <h2 className="text-center">
                    {yourName} ❤️ {yourPartner}
                  </h2>
                </>
              ) : null}
              <div className="text-center blink_text text-warning fs-22">
                {message}
              </div>
              <div className="d-flex ">
                <Button variant="success w-50 m-2" onClick={calculate}>
                  Calculate
                </Button>
                <Button variant="warning w-50 m-2" onClick={reset}>
                  Reset
                </Button>
              </div>
            </Card>
            <small>
              Note that like all other love calculators on the Internet, this
              calculator is intended for amusement only rather than as a real
              indication of love. Please follow your heart instead of the
              results of this calculator when considering love.
            </small>
          </>
        )}
      </Col>
    </Row>
  );
};

export default LoveCalculatorPranki;
