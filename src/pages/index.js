import React from 'react';
import usePosts from '../hooks/usePosts';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const App = () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Hello World!</h1>
      {posts.map((post) => (
        <>
          <pre>
            <code>{JSON.stringify(post, null, 2)}</code>
          </pre>
          <Link to={post.slug}>{post.slug}</Link>
        </>
      ))}
      <Link to="/about">Go to About</Link>
    </Layout>
  );
};

export default App;
