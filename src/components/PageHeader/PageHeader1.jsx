import React from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

// reactstrap components

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
            <div className="content-center brand">
                <Row className="row-grid justify-content-between align-items-center text-left">
                  
                  <Col lg="4" md="5">
                     <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/neuro.png")}
                  />
                  </Col>
                  <Col lg="6" md="3">
                    <h1 className="h1-seo">Airy +</h1>
                        <h2 className="d-none d-sm-block">
                        El futuro es ahora
                    </h2>
                  </Col>
                </Row>
            </div>

        </Container>
      </div>
    );
  }
}

export default PageHeader;
