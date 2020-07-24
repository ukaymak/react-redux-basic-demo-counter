import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import IncreaseByTwo from "./components/IncreaseByTwo";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import Clear from "./components/Clear";

import { Container, Col, Row } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Col xs="6">
          <Counter />
          <Row>
            <Col>
              <IncreaseCounter />
            </Col>
            <Col>
              <DecreaseCounter />
            </Col>
            <Col>
              <IncreaseByTwo />
            </Col>
            <Col>
              <Clear />
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
