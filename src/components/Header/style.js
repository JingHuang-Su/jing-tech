import styled from 'styled-components';

const Wrapper = styled('header')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #4c4e55;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
`;

const Title = styled('h1')`
  color: #4c4e55;
  line-height: 1.1;
  font-weight: 600;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 2.488rem;
`;

const SubTitle = styled('div')`
  color: #4c4e55;
  font-weight: 400;
  clear: both;
  font-size: 1.25rem;
  line-height: 1.5;
  margin: 0.5rem 0 1.5rem;
`;

const Info = styled('div')`
  color: #4c4e55;
  font-weight: 400;
  line-height: 1.2;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;

export { Wrapper, Title, SubTitle, Info };
