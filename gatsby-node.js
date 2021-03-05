const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  const pageTemplates = path.resolve(`./src/templates/post.js`);

  posts.forEach((post) => {
    actions.createPage({
      path: `/${post.frontmatter.slug}`,
      component: pageTemplates,
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
