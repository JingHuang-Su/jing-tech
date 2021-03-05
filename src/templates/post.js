import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const Post = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p>Posted by {post.frontmatter.author}</p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <Link to="/">&larr; 回到上一頁</Link>
    </Layout>
  );
};

export default Post;
