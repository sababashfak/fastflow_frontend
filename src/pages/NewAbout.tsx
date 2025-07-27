
import React from "react";

const employees = [
  {
    name: "John Doe",
    post: "Project Manager",
    email: "john@example.com",
    phone: "+1 234 567 890",
    facebook: "https://facebook.com/john.doe",
    image: "/images/employees/john.jpg",
  },
  {
    name: "Jane Smith",
    post: "Senior Developer",
    email: "jane@example.com",
    phone: "+1 987 654 321",
    facebook: "https://facebook.com/jane.smith",
    image: "/images/employees/jane.jpg",
  },
];

export default function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>We are a team of professionals passionate about reconstruction projects.</p>

      <h2>Meet Our Team</h2>
      <div className="employee-grid">
        {employees.map((emp, index) => (
          <div key={index} className="employee-card">
            <img src={emp.image} alt={emp.name} className="employee-photo" />
            <h3>{emp.name}</h3>
            <p>{emp.post}</p>
            <p>Email: <a href={`mailto:${emp.email}`}>{emp.email}</a></p>
            <p>Phone: <a href={`tel:${emp.phone}`}>{emp.phone}</a></p>
            <p><a href={emp.facebook} target="_blank" rel="noopener noreferrer">Facebook Profile</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}
