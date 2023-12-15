import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import CppLogo from "../Assets/Images/cpp-logo.png";
import JavaLogo from "../Assets/Images/java-logo.png";
import PythonLogo from "../Assets/Images/python-logo.png";
import MySQLLogo from "../Assets/Images/mysql-logo.png";
import ReactLogo from "../Assets/Images/react-logo.png";
import SpringLogo from "../Assets/Images/spring.png";

const skillLevels = [
  { title: "Beginner", level: 20 },
  { title: "Intermediate", level: 50 },
  { title: "Advanced", level: 80 },
  { title: "Expert", level: 100 },
];

const personalProfile = {
  title: "Personal Profile",
  content: "Highly motivated and results-oriented professional, with a deep passion for data science, machine learning, and web development. With a strong foundation in these disciplines, I have honed my skills through hands-on projects, hackathons, and real-world experience. My commitment to innovation drives me to bridge the gap between data and user experiences, whether by developing interactive data visualizations or crafting machine learning-powered web applications. My goal is to apply my expertise to create forward-thinking solutions that make a positive impact.",
};

const programmingSkills = [
  { title: "C++", logo: CppLogo, level: 80 },
  { title: "Java", logo: JavaLogo, level: 80 },
  { title: "Python", logo: PythonLogo, level: 70 },
  { title: "ReactJS", logo: ReactLogo, level: 90 },
  { title: "Spring Boot", logo: SpringLogo, level:80 },
  { title: "MySQL", logo: MySQLLogo, level: 60 },
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

const AboutPage = () => {
  const controls = useAnimation();
  const [showSkills, setShowSkills] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition > window.innerHeight) {
      setShowSkills(true);
    } else {
      setShowSkills(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <motion.div
              key={index}
              className="col-md-3 m-2"
              animate={showSkills ? controls : {}}
            >
              <div className="card d-flex align-items-center justify-content-center">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <motion.img
                      src={skill.logo}
                      alt={`${skill.title} Logo`}
                      className="logo"
                      animate={showSkills ? { x: -50 } : {}}
                    />
                    <div className="progress" style={{ width: "50px" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: showSkills ? `${skill.level}%` : 0 }}
                        transition={{ duration: 1 }}
                        className="rogress-bar progress-bar-striped progress-bar-animated bg-info"
                      />
                    </div>
                  </div>
                
                </div>
              </div>
            </motion.div>
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
};

export default AboutPage;
