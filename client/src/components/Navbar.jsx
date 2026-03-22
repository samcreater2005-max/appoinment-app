import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

const navigate = useNavigate();
const [user,setUser] = useState(null);

useEffect(()=>{

const storedUser = localStorage.getItem("user");

if(storedUser){
setUser(JSON.parse(storedUser));
}

},[]);

const handleLogout = ()=>{

localStorage.removeItem("user");
setUser(null);
navigate("/");

};

return(
//this line to fix navbar
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

{user ? (

<button className="btn btn-danger" onClick={handleLogout}>
Logout
</button>

) : (

<>

<Link className="btn btn-outline-primary me-2" to="/login">
Patient Login
</Link>

<Link className="btn btn-primary me-2" to="/register">
Patient Register
</Link>

<Link className="btn btn-dark" to="/doctor-login">
Doctor Login
</Link>

<Link className="btn btn-dark" to="/doctor-register">
Doctor Register
</Link>
</>

)}

</div>

</div>

</nav>

)

}

export default Navbar;