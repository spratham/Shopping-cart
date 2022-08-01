import React from "react";
import {
  Dropdown,
  Container,
  FormControl,
  Nav,
  Navbar,
  Badge,
} from "react-bootstrap";
import {FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar bg="dark " variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="Search here"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
        <Dropdown  style={{ width: 150 }}>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px"/>
                <Badge style={{ marginLeft: 5 }}>{10}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 250 }}>
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
