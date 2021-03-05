import React from 'react';
import Helmet from 'react-helmet';
import Header from '../Header';
import useSiteInfo from '../../hooks/useSiteInfo';

const Layout = ({ children }) => {
  const { title, description } = useSiteInfo();

  return (
    <>
      <Helmet>
        <html lang="zh" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      {children}
    </>
  );
};

export default Layout;
