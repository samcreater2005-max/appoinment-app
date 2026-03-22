import React,{useState} from "react";
import { useNavigate, Link } from "react-router-dom";

function Register(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [role,setRole] = useState("patient");

const handleSubmit = async(e)=>{

e.preventDefault();

await fetch("http://localhost:5000/api/auth/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password,
role
})

});

navigate("/login");

};

return(

<div className="container d-flex justify-content-center align-items-center" style={{height:"85vh"}}>

<div className="card shadow p-4" style={{width:"420px"}}>

<h3 className="text-center mb-4">Register</h3>

<form onSubmit={handleSubmit}>

<select
className="form-control mb-3"
onChange={(e)=>setRole(e.target.value)}
>

<option value="patient">Patient</option>
<option value="doctor">Doctor</option>

</select>

<input
className="form-control mb-3"
placeholder="Name"
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
type="password"
className="form-control mb-3"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button className="btn btn-success w-100">
Register
</button>

</form>

<p className="text-center mt-3">

Already have an account?  
<Link to="/login"> Login</Link>

</p>

</div>

</div>

)

}

export default Register;