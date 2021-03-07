import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import { Article } from './style';
import Header from '../components/Header';

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
      <Header
        title={post.frontmatter.title}
        info={`Posted by ${post.frontmatter.author}`}
      />
      <Article>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Article>
      <Link to="/">&larr; 回到上一頁</Link>
    </Layout>
  );
};

export default Post;
