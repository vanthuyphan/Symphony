import React, {Component} from "react";
import {Col, ControlLabel, FormControl, FormGroup, Grid, Row} from "react-bootstrap";

import Card from "../../components/Card/Card.jsx";
import FormInputs from "../../components/FormInputs/FormInputs.jsx";
import UserCard from "../../components/Card/UserCard.jsx";
import Button from "../../elements/CustomButton/CustomButton.jsx";

import avatar from "../../assets/img/default-avatar.png";
import NavBar from "../../components/Header/NavBar";
import bgImage from '../../assets/img/full-screen-image-1.jpg';


class SearchResult extends Component {
    render() {
        const overlayStyle = {
            position: 'absolute',
            width: "100%",
            top: 0
        };
        return (
            <div  style={overlayStyle} className="wrapper wrapper-full-page">
                <div data-color="white" data-image={bgImage}>
                    <div className="content">
                        <NavBar className="right" />
                        <Grid className="home-page">
                            <Row>

                                <Card
                                    title="Find Your Broker"
                                    content={
                                        <form>
                                            <FormInputs
                                                ncols = {["col-md-4","col-md-4","col-md-4"]}
                                                proprieties = {[
                                                    {
                                                        label : "City",
                                                        type : "text",
                                                        bsClass : "form-control",
                                                        placeholder : "City",
                                                        defaultValue : "City"
                                                    },
                                                    {
                                                        label : "Country",
                                                        type : "text",
                                                        bsClass : "form-control",
                                                        placeholder : "Country",
                                                        defaultValue : "Country"
                                                    },
                                                    {
                                                        label : "Postal Code",
                                                        type : "number",
                                                        bsClass : "form-control",
                                                        placeholder : "ZIP Code"
                                                    }
                                                ]}
                                            />

                                            <Button
                                                bsStyle="info"
                                                pullRight
                                                fill
                                                type="submit"
                                            >
                                                Search
                                            </Button>
                                            <div className="clearfix"></div>
                                        </form>
                                    }
                                />


                                <Row>
                                    <Col md={4}>
                                        <UserCard
                                            bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                            avatar={avatar}
                                            name="Tania Andrew"
                                            userName="tania123"
                                            description={
                                                <span>
                                        "Lamborghini Mercy
                                        <br />
                                        Your chick she so thirsty
                                        <br />
                                        I'm in that two seat Lambo"
                                    </span>
                                            }
                                            socials={
                                                <div>
                                                    <Button simple><i className="fa fa-facebook-square"></i></Button>
                                                    <Button simple><i className="fa fa-twitter"></i></Button>
                                                    <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                                </div>
                                            }
                                        />

                                    </Col>
                                    <Col md={4}>
                                        <UserCard
                                            bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                            avatar={avatar}
                                            name="Tania Andrew"
                                            userName="tania123"
                                            description={
                                                <span>
                                        "Lamborghini Mercy
                                        <br />
                                        Your chick she so thirsty
                                        <br />
                                        I'm in that two seat Lambo"
                                    </span>
                                            }
                                            socials={
                                                <div>
                                                    <Button simple><i className="fa fa-facebook-square"></i></Button>
                                                    <Button simple><i className="fa fa-twitter"></i></Button>
                                                    <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                                </div>
                                            }
                                        />

                                    </Col>

                                    <Col md={4}>
                                        <UserCard
                                            bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                            avatar={avatar}
                                            name="Tania Andrew"
                                            userName="tania123"
                                            description={
                                                <span>
                                        "Lamborghini Mercy
                                        <br />
                                        Your chick she so thirsty
                                        <br />
                                        I'm in that two seat Lambo"
                                    </span>
                                            }
                                            socials={
                                                <div>
                                                    <Button simple><i className="fa fa-facebook-square"></i></Button>
                                                    <Button simple><i className="fa fa-twitter"></i></Button>
                                                    <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                                </div>
                                            }
                                        />

                                    </Col>



                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <UserCard
                                            bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                            avatar={avatar}
                                            name="Tania Andrew"
                                            userName="tania123"
                                            description={
                                                <span>
                                        "Lamborghini Mercy
                                        <br />
                                        Your chick she so thirsty
                                        <br />
                                        I'm in that two seat Lambo"
                                    </span>
                                            }
                                            socials={
                                                <div>
                                                    <Button simple><i className="fa fa-facebook-square"></i></Button>
                                                    <Button simple><i className="fa fa-twitter"></i></Button>
                                                    <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                                </div>
                                            }
                                        />

                                    </Col>
                                    <Col md={4}>
                                        <UserCard
                                            bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                            avatar={avatar}
                                            name="Tania Andrew"
                                            userName="tania123"
                                            description={
                                                <span>
                                        "Lamborghini Mercy
                                        <br />
                                        Your chick she so thirsty
                                        <br />
                                        I'm in that two seat Lambo"
                                    </span>
                                            }
                                            socials={
                                                <div>
                                                    <Button simple><i className="fa fa-facebook-square"></i></Button>
                                                    <Button simple><i className="fa fa-twitter"></i></Button>
                                                    <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                                </div>
                                            }
                                        />

                                    </Col>

                                    <Col md={4}>
                                        <UserCard
                                            bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                            avatar={avatar}
                                            name="Tania Andrew"
                                            userName="tania123"
                                            description={
                                                <span>
                                        "Lamborghini Mercy
                                        <br />
                                        Your chick she so thirsty
                                        <br />
                                        I'm in that two seat Lambo"
                                    </span>
                                            }
                                            socials={
                                                <div>
                                                    <Button simple><i className="fa fa-facebook-square"></i></Button>
                                                    <Button simple><i className="fa fa-twitter"></i></Button>
                                                    <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                                </div>
                                            }
                                        />

                                    </Col>

                                </Row>


                            </Row>
                        </Grid>

                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResult;
