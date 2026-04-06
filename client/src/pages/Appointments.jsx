import React, { useEffect, useState } from "react";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    fetch("http://localhost:5000/api/appointments")
      .then(res => res.json())
      .then(data => {
        const userAppointments = data.filter(
          app => app.patientId === user._id
        );
        setAppointments(userAppointments);
      });
  }, []);

  const handleCancel = async (id) => {
    await fetch(`http://localhost:5000/api/appointments/${id}`, {
      method: "DELETE"
    });
    setAppointments(appointments.filter(app => app._id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Speciality</th>
              <th>Location</th>
              <th>Date</th>
              <th>Time</th>
              <th>Patient</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((app, index) => (
              <tr key={index}>
                <td>{app.doctor}</td>
                <td>{app.speciality}</td>
                <td>{app.location}</td>
                <td>{app.date}</td>
                <td>{app.time}</td>
                <td>{app.patient}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleCancel(app._id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Appointments;
