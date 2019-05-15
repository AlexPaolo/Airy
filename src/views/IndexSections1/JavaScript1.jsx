import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
import { Link } from "react-router-dom";


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
    src: require("assets/img/med.jpg"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/Healthcare.jpg"),
    altText: "Slide 2",
    caption: ""
  },
  {
    src: require("assets/img/med2.png"),
    altText: "Slide 3",
    caption: ""
  }
];

class JavaScript1 extends React.Component {
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
      <div className="section section-javascript" id="javascript1">
              
        <div className="section">
          <Container>
            <div className="title">

            </div>
            <Row className="justify-content-between align-items-center">
            <Col lg="6">
                <UncontrolledCarousel
                  items={carouselItems}
                  indicators={false}
                  autoPlay={false}
                />
              </Col>
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Healtcare
                </h1>
                <p className="text-white mt-4">
                  Aceleramos el proceso de detección y mejoramos el diagnostico, a travez de la visión artificial y el desarrollo de APPs.
                </p>
                <Button
                  className="mt-4"
                  color="warning"
                 // href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alerts"
                  tag={Link} to="/healtcare"
                >
                  Learn more
                </Button>
              </Col>
              
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default JavaScript1;
