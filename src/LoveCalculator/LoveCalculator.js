import React, { useEffect, useState } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";

const LoveCalculator = () => {
  const [yourName, setYourName] = useState("");
  const [yourPartner, setYourPartner] = useState("");
  const [percentage, setPercentage] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (percentage) {
      var i = 0;
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("perc");
        var width = 1;
        var id = setInterval(frame, 50);
        function frame() {
          if (width >= Number(percentage)) {
            clearInterval(id);
            i = 0;
            if (percentage >= 90 && percentage <= 100) {
              setMessage("Made For Each Other, A Perfect Match!😍😍");
            } else if (percentage >= 80 && percentage < 90) {
              setMessage("Change Your Name Else Lend Your Surname😍");
            } else if (percentage >= 70 && percentage < 80) {
              setMessage("Worth Taking Risk!Go Ahead...❤️");
            } else if (percentage >= 60 && percentage < 70) {
              setMessage("Still High Chances Of Getting Together❤️");
            } else if (percentage >= 50 && percentage < 60) {
              setMessage("There Are No Half Measures, Do or Die For You");
            } else if (percentage >= 40 && percentage < 50) {
              setMessage("A Lot Of Effort Required From Both Sides!");
            } else if (percentage >= 30 && percentage < 40) {
              setMessage("Try Becoming A Puppy For Him/Her!Might Work...");
            } else if (percentage >= 20 && percentage < 30) {
              setMessage("Try Becoming A Puppy For Him/Her!Might Work...");
            } else if (percentage >= 0 && percentage < 10) {
              setMessage("Try Searching: Ways To Commit Sucide!");
            }
          } else {
            width++;
            if (width < 30) {
              elem.style.color = "red";
            } else if (width >= 30 && width < 75) {
              elem.style.color = "orange";
            } else if (width > 75) {
              elem.style.color = "green";
            }
            elem.innerText = width + "%";
          }
        }
      }
    }
  }, [percentage]);

  useEffect(() => {
    setPercentage("");
    setMessage("");
  }, [yourName, yourPartner]);

  const calculate = () => {
    var sum = 0;
    var sum1 = 0;
    for (var i = 0; i < yourName.length; i++) {
      var n = yourName.charCodeAt(i);
      sum = sum + n;
    }
    for (var i = 0; i < yourPartner.length; i++) {
      var n = yourPartner.charCodeAt(i);
      sum1 = sum1 + n;
    }
    var total = sum + sum1;
    console.log("yourName", yourName, yourPartner, total);
    setPercentage(Number(total) % 100);
  };
  const reset = () => {
    setYourName("");
    setYourPartner("");
    setPercentage(0);
  };

  return (
    <Row>
      <Col md="6" className="m-auto">
        <Card className="p-2 mt-5">
          <Card.Title>
            <div className="text-center">❤️Love Calculator</div>
          </Card.Title>
          <Card.Body className="p-1">
            <Form autoComplete="off">
              <Form.Group className="mb-3">
                <Form.Label>YOUR NAME😍</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="your name"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>PARTNER'S NAME😍</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="partner's name"
                  value={yourPartner}
                  onChange={(e) => setYourPartner(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Card.Body>
          {percentage ? (
            <div id="perc" className={`love-font text-center`} />
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
      </Col>
    </Row>
  );
};

export default LoveCalculator;
