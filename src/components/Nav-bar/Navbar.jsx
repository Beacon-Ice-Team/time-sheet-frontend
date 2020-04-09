import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

export const Navigationbar = () => (
    <Navbar expand="lg">
      {/* <Navbar.Brand href="/">Tutorial</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Summary</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/timesheet">TimeSheet</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)