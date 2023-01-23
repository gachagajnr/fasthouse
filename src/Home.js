import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export default function Home() {
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
          className="font-weight-light m-5 text-decoration-none"
          style={{ color: "yellow" }}
        >
          ABOUT US
        </a>
      </div>
      <h3
        style={{
          fontWeight: 100,
          fontSize: 30,
          color: "white",
          letterSpacing: "4px",
        }}
      >
        We'll Find you the;
        <br />
        <span style={{ color: "orange", fontWeight: 100 }}>
          HOME <span style={{ color: "white" }}>|</span> APARTMENT{" "}
          <span style={{ color: "white" }}>|</span> HOUSE
        </span>
        <br /> You Just Need;
      </h3>
      <Row className="justify-content-space-around p-5 text-center align-items-center">
        <Col sm>
          <div>
            <h2
              className="fw-lighter fs-2"
              style={{
                color: "grey",
              }}
            >
              We have partnered with multiple agencies to make sure your next
              home is the right one, we are all over Kenya and our dedicated
              team is always working to provide a smooth experience, try us and
              see results;
            </h2>
          </div>
        </Col>
      </Row>
      <p
        className=" fw-light font-monospace m-t-3"
        style={{ color: "white" }}
      >
        -YOUR PATA KEJA PARTNER-
      </p>
      <Stack gap={3}>
        <div className="p-5">
          <Button
            size="lg"
            variant="outline-primary"
            onClick={() => alert("Done")}
          >
            Get In Touch
          </Button>
        </div>
        <div>
          <h2 style={{ fontWeight: 100, color: "yellow", fontSize: 12 }}>
            {"Copyright © "}{" "}
            <a href="/" alt="" style={{ textDecoration: "none" }}>
              Patakeja //{" "}
            </a>{" "}
            {new Date().getFullYear()}
            {"."}{" "}
          </h2>
        </div>
      </Stack>
    </Container>
  );
}
