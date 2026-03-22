import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Appointments from "./pages/Appointments";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";
function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>} />

<Route path="/doctors" element={<Doctors/>} />

<Route path="/login" element={<Login/>} />

<Route path="/register" element={<Register/>} />

<Route
path="/appointments"
element={
<ProtectedRoute>
<Appointments/>
</ProtectedRoute>
}
/>

<Route
path="/doctor/:id"
element={
<ProtectedRoute>
<DoctorDetails/>
</ProtectedRoute>
}
/>

</Routes>

</BrowserRouter>

)

}

export default App;