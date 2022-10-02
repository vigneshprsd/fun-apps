import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Row, Col, Form, Card, Button, Table } from "react-bootstrap";
import CustomFormGroup from "../Components/CustomFormGroup";
import { textConstant } from "../Constants/textConstants";
import { URLCONSTANTS } from "../Constants/urlConstant";
import { Context } from "../store";
const LoveCalculatorPrank = () => {
  const [state, dispatch] = useContext(Context);

  const { userDetails, prankerId, token } = state.userDetails;

  const [publicUrl, setPublicUrl] = useState("");
  const [prankList, setPrankList] = useState([]);

  useEffect(() => {
    setPublicUrl(window.location.origin + "/lovecalci?user=" + prankerId);
    getPranks();
  }, []);


  const getPranks = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(URLCONSTANTS.GET_USER_PRANK, config)
      .then(function (response) {
        if (response.data && response.data.username) {
          setPrankList(response.data.pranklist);
        }
      })
      .catch(function (error) {
        console.log(error);
        const err =
          error.response && error.response.data.message
            ? error.response.data.message
            : "";
      });
  };

  console.log(prankList);

  const copyText = () => {
    // var copyText = document.getElementById("myInput");
    // copyText.select();
    // copyText.setSelectionRange(0, 99999);
    // navigator.clipboard.writeText(copyText.value);

    navigator.clipboard.writeText(publicUrl);
    console.log(navigator.clipboard.readText());
  };

  return (
    <Row>
      <Col md={6} className="m-auto">
        <Form className="mt-4">
          <Form.Group className="mb-3">
            <Form.Label>
              Copy the text below from the input box and share with your friends
            </Form.Label>
            <Form.Control type="text" value={publicUrl} />
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            onClick={() => {
              copyText();
            }}
          >
            Copy text
          </Button>
        </Form>
      </Col>
      <Row className="mt-4">
        <Col md={8} className="m-auto">
          <Button type="button" variant="success" onClick={()=>{getPranks()}}>Refresh list</Button>
          <Table striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Friends Name</th>
                <th>Crush Name</th>
              </tr>
            </thead>
            <tbody>
              {prankList &&
                prankList.map((val,index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{val.prankname}</td>
                    <td>{val.crushname}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Row>
  );
};

export default LoveCalculatorPrank;
