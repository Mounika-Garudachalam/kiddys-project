import React from "react";
//css
// import '../App.css';
//card components
import Card3 from "./Card3";
import Card1 from "./Card1";
import Card2 from "./Card2";
//image
import person from "./images/person.jpg";
//MDBCard package install from npm
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBListGroup,MDBListGroupItem,
    MDBRipple,
    MDBCardHeader
  } from 'mdb-react-ui-kit';
//bootstrap from npm
import { Container, Row, Col} from "react-bootstrap";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";


import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

function Home(){
    return (
    <div>
    <Navbar />
    <Sidebar />
    <div className="content">
        
        <Container>
        <Row>
        {/* card1 */}
         <Col>
            <MDBCard className="card">
            <MDBCardHeader className="header"><FontAwesomeIcon icon={faCircleInfo} />{' '}My Information</MDBCardHeader>
            <MDBCardImage className="mx-auto d-block" style={{width:"200px", height:"180px"}} src={person} alt="man image" />
            {/* mx-auto d-block for centering image */}
            <Card1 />
            </MDBCard>
        </Col> 
        {/* card2    */}
        <Col>
            <MDBCard className="card">
            <MDBCardHeader className="header"><FontAwesomeIcon icon={faIndianRupeeSign} />{' '}Fee Details</MDBCardHeader>
            <MDBCardBody>
            <Card2 />
            </MDBCardBody>
            </MDBCard>
        </Col>
        {/* card3  */}
        <Col>
            <MDBCard className="card">
            <MDBCardHeader className="header"><FontAwesomeIcon icon={faCalendar} />{' '}Holidays List</MDBCardHeader>
            <Card3 />
            </MDBCard>
        </Col>   
        </Row>
        </Container>
     </div>
     </div>
    );
}

export default Home;

