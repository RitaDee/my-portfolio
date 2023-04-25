import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';

export const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };
    
  return (
    <Navbar expand="lg" className={scroll ? 'scroll': ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={""} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'nav-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'nav-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'nav-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="Navbar-tex">
            <div className="social-icon">
                <a href="#">
                    <img src={''} alt=""/>
                </a>
                <a href="#">
                    <img src={''} alt=""/>
                </a>
                <a href="#">
                    <img src={''} alt=""/>
                </a>
            </div>
            <button className="vvd" onClick={() => console.log(connect)}><span/>Let's connect</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
