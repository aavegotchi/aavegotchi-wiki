import matter from 'gray-matter'

import Layout from "../components/Layout";
import BlogList from "../components/BlogList";
import NextReusableHead from '../components/NextComponents/NextReusableHead';

const Index = (props) => {

  console.log('props:', props)

  return (
    <Layout pathname="/" siteTitle={props.title} siteDescription={props.description}>

      <NextReusableHead
        title="coderdan's blog"
        description="Level up your Web3 development skills with tutorials by @coderdannn"
        siteName="coderdan's blog"
        url="blog.coderdan.dev"
        faviconPath="/favicon.ico"
      />

      <div style={{ height: 20 }}>

      </div>


      <h2 style={{ letterSpacing: '1.2px', textTransform: 'uppercase', fontSize: '18px' }}>
        📈Level up your Web3 development skills with tutorials by @coderdannn
</h2>

      <hr />

      <section>

        <BlogList allBlogs={props.allBlogs} />
      </section>
    </Layout>
  );
};

export default Index;

Index.getInitialProps = async function () {
  //@ts-ignore
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