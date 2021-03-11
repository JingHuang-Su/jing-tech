import React from 'react';
import usePosts from '../hooks/usePosts';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { Title, Info, SubTitle } from '../styles/pages/appStyle';

const App = () => {
  const posts = usePosts();
  return (
    <Layout>
      <div style={{ marginTop: '3rem' }}>
        {posts.map((post) => (
          <Link to={post.slug}>
            <Title>{post.title}</Title>
            <Info>
              {post.author} {post.slug}
            </Info>
            <SubTitle>{post.excerpt}</SubTitle>
          </Link>
        ))}
      </div>

      <Link to="/about">Go to About</Link>
    </Layout>
  );
};

export default App;
