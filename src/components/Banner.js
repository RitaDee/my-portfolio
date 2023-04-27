import { Col, Container, Row } from "react-bootstrap";

export const Banner = () => {
  return (
    <section>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`I’m a Software Developer`}
              <span className="wrap">web developer</span>
            </h1>
            <p>
              {" "}
              I can help you build a product, feature or website Look through
              some of my work and experience! If you like what you see and have
              a project you need coded, don’t hestiate to contact me.
            </p>
            <button onClick={() => console.log('connect')}>Let's connect</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
