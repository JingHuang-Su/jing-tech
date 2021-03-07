import styled from 'styled-components';
import CodeBlock from '../CodeBlock';

const typography = {
  h1: '36px',
  h2: '32px',
  h3: '28px',
  h4: '24px',
  h5: '20px',
  h6: '16px',
};

const Head = (size) => styled(size)`
  margin: 0;
  color: #444;
  margin-bottom: 10px;
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 1.5em;
  font-size: ${typography[size]};
`;

const Paragraph = styled('p')`
  margin: 0;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 300;
  font-size: 16pt;
  letter-spacing: 1.1px;
  line-height: 24pt;
  padding-bottom: 5px;
  margin-bottom: 1em;

  > code {
    letter-spacing: 1;
    background: #ffeff0;
    word-wrap: break-word;
    box-decoration-break: clone;
    font-size: 16pt;
    padding: 0.1rem 0.3rem 0.2rem;
    border-radius: 0.2rem;
  }
`;

const AnchorTag = styled('a')`
  letter-spacing: 1.1px;
  margin: 0;
  transition: all 0.2s ease;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: underline;

  :hover {
    opacity: 0.85;
  }
`;

const Strong = styled('strong')`
  font-weight: 600;
`;

const Delete = styled('del')`
  opacity: 0.9;
`;

const Blockquote = styled('blockquote')`
  padding: 0;
  quotes: none;
  font-weight: 300;
  font-size: 16pt;
  letter-spacing: 1.1px;
  line-height: 24pt;
  padding-bottom: 5px;
  position: relative;
  color: #777;
  font-style: italic;
  margin: 0 0 20px;
  padding-left: 50px;

  :before {
    content: '\f10d';
    color: #ccc;
    font-size: 32px;
    font-family: 'Font Awesome 5 Free';
    font-style: normal;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
  }

  p {
    margin-bottom: 0.75em;
  }
`;

const OL = styled('ol')`
  color: #666;
  padding: 0;
  border: 0;
  font-weight: 500;
  margin: 0 0 15px 30px;

  p {
    margin-bottom: 10px;
  }

  li {
    padding: 0;
    border: 0;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 400;
    font-size: 16pt;
    letter-spacing: 1.1px;
    line-height: 24pt;
    padding-bottom: 10px;
    margin: 0;
    list-style: decimal;

    li {
      list-style: disc;
      font-weight: 300;
    }
  }
`;

const UL = styled('ul')`
  color: #666;
  margin: 0 0 15px 30px;
  font-weight: 500;

  p {
    font-weight: 400;
    margin-bottom: 0px;
  }

  li {
    color: rgba(0, 0, 0, 0.8);
    font-style: normal;
    font-weight: 400;
    font-size: 16pt;
    letter-spacing: 1.1px;
    line-height: 24pt;
    padding-bottom: 10px;
    margin: 0;
    list-style: disc;

    li {
      font-weight: 300;
      list-style: lower-alpha;
    }
  }
`;

const Wrapper = styled('main')`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 960px;
`;

const Hr = styled('hr')`
  color: #666;
  border: 0;
  background: #eee;
  border-bottom: 2px solid #eee;
  height: 1px;
  margin: 30px 0;
`;

const Em = styled('em')`
  font-style: italic;
`;

const MDXComponent = {
  h1: Head('h1'),
  h2: Head('h2'),
  h3: Head('h3'),
  h4: Head('h4'),
  h5: Head('h5'),
  h6: Head('h6'),
  p: Paragraph,
  a: AnchorTag,
  strong: Strong,
  blockquote: Blockquote,
  ol: OL,
  em: Em,
  hr: Hr,
  ul: UL,
  del: Delete,
  pre: CodeBlock,
};

export { Wrapper, MDXComponent };
