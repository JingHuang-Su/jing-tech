import styled from 'styled-components';

const Title = styled('div')`
  font-weight: 900;
  text-rendering: optimizeLegibility;
  line-height: 1.1;
  font-size: 1.75rem;
  box-sizing: inherit;
  background-color: transparent;
  text-decoration: none;
  box-shadow: none;
  color: rgb(210, 54, 105);
  margin-bottom: 5px;
`;

const Info = styled('small')`
  font-weight: 400;
  box-sizing: inherit;
  font-size: 80%;
  color: #222222;
  margin-bottom: 3px;
`;

const SubTitle = styled('div')`
  font-weight: 400;
  box-sizing: inherit;
  margin-bottom: 1.75rem;
  max-width: 50vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Title, Info, SubTitle };
