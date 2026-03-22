import React,{useState} from "react";
import { useNavigate, Link } from "react-router-dom";

function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [role,setRole] = useState("patient");

const handleSubmit = async(e)=>{

e.preventDefault();

const res = await fetch("http://localhost:5000/api/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
password,
role
})

});

const data = await res.json();

if(role === "doctor"){
localStorage.setItem("doctor",JSON.stringify(data));
navigate("/doctor-dashboard");
}else{
localStorage.setItem("user",JSON.stringify(data));
navigate("/doctors");
}

};

return(

<div className="container d-flex justify-content-center align-items-center" style={{height:"85vh"}}>

<div className="card shadow p-4" style={{width:"420px"}}>

<h3 className="text-center mb-4">Login</h3>

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

<button className="btn btn-primary w-100">
Login
</button>

</form>

<p className="text-center mt-3">

Don't have an account?  
<Link to="/register"> Register</Link>

</p>

</div>

</div>

)

}

export default Login;