import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Card, Row, Col } from "react-bootstrap";

const LoveQuotes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/1O6BD8BOlMaiUwmSmtLELrh3M5jDafXxkcGMisncHLn4/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data);
          console.log(results.data);
        },
      }
    );
  }, []);
  return (
    <Row>
      <Col className="m-auto" md="8">
        <div className="mt-2">
          <h3 className="text-center">Love Quotes❤️</h3>
          {data &&
            data.map((val) => (
              <Card className="p-4 m-2">
                {val.quote}
                <span className="text-muted">-{val.author}</span>
              </Card>
            ))}
        </div>
      </Col>
    </Row>
  );
};

export default LoveQuotes;
