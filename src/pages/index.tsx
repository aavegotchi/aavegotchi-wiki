import matter from 'gray-matter'

import Layout from "../components/Layout";
import BlogList from "../components/BlogList";

import Head from 'next/head'
import Button from 'react-bootstrap/Button'

const Index = (props) => {
  return (
    <Layout pathname="/" siteTitle={props.title} siteDescription={props.description}>

      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>

      <div style={{ height: 40 }}>

      </div>

      <h1>dmathieu.org</h1>

      <div>
        Explorations and tutorials of Web3, Dapps, NFTs and more. Written by coderdannn
</div>

      <hr />

      <section>

        <BlogList allBlogs={props.allBlogs} />
      </section>
    </Layout>
  );
};

export default Index;

Index.getInitialProps = async function () {
  const siteConfig = await import(`../data/config.json`)
  //get posts & context from folder
  const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        document,
        slug
      };
    });
    return data;
  })(require['context']("../posts", true, /\.md$/));

  return {
    allBlogs: posts,
    ...siteConfig,
  }
}