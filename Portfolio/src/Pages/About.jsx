import React from "react";
import CppLogo from "../Assets/Images/cpp-logo.png";
import JavaLogo from "../Assets/Images/java-logo.png";
import PythonLogo from "../Assets/Images/python-logo.png";
import MySQLLogo from "../Assets/Images/mysql-logo.png";
import ReactLogo from "../Assets/Images/react-logo.png";
import SpringLogo from "../Assets/Images/spring.png";

const personalProfile = {
  title: "Personal Profile",
  content: "Highly motivated and results-oriented professional, with a deep passion for data science, machine learning, and web development. With a strong foundation in these disciplines, I have honed my skills through hands-on projects, hackathons, and real-world experience. My commitment to innovation drives me to bridge the gap between data and user experiences, whether by developing interactive data visualizations or crafting machine learning-powered web applications. My goal is to apply my expertise to create forward-thinking solutions that make a positive impact.",
};

const programmingSkills = [
  { title: "C++", logo: CppLogo },
  { title: "Java", logo: JavaLogo },
  { title: "Python", logo: PythonLogo },
  { title: "ReactJS", logo: ReactLogo },
  { title: "Spring Boot", logo: SpringLogo },
  { title: "MySQL", logo: MySQLLogo },
];

const education = [
  {
    title: "Green Garden Matric Higher Secondary School",
    course: "Higher Secondary course",
    details: "Marks: 532/600",
    duration: "2019-2021",
  },
  {
    title: "Sri Krishna College of Technology",
    course: "Bachelor of Engineering - Computer Science and Engineering",
    details: "CGPA: 7.9",
    duration: "2021-2025",
  },
];

export default function AboutPage() {
  return (
    <div className="container mt-5">
        <h5>About Me</h5>
      {/* Personal Profile - Card */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{personalProfile.title}</h5>
              <p className="card-text">{personalProfile.content}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programming Skills - Card */}
      <div className="row mt-3 mb-2">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Programming Skills</h5>
              <div className="row d-flex align-items-center justify-content-center">
                {programmingSkills.map((skill, index) => (
                  <div key={index} className="col-md-3 m-2">
                    <div className="card">
                      <div className="card-body">
                        <img src={skill.logo} alt={`${skill.title} Logo`} className="logo" />
                        <h6 className="card-title">{skill.title}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education - Cards */}
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Education</h5>
              {education.map((edu, index) => (
                <div key={index} className="row mt-3 d-flex align-items-center justify-content-center">
                  <div className="col-md-10">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text">
                          <strong>{edu.duration}:</strong> {edu.title}<br />
                          <em>{edu.course}</em><br />
                          <em>{edu.details}</em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
