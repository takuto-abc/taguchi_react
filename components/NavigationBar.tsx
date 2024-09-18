// components/NavigationBar.tsx

import React from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';

const NavigationBar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="light">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: '#f05f40' }}>
          Taguchi Seminar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span className="sr-only">Toggle navigation</span>
          <span style={{ color: '#777' }}>≡</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" navbar>
            <Nav.Link as={Link} href="/menus/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/menus/members">
              Members
            </Nav.Link>
            <Nav.Link as={Link} href="/menus/activities">
              Activities
            </Nav.Link>
            <Nav.Link
              href="https://onedrive.live.com/redir.aspx?cid=de088d657a806648&resid=DE088D657A806648!2804&parId=DE088D657A806648!103&authkey=!AC6uDtWKIJG6Ilg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply
            </Nav.Link>
            <Nav.Link as={Link} href="/menus/question">
              Q &amp; A
            </Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/taguc_chaaan?igshid=azZlcmRrZDgyb2xq&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center" // アイコンとテキストの位置調整
            >
              <FaInstagram /> Instagram
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
