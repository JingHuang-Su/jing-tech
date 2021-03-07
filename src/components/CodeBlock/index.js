import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Line, LineContent, LineNo, Pre } from './style';
import vsDark from 'prism-react-renderer/themes/vsDark';

// This is a container component to render our demos and their code
function CodeBlock(props) {
  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children}
      theme={vsDark}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
}

export default CodeBlock;
