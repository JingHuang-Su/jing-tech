import styled from 'styled-components';
import { Link } from 'gatsby';

const Eirene = styled(Link)`
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  position: relative;
  white-space: nowrap;
  font-family: europa, sans-serif;
  font-weight: bold;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  span {
    transform: translate3d(0, -4px, 0);
    transition: transform 0.2s 0.05s cubic-bezier(0.2, 0.57, 0.67, 1.53);
  }

  ::before,
  ::after {
    position: absolute;
    max-width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  ::before {
    content: '';
    width: 100%;
    display: inline-block;
    height: 7px;
    border-radius: 20px;
    transform: scale3d(1, 1, 1);
    transition: transform 0.2s, opacity 0.2s;
    transition-timing-function: cubic-bezier(0.2, 0.57, 0.67, 1.53);
  }

  :hover {
    outline: none;
  }

  :focus {
    outline: none;
    background: lightgrey;
  }

  :focus:not(:focus-visible) {
    background: transparent;
  }

  :focus-visible {
    outline: 2px solid red;
    background: transparent;
  }

  :hover::before {
    transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
    transition-duration: 0.4s;
    opacity: 1;
    transform: scale3d(1.2, 0.1, 1);
  }

  :hover span {
    transform: translate3d(0, 0, 0);
    transition-timing-function: cubic-bezier(0.8, 0, 0.1, 1);
    transition-duration: 0.4s;
    transition-delay: 0s;
  }
`;

const Icon = styled('span')`
  padding-right: 5px;
`;

const Wrapper = styled('span')`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export { Eirene, Icon, Wrapper };
