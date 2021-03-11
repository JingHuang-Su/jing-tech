import React from 'react';
import PropTypes from 'prop-types';
import { Eirene, Icon, Wrapper } from './style';

const IconLink = ({ icon, text, link }) => {
  return (
    <Wrapper>
      <Eirene to={link} target="_blank" rel="nofollow noopener noreferrer">
        <Icon>{icon}</Icon>
        <span>{text}</span>
      </Eirene>
    </Wrapper>
  );
};

IconLink.propTypes = {};

export default IconLink;
