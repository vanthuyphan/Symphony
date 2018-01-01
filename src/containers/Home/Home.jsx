import React, {Component} from "react";
import {FormControl, FormGroup, Grid, Row} from "react-bootstrap";

import Button from "../../elements/CustomButton/CustomButton.jsx";
import bgImage from "../../assets/img/cover.jpg";
import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../../components/Header/NavBar";

class Home extends Component {
    render() {
        const overlayStyle = {
            position: 'absolute',
            width: "100%",
            top: 0
        };
        return (
            <div>
                <div style={overlayStyle} className="wrapper wrapper-full-page">
                    <div className={"full-page"} data-color="black" data-image={bgImage}>
                        <div className="content">
                            <NavBar className="login-button" />
                            <div className="home-page">
                                <Grid>
                                    <div className="row center">
                                        <h3 className="home-header-text-1">BroKerRaNk</h3>
                                        <h5 className="home-header-text-2">Hook you up with the best broker in town</h5>
                                    </div>
                                    <Row>
                                        <form>
                                            <FormGroup>
                                                <FormControl
                                                    type="number"
                                                    placeholder="ZIP Code"
                                                />
                                            </FormGroup>

                                        </form>
                                    </Row>
                                    <div className="row center">
                                        <Button className="search-button-home" fill onClick={() => {
                                            window.location = "?#/search_result"
                                        }}>
                                            FIND MY BROKER
                                        </Button>
                                    </div>
                                </Grid>
                            </div>
                        </div>
                        <Footer transparent/>
                        <div className="full-page-background" style={{backgroundImage: "url(" + bgImage + ")"}}></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
