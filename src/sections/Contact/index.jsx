import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./index.scss";

const Contact = () => {
  return (
    <Container fluid={true} className="section-contact ps-5 pe-5">
      <Form>
        <h1 className="contact-title">Contact</h1>
        <h3 className="sub-heading">
          Are you looking to be one of our sponsors? Please do not hesitate to
          contact us directly. Our team will come back to you ASAP!
        </h3>
        <Row className="justify-content-between mt-5 mb-5 gy-3">
          <Col xs={12} sm={4}>
            <Form.Control type="text" placeholder="Your name" />
          </Col>
          <Col xs={12} sm={4}>
            <Form.Control type="email" placeholder="Your Email" />
          </Col>
          <Col xs={12} sm={4}>
            <Form.Control type="text" placeholder="Your account" />
          </Col>
          <Col xs={12}>
            <Form.Control
              as="textarea"
              rows={5}
              className="mt-5 textarea"
              placeholder="Your Message"
            />
          </Col>
        </Row>

        <div className="text-center">
          <Button variant="outline-light" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;
