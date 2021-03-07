import React, { useState, useEffect } from 'react';
import {
  Nav,
  Logo,
  Menu,
  Item,
  Anchor,
  NavIcon,
  Line,
  Overlay,
  OverlayMenu,
} from './style';

const NavBar = () => {
  const [toggle, toggleNav] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = null;
    }
  }, [toggle]);
  return (
    <>
      <Nav>
        <Logo>
          <Anchor to="/">Jing Tech</Anchor>
        </Logo>
        <Menu>
          <Item>
            <Anchor to="/">Article</Anchor>
          </Item>
          <Item>
            <Anchor to="/contact">Contact Me</Anchor>
          </Item>
          <Item>
            <Anchor to="/about">About</Anchor>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Anchor to="/">Article</Anchor>
          </Item>
          <Item>
            <Anchor to="/contact">Contact Me</Anchor>
          </Item>
          <Item>
            <Anchor to="/about">About</Anchor>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};
export default NavBar;
