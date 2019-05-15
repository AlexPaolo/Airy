import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: ""
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: ""
  }
];

class JavaScript3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoModal: false,
      miniModal: false,
      formModal: false
    };
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
  render() {
    return (
      <div className="section section-javascript" id="javascript3">
              
        <div className="section section-lg section-safe">
<Container>
  <Row className="justify-content-center">
    <Col lg="12">
      <h1 className="text-center">Nuestros servicios</h1>
      <Row className="row-grid justify-content-center">
        <Col lg="3">
          <div className="info">
            <div className="icon icon-primary">
              <i className="tim-icons icon-money-coins" />
            </div>
            <h4 className="info-title">Low Cost</h4>
            <hr className="line-primary" />
            <p>
              Trabajamos con tecnología eficiente a bajo coste.
            </p>
          </div>
        </Col>
        <Col lg="3">
          <div className="info">
            <div className="icon icon-warning">
              <i className="tim-icons icon-chart-pie-36" />
            </div>
            <h4 className="info-title">Data Anlytics</h4>
            <hr className="line-warning" />
            <p>
              Servicio end to end con Big data, Data Science.
            </p>
          </div>
        </Col>
        <Col lg="3">
          <div className="info">
            <div className="icon icon-success">
              <i className="tim-icons icon-single-02" />
            </div>
            <h4 className="info-title">Specialized Team</h4>
            <hr className="line-success" />
            <p>
              Personal con años de experiencia en la implementación de modelos de Inteligencia Artificial.
              A nivel nacional e internacional.
            </p>
          </div>
        </Col>
        <Col lg="3">
          <div className="info">
            <div className="icon icon-primary">
              <i className="tim-icons icon-key-25" />
            </div>
            <h4 className="info-title">Security Data</h4>
            <hr className="line-success" />
            <p>
              Tus datos es lo más importante para nosotros es por eso que trabajamos bajo la certificacion ISO-2100
            </p>
          </div>
        </Col>
      </Row>
    </Col>
  </Row>
</Container>


        </div>
      </div>
    );
  }
}

export default JavaScript3;





