import React,{useState} from "react";
import {useParams,useNavigate} from "react-router-dom";
import doctors from "../data/doctors";

function DoctorDetails(){

const {id} = useParams();
const navigate = useNavigate();

const doctor = doctors.find(d=>d.id===parseInt(id));

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [date,setDate] = useState("");
const [time,setTime] = useState("");

const handleSubmit = async(e)=>{

e.preventDefault();

const user = JSON.parse(localStorage.getItem("user"));

await fetch("http://localhost:5000/api/appointments",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

doctor:doctor.name,
speciality:doctor.speciality,
location:doctor.location,

patient:name,
email,

date,
time,

patientId:user._id

})

});

navigate("/appointments");

};

return(

<div className="container mt-5">

<div className="row">

<div className="col-md-4">

<img
src={doctor.img}
className="img-fluid rounded"
/>

</div>

<div className="col-md-8">

<h2>{doctor.name}</h2>

<p>{doctor.speciality}</p>

<p>📍 {doctor.location}</p>

<p>Experience: {doctor.experience}</p>

<p>Consultation Fee: ₹{doctor.fee}</p>

</div>

</div>

<hr/>

<h3>Book Appointment</h3>

<form onSubmit={handleSubmit}>

<input
className="form-control mb-3"
placeholder="Patient Name"
onChange={(e)=>setName(e.target.value)}
required
/>

<input
className="form-control mb-3"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="date"
className="form-control mb-3"
onChange={(e)=>setDate(e.target.value)}
required
/>

<input
type="time"
className="form-control mb-3"
onChange={(e)=>setTime(e.target.value)}
required
/>

<button className="btn btn-success">
Confirm Appointment
</button>

</form>

</div>

)

}

export default DoctorDetails;