import * as React from "react";

//MDBCard package install from npm
//mdb-react-ui-kit
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import { Table, TableRow, TableHead,TableCell} from "material-react-table";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {
    MDBCard,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCardHeader,
    MDBCardText,
    
  } from 'mdb-react-ui-kit';
//bootstrap from npm
import { Container, Row, Col} from "react-bootstrap";
 


import Sidebar from "../sidebar/Sidebar";

const data = [
    { Sno:"1" , SubName:"Maths-I", GPA:"8.9%", Rank:"1"},
    { Sno:"2" , SubName:"Social Studies", GPA:"7.8%", Rank:"2"},
    { Sno:"3" , SubName:"Maths-II", GPA:"7.7%", Rank:"3"},
]
 

function Exams(){
    return (
        <div>
        <Sidebar />
       
        <div className="exams">
            <Container>
           
                <Row>
               
                <MDBCard className="examscard1">
                <MDBRow>
                    <MDBCol>
                        <input  className="form-control" placeholder="Academic Year"/>
                    </MDBCol>
                    <MDBCol>
                        <input className="form-control" placeholder="Class"/>
                    </MDBCol>
                    <MDBCol>
                        <input className="form-control" placeholder="Section"/>
                    </MDBCol>
                </MDBRow>
                
                <MDBRow style={{paddingTop:"10px"}}>  
                    <MDBCol>
                        <input className="form-control w-50" placeholder="Exam Name"/>
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn className="form-outline w-50" style={{float:"right"}} >SEARCH</MDBBtn>
                    </MDBCol>
                </MDBRow>
                
                </MDBCard>
               
                </Row>
            
                <Row>
                <MDBCard className="examscard2">
                <MDBCardText className="examsHeader">Your ward got overall II<sup>nd</sup> Rank with 9.0% GPA</MDBCardText>
                <TableContainer>
                <Table className="examtable">
                <TableHead>
                <TableRow>
                    <TableCell style={{fontWeight:"bold", fontSize:"18px"}}>Sno</TableCell>
                    <TableCell style={{fontWeight:"bold", fontSize:"18px"}}>SubName</TableCell>
                    <TableCell style={{fontWeight:"bold", fontSize:"18px"}}>GPA</TableCell>
                    <TableCell style={{fontWeight:"bold", fontSize:"18px"}}>Rank</TableCell>
                </TableRow>
                </TableHead>
                {data.map((val, key) => {
                    return (
                        <TableRow key={key}>
                            <TableCell style={{fontWeight:"bold", fontSize:"18px"}}>{val.Sno}</TableCell>
                            <TableCell style={{fontSize:"18px"}}>{val.SubName}</TableCell>
                            <TableCell style={{fontSize:"18px"}}>{val.GPA}</TableCell>
                            <TableCell style={{fontSize:"18px"}}>{val.Rank}</TableCell>
                        </TableRow>
                    )
                })}
                </Table> 
                </TableContainer>
                </MDBCard>
                
                </Row>
            
            </Container>
        </div>
        </div>
            
    );
}
 
export default Exams;

