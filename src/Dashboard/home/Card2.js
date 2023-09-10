import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBListGroup,MDBListGroupItem,
    MDBRipple,
    MDBCardHeader
  } from 'mdb-react-ui-kit';
  //font awesome
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

  function Card2(){
    return(
    <div>
        <MDBListGroup className='group'>
            <MDBListGroupItem className='d-flex justify-content-between align-items-center' style={{backgroundColor:"rgb(102, 47, 227,0.9)", color:"white"}}>
                <p><FontAwesomeIcon icon={faIndianRupeeSign} />60,000/-<br></br>
                Total Fees</p> 
            </MDBListGroupItem>
        </MDBListGroup>

        <MDBListGroup className='group'>
        <MDBListGroupItem className='d-flex justify-content-between align-items-center' style={{backgroundColor:"rgb(227, 222, 47,0.9)", color:"white"}}>
                <p><FontAwesomeIcon icon={faIndianRupeeSign} />30,000/-<br></br>
                Paid Fees</p>
                <p><FontAwesomeIcon icon={faIndianRupeeSign} />Last Paid on<br></br>
                25/07/2023</p>
            </MDBListGroupItem>
        </MDBListGroup>
        
        <MDBListGroup className='group'>
        <MDBListGroupItem className='d-flex justify-content-between align-items-center' style={{backgroundColor:"rgba(201, 76, 76, 0.9)", color:"white"}}>
                <p><FontAwesomeIcon icon={faIndianRupeeSign} />30,000/-<br></br>
                Due Fees</p>
                <p><FontAwesomeIcon icon={faIndianRupeeSign} />Due Date<br></br>
                25/10/2023</p>
            </MDBListGroupItem>
        </MDBListGroup>
    </div>
        
    );
  }
  export default Card2;