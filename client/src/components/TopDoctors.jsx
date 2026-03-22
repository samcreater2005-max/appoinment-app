import React from "react";
import { Link } from "react-router-dom";
import doctors from "../data/doctors";

function TopDoctors(){

return(

<div className="container mt-5">

<h2 className="text-center mb-4">Top Doctors</h2>

<div className="row">

{doctors.map((doc,index)=>(

<div className="col-md-4 col-lg-3 mb-4" key={index}>

<Link to={`/doctor/${index}`} style={{textDecoration:"none",color:"inherit"}}>

<div className="card shadow-sm">

<img src={doc.img} alt="doctor"/>

<div className="card-body">

<h5>{doc.name}</h5>

<p>{doc.speciality}</p>

</div>

</div>

</Link>

</div>

))}

</div>

</div>

)

}

export default TopDoctors;