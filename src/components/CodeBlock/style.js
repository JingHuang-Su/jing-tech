import styled from 'styled-components';

const Pre = styled('pre')`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`;

const Line = styled('div')`
  display: table-row;
`;

const LineNo = styled('span')`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled('span')`
  display: table-cell;
`;

export { Line, LineContent, LineNo, Pre };
