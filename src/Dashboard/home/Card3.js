//css
// import '../App.css';
//data
const data = [
    { Date:"1 Jan" , Name:"New Year's Day"},
    { Date: "14 Jan", Name:"Makar Sankranti"},
    { Date:"26 Jan" , Name:"Republic Day"},
    { Date:"30 Mar" , Name:"Rama Navami"},
    { Date:"14 Apr", Name:"Ambedkar Jayanthi"},
    { Date:"24 Oct", Name:"Dussehra"},
    { Date: "12 Nov", Name:"Diwali"},
    { Date: "24 Dec", Name:"Christamas Eve"},
    { Date:"31 Dec" , Name:"New Year's Eve"},
]
 
function Card3() {
    return (
        <div>
            <table className='table'>
        
                <tr style={{textAlign:"center"}}>
                    <th style={{fontWeight:"bold"}}>Date</th>
                    <th style={{fontWeight:"bold"}}> Name</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr style={{textAlign:"center"}} key={key}>
                            <td style={{fontWeight:"bold"}}>{val.Date}</td>
                            <td>{val.Name}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}
 
export default Card3;


               