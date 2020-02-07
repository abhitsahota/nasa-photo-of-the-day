import React, { useState, useEffect } from "react";
import axios from "axios";
import ICard from "./imgCard";
import Info from "./info";
import "../App.css";
import { Container, Col, Row, Button, 
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

function PicData() {

    const initialState = []; 
    const [apodData, setapodData] = useState(initialState);

 
    const picCall = () => {
        let backupData = {"copyright":"Tom Glenn","date":"2020-02-06","explanation":"The Moon's south pole is near the top of this detailed telescopic view. Looking across the rugged southern lunar highlands it was captured from southern California, planet Earth. At the Moon's third quarter phase the lunar terminator, the sunset shadow line, is approaching from the left. The scene's foreshortened perspective heightens the impression of a dense field of craters and makes the craters themselves appear more oval shaped close to the lunar limb. Below and left of center is sharp-walled crater Tycho, 85 kilometers in diameter. Young Tycho's central peak is still in sunlight, but casts a long shadow across the crater floor. The large prominent crater to the south (above) Tycho is Clavius. Nearly 231 kilometers in diameter its walls and floor are pocked with smaller, more recent, overlaying impact craters. Mountains visible along the lunar limb at the top can rise about 6 kilometers or so above the surrounding terrain.","hdurl":"https://apod.nasa.gov/apod/image/2002/SouthernMoonscapeClaviusTycho.jpg","media_type":"image","service_version":"v1","title":"Southern Moonscape","url":"https://apod.nasa.gov/apod/image/2002/SouthernMoonscapeClaviusTycho1024.jpg"}

        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(resp => 
                setapodData(resp.data)) 
            .catch(err => {
                console.log(err);
                setapodData(backupData)}
            );
    }

    useEffect(picCall, []);

    console.log(apodData);
    let data = apodData;

    return (
        <Container className="mt-5">
            <Row>
            <Col className="my-auto" xs="8">
                <ICard data={data} />
            </Col>
            <Col className="my-auto" xs="4">
                <Info data={data} />
            </Col>
            </Row>
        </Container>
    )
};

export default PicData;