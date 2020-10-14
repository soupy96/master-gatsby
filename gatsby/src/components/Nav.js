import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  background: green;
`;

const UlStyles = styled.ul`
  border 1px solid yellow;
`;

export default function Nav() {
  return (
    <NavStyles>
      <UlStyles>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
      </UlStyles>
    </NavStyles>
  );
}
