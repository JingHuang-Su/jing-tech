import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Helmet from 'react-helmet';
import NavBar from '../NavBar';
import useSiteInfo from '../../hooks/useSiteInfo';
import { Wrapper, MDXComponent } from './style';

const Layout = ({ children }) => {
  const { title, description } = useSiteInfo();

  return (
    <>
      <Helmet>
        <html lang="zh" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <NavBar />
      <MDXProvider components={MDXComponent}>
        <Wrapper>{children}</Wrapper>
      </MDXProvider>
    </>
  );
};

export default Layout;
