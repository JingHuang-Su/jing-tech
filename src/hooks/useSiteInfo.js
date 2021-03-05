import { graphql, useStaticQuery } from 'gatsby';

const useSiteInfo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteInfo;
