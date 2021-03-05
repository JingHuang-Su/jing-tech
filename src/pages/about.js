import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const About = () => (
  <Layout>
    <h1>About Me!</h1>
    <p>Hi, 大家好，我是 Jing，是一位前端工程師</p>
    <Link to="/">Back to Home</Link>
  </Layout>
);

export default About;
