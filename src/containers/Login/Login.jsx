import React, { Component } from 'react';
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import {
    Grid, Row, Col,
    FormGroup, FormControl
} from 'react-bootstrap';

import Card from '../../components/Card/Card.jsx';

import Button from '../../elements/CustomButton/CustomButton.jsx';
import bgImage from '../../assets/img/cover.jpg';
import Footer from '../../components/Footer/Footer.jsx';

@inject('userStore')
@observer
class Login extends Component {
    componentDidMount(){
        setTimeout(function() { this.setState({cardHidden: false}); }.bind(this), 700);
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            cardHidden: true
        }
    }

    handlePhoneChange(e) {
        this.setState({phone: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    render() {
        const overlayStyle = {
            position: 'absolute',
            width: "100%",
            top: 0
        };
        return (
        <div>
            <div style={overlayStyle} className="wrapper wrapper-full-page">
                <div className={"full-page login-page"} data-color="black" data-image={bgImage}>
                    <div className="content">
                        <Grid>
                            <Row>
                                <Col md={4} sm={6} mdOffset={4} smOffset={3}>
                                    <Card
                                        hidden={this.state.cardHidden}
                                        textCenter
                                        title="Login"
                                        content={
                                            <form>
                                                <FormGroup
                                                    controlId="formBasicText"
                                                >
                                                    <FormControl
                                                        type="text"
                                                        value={this.state.value}
                                                        placeholder="Enter Phone"
                                                        onChange={this.handlePhoneChange.bind(this)}
                                                    />
                                                </FormGroup>
                                                <FormGroup
                                                    controlId="formBasicText"
                                                >
                                                    <FormControl
                                                        type="password"
                                                        value={this.state.value}
                                                        placeholder="Enter Password"
                                                        onChange={this.handlePasswordChange.bind(this)}
                                                    />
                                                    <FormControl.Feedback />
                                                </FormGroup>
                                            </form>
                                        }
                                        legend={
                                            <div className="row">
                                            <Button
                                                onClick={this.handleFormSubmit}
                                                bsStyle="warning" fill wd>
                                                Login
                                            </Button>
                                                <div className="row">
                                                    <a className='register-link' onClick={() => {window.location="?#/register"}}>
                                                        No account yet? Register instead
                                                    </a>
                                                </div>
                                            </div>
                                        }
                                        ftTextCenter
                                    />

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

    handleFormSubmit = e => {
        this.props.userStore.login(this.state.phone, this.state.password);
        // this.props.userStore.login("01229989919", "123456");
        e.preventDefault();
    };
}

export default Login;
