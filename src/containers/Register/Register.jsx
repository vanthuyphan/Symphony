import React, { Component } from 'react';
import {
    Grid, Row, Col,
    Media,
    FormControl, FormGroup
} from 'react-bootstrap';

import Card from '../../components/Card/Card.jsx';

import Button from '../../elements/CustomButton/CustomButton.jsx';
import bgImage from '../../assets/img/cover.jpg';
import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../../components/Header/NavBar";


class Register extends Component{
    render(){
        const overlayStyle = {
            position: 'absolute',
            width: "100%",
            top: 0
        };
        return (
            <div>
                <div style={overlayStyle} className="wrapper wrapper-full-page">
                    <div className={"full-page"} data-color="orange" data-image={bgImage}>
                        <div className="content ">
                            <NavBar className="login-button right" />
                            <Grid>
                                <Row>
                                    <Col md={8} mdOffset={2}>
                                        <div className="header-text">
                                            <h4>Register for free and have your company accessable by thousands of home buyers</h4>
                                            <hr />
                                        </div>
                                    </Col>
                                    <Col md={4} mdOffset={2}>
                                        <Media>
                                            <Media.Left>
                                                <div className="icon">
                                                    <i className="pe-7s-user"></i>
                                                </div>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>
                                                    Free Account
                                                </Media.Heading>
                                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.
                                            </Media.Body>
                                        </Media>
                                        <Media>
                                            <Media.Left>
                                                <div className="icon">
                                                    <i className="pe-7s-graph1"></i>
                                                </div>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>
                                                    Awesome Performances
                                                </Media.Heading>
                                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.
                                            </Media.Body>
                                        </Media>
                                        <Media>
                                            <Media.Left>
                                                <div className="icon">
                                                    <i className="pe-7s-headphones"></i>
                                                </div>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>
                                                    Global Support
                                                </Media.Heading>
                                                Here you can write a feature description for your dashboard, let the users know what is the value that you give them.
                                            </Media.Body>
                                        </Media>
                                    </Col>
                                    <Col md={4}>
                                        <form>
                                            <Card
                                                plain
                                                content={
                                                    <div>
                                                        <FormGroup>
                                                            <FormControl
                                                                type="text"
                                                                placeholder="Your First Name"
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <FormControl
                                                                type="text"
                                                                placeholder="Your Last Name"
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <FormControl
                                                                type="text"
                                                                placeholder="Company"
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <FormControl
                                                                type="email"
                                                                placeholder="Enter Email"
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <FormControl
                                                                type="password"
                                                                placeholder="Password"
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <FormControl
                                                                type="password"
                                                                placeholder="Password Confirmation"
                                                            />
                                                        </FormGroup>
                                                    </div>
                                                }
                                                ftTextCenter
                                                legend={
                                                    <Button wd fill neutral>
                                                        Create Free Account
                                                    </Button>
                                                }
                                            />
                                        </form>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                        <Footer transparent/>
                        <div className="full-page-background" style={{backgroundImage: "url("+bgImage+")"}}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
