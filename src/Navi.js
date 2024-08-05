import React, { useState } from 'react';
import './styles.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function Navi({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const toggleDropdown = (e) => {
    e.preventDefault(); 
    setDropdownOpen(prevState => !prevState); 
  };

  return (
    <div>
      <Navbar className="navbar-custom">
        <NavbarBrand href="/">Product App</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar isOpen={dropdownOpen}>
              <DropdownToggle nav caret onClick={toggleDropdown}>
                Cart
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-custom" right>
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <DropdownItem className="dropdown-item-custom" key={index}>
                      {item.product.productName} - quantity: {item.quantity}
                    </DropdownItem>
                  ))
                ) : (
                  <DropdownItem className="dropdown-item-custom">No products in the basket</DropdownItem>
                )}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
