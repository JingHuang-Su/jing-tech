import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title, SubTitle, Info } from './style';

const Header = ({ title, subTitle, info }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      <Info>{info}</Info>
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
