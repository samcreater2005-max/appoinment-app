import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

const navigate = useNavigate();

const [user,setUser] = useState(null);
const [doctor,setDoctor] = useState(null);

useEffect(()=>{

const storedUser = localStorage.getItem("user");
const storedDoctor = localStorage.getItem("doctor");

if(storedUser){
setUser(JSON.parse(storedUser));
}

if(storedDoctor){
setDoctor(JSON.parse(storedDoctor));
}

},[]);


const logout = ()=>{

localStorage.removeItem("user");
localStorage.removeItem("doctor");

setUser(null);
setDoctor(null);

navigate("/login");

};

return(

<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">

<div className="container">

<Link className="navbar-brand fw-bold" to="/">
DocApp
</Link>

<div>

<Link className="nav-link d-inline me-3" to="/">
Home
</Link>

<Link className="nav-link d-inline me-3" to="/doctors">
Doctors
</Link>

<Link className="nav-link d-inline me-3" to="/appointments">
My Appointments
</Link>


{!user && !doctor && (

<>

<Link className="btn btn-outline-primary me-2" to="/login">
Login
</Link>

<Link className="btn btn-primary me-2" to="/register">
Register
</Link>

</>

)}

{(user || doctor) && (

<button
className="btn btn-danger"
onClick={logout}
>
Logout
</button>

)}

</div>

</div>

</nav>

)

}

export default Navbar;
