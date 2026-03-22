import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import doctors from "../data/doctors";

function Doctors() {

const location = useLocation();

/* read search query from URL */
const params = new URLSearchParams(location.search);
const initialSearch = params.get("search") || "";

const [search,setSearch] = useState(initialSearch);

/* update search if URL query changes */
useEffect(()=>{
setSearch(initialSearch);
},[initialSearch]);

/* filtering logic */
const filteredDoctors = doctors.filter((doc)=>{

const words = search.toLowerCase().trim().split(" ").filter(Boolean);

const data =
`${doc.name} ${doc.speciality} ${doc.location}`.toLowerCase();

return words.every(word => data.includes(word));

});

return(

<div className="container mt-5">

<h2 className="mb-4">Find Doctors</h2>

<input
type="text"
className="form-control mb-4"
placeholder="Search doctor, speciality, location"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="row">

{filteredDoctors.map((doc)=>(

<div className="col-md-4 col-lg-3 mb-4" key={doc.id}>

<Link
to={`/doctor/${doc.id}`}
style={{textDecoration:"none",color:"inherit"}}
>

<div className="card shadow-sm h-100">

<img
src={doc.img}
className="card-img-top"
alt="doctor"
/>

<div className="card-body">

<h5>{doc.name}</h5>

<p className="text-muted">{doc.speciality}</p>

<p style={{fontSize:"14px"}}>
📍 {doc.location}
</p>

<p style={{color:"green"}}>Available</p>

</div>

</div>

</Link>

</div>

))}

</div>

</div>

)

}

export default Doctors;