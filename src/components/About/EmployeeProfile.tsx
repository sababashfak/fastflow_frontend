

import "./EmployeeProfile.css";
import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";

const employees = [
  {
    name: "Bashir Uddin",
    post: "CEO",
    email: "john@example.com",
    phone: "+1 234 567 890",
    facebook: "https://facebook.com/john.doe",
    image: "/images/employees/Bashir.jpg",
  },
  {
    name: "Mushtaque Rahman",
    post: "Director Admin",
    email: "jane@example.com",
    phone: "+1 987 654 321",
    facebook: "https://facebook.com/jane.smith",
    image: "/images/employees/jane.jpg",
  },
  {
    name: "Shamsun Nahar",
    post: "Marketing Executive",
    email: "mike@example.com",
    phone: "+1 555 123 456",
    facebook: "https://facebook.com/mike.johnson",
    image: "/images/employees/mike.jpg",
  },
  {
    name: "Bashir Uddin",
    post: "Senior Plumbing & Gas Engineer (CEO)",
    email: "emily@example.com",
    phone: "+1 444 987 654",
    facebook: "https://facebook.com/emily.davis",
    image: "/images/employees/Bashir.jpg",
  },
  {
    name: "Md Atik ullah",
    post: "Plumbing Assistant",
    email: "chris@example.com",
    phone: "+1 333 765 432",
    facebook: "https://facebook.com/chris.wilson",
    image: "/images/employees/Mr Atiq.jpg",
  },
  {
    name: "Irfan Pathel",
    post: "Senior Electrical Engineer",
    email: "chris@example.com",
    phone: "+1 333 765 432",
    facebook: "https://facebook.com/chris.wilson",
    image: "/images/employees/chris.jpg",
  },
  {
    name: "Md Touhidul Islam Kousar",
    post: "Electrical Assistant",
    email: "chris@example.com",
    phone: "+1 333 765 432",
    facebook: "https://facebook.com/chris.wilson",
    image: "/images/employees/Mr Touhid.jpg",
  },
];

export default function EmployeeProfile() {
  return (
    <section className="py-30 sm:py-30 ">
      <div className="bg-gray-100 ">
        <div>
          <h2 className="text mb-3 text-3xl font-bold text-secondary lg:mb-5 lg:text-balance lg:text-4xl lg:leading-snug text-center">
                Our Team
          </h2>
        </div>
         <div className="employee-grid">
          {employees.map((emp, index) => (
            <div key={index} className="employee-card">
              <img src={emp.image} alt={emp.name} className="employee-photo" />
              <h3 className="employee-name">{emp.name}</h3>
              <p className="employee-post">{emp.post}</p>
              <div className="employee-icons">
                <a href={`tel:${emp.phone}`} title="Call">
                  <FaPhoneAlt />
                </a>
                <a href={`mailto:${emp.email}`} title="Email">
                  <FaEnvelope />
                </a>
                <a href={emp.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
                  <FaFacebook />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>
          <br></br>
        </p>
      </div>
    </section>
  );
}
