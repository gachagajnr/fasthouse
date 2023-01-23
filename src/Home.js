import { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";

export default function Home() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Patakeja</Popover.Header>
    <Popover.Body>
      <Form>
        <Form.Text className="text-danger">
          *We'll never share your information.
        </Form.Text>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            style={{ color: "black" }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Row>
          <Col sm>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Looking For</Form.Label>
              <Form.Control type="text" placeholder="Looking for" />
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>City/Town</Form.Label>
              <Form.Control type="text" placeholder="City/Town" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Price range</Form.Label>
          <Form.Control type="number" placeholder="Price range" />
        </Form.Group>

        <Button variant="outline-primary" type="submit" style={{ width: "100%" }}>
          Request Access
        </Button>
      </Form>
    </Popover.Body>
  </Popover>
);
  return (
    <Container className="vh-100 px-0 align-items-center">
      <div className="d-flex d-row justify-content-center align-items-center">
        <a
          href="/"
          className="font-weight-light  text-decoration-none"
          style={{ color: "yellow" }}
        >
          HOME
        </a>
        <a
          href="about"
          className="font-weight-light m-3 text-decoration-none"
          style={{ color: "yellow" }}
        >
          ABOUT US
        </a>
      </div>
      <h2
        className="fw-light fs-3 ls-1 m-2"
        style={{
          color: "white",
        }}
      >
        <h6 className="fw-lighter fs-2">We'll Find you the;</h6>
        <br />
        <span style={{ color: "orange", fontWeight: 100 }}>
          HOME <span style={{ color: "white" }}> &bull; </span> APARTMENT
          <span style={{ color: "white" }}> &bull;</span> HOUSE
        </span>
        <br />
        <hr /> You Just Need.
        <span ref={target}></span>
      </h2>
      <Row className="justify-content-space-around p-5 text-center align-items-center">
        <Col sm>
          <div>
            <h2
              className="fw-lighter fs-2"
              style={{
                color: "grey",
              }}
            >
              -We have partnered with Multiple Housing & Real Estate Agencies to
              make sure your next Home is the right one, we are all over Kenya
              and our dedicated Team is always working to provide a smooth
              experience, try us and see results;-
            </h2>
          </div>
        </Col>
      </Row>
      <p
        className=" fw-light    "
        style={{ color: "orange", letterSpacing: "3px" }}
      >
        -YOUR PATA KEJA PARTNER-
      </p>

      <Stack gap={3}>
        <div  >
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <Button
              size="lg"
              variant="outline-primary"
             >
              Get In Touch
            </Button> 
          </OverlayTrigger>
        </div>
        <div>
          <h2 style={{ fontWeight: 100, color: "yellow", fontSize: 13 }}>
            {"Copyright © "}{" "}
            <a href="/" alt="" style={{ textDecoration: "none" }}>
              Patakeja{" "}
            </a>{" "}
            {new Date().getFullYear()}
            {"."}{" "}
          </h2>
        </div>
      </Stack>
    </Container>
  );
}
