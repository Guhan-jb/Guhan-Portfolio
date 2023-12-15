import React, { useEffect, useRef } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import HomePage from '../Pages/Home';
import AboutPage from '../Pages/About';
import ProjectPage from '../Pages/Projects';
import ExperiencesPage from '../Pages/Experiences';
import ContactPage from '../Pages/Contact';
import AchievementsPage from "../Pages/achievements";
import { Outlet } from "react-router-dom";
import Particle from "./Particles";

const SECTION_IDS = ["home", "about", "projects", "achievements", "experiences", "contact"];

export default function MyNavBar() {
  const sectionRefs = useRef(SECTION_IDS.map((id) => ({ id, ref: React.createRef() })));
  const [showGoToTop, setShowGoToTop] = React.useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    setShowGoToTop(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="home" spy={true} smooth={true} offset={-70} duration={500}>
            Guhan-Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ms-auto">
              {SECTION_IDS.map((sectionId, index) => (
                <div className="nav-item" key={sectionId}>
                  <Nav.Link
                    onClick={() => scrollTo(sectionId)}
                  >
                    {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                  </Nav.Link>
                </div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ position: 'relative', zIndex: '0' }}>
  <Particle />
</div>
{/* Sections */}
<div style={{ position: 'relative', zIndex: '1' }}>
  <section id="home">
    <HomePage />
  </section>
  <section id="about" ref={sectionRefs.current[1].ref} style={{minHeight:'100vh'}}>
    <AboutPage />
  </section>
  <section id="projects" ref={sectionRefs.current[2].ref}>
    <ProjectPage />
  </section>
  <section id="achievements" ref={sectionRefs.current[3].ref}>
    <AchievementsPage />
  </section>
  <section id="experiences" ref={sectionRefs.current[4].ref}>
    <ExperiencesPage />
  </section>
  <section id="contact" ref={sectionRefs.current[5].ref}>
    <ContactPage />
  </section>
  {/* Go to Top Button */}
      {showGoToTop && (
        <div className="go-to-top" onClick={() => scrollTo("home")}>
          <span>&#8593;</span>
        </div>
      )}
</div>

  <Outlet />
    </>
  );
}
