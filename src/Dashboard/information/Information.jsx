import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import image from "./images/image.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Information(){
    const styles = {
        media: {
            height: 400,
            
        },
        card: {
            position: 'relative',
        },
        overlay: {
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: 'white',
            
        }
    }
    return (
        <div>
        <Navbar />
        <Sidebar />

        <Card className="info">
            <CardActionArea>
               <div style={styles.card}>
                <CardMedia 
                style={styles.media}
                component="img"
                image={require("./images/image.jpg")} 
                alt="students image"
                height="400px" 
                />
                <div style={styles.overlay}>
                    <h3 style={{fontSize:"50px"}}>Kiddys</h3>
                    <p>student information is displayed here</p>
                </div>
               </div>
               
                <CardContent>
                    <Container>
                    <Row>
                    <Col>
                        <table className="table1">
                        <tr>
                            <td>First Name:</td>
                            <td>Mounika</td>
                        </tr>
                        <tr>
                            <td>Middle Name:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>Garudachalam</td>
                        </tr>
                        </table>
                    </Col>
                    <Col>
                        <table className="table1">
                        <tr>
                            <td>Academic Year:</td>
                            <td>2022-23</td>
                        </tr>
                        <tr>
                            <td>Class:</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>Section:</td>
                            <td>Alpha</td>
                        </tr>
                        </table>
                    </Col>
                    </Row>
                    </Container>  
                    
                </CardContent>

                
            </CardActionArea>
        </Card>
        </div>
    );
}

export default Information;