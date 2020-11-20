import matter from 'gray-matter'

import Layout from "../components/Layout";
import BlogList from "../components/BlogList";
import NextReusableHead from '../components/NextComponents/NextReusableHead';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import ReactMarkdownWithHtml from 'react-markdown/with-html'
import htmlParser from 'react-markdown/plugins/html-parser'
import Link from 'next/link';

const Index = (props) => {

  const CodeBlock = require('../components/CodeBlock').default
  const markdownBody = props.content
  const frontmatter = props.data

  const parseHtml = htmlParser({
    isValidNode: (node) => node.type !== 'script',
    processingInstructions: [
      /* ... */
    ]
  })

  const renderers = {
    //This custom renderer changes how images are rendered
    //we use it to constrain the max width of an image to its container

    link: ({ children, href }) => {
      return <Link href={href}><a target="_blank">{children}</a></Link>
    },
    code: CodeBlock
  };

  return (
    <Layout pathname="/" siteTitle={props.title} siteDescription={props.description}>

      <NextReusableHead
        title="Aavegotchi Wiki"
        description="The Official Wiki of Aavegotchi"
        siteName="Aavegotchi Wiki"
        url="https://wiki.aavegotchi.com"
        faviconPath="/favicon.ico"
      />




      <Row style={{ padding: 0, margin: 0 }}>
        <Col style={{ padding: 0, margin: 0 }} xl={2} lg={2} md={2} sm={12} xs={12}>
          <Sidebar />
        </Col>

        <Col>

          <div className="blogBody">

            <h1>{frontmatter.title}</h1>

            <hr />

            <ReactMarkdownWithHtml

              allowDangerousHtml={true}
              astPlugins={[parseHtml]}
              renderers={renderers}
              children={markdownBody} />
          </div>

        </Col>


      </Row>

    </Layout >
  );
};

export default Index;

/*
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
*/


Index.getInitialProps = async function (ctx) {
  // const { slug } = ctx.query
  const slug = "index"
  const content = await import(`../posts/${slug}.md`)
  //@ts-ignore
  const config = await import(`../data/config.json`)
  const data = matter(content.default);
  return {
    siteTitle: config.title,
    ...data
  }
}