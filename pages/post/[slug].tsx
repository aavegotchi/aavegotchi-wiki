import * as React from 'react'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from '../../components/Layout'
import NextStyledFooter from '../../components/NextComponents/NextStyledFooter'
import { Jumbotron, Row, Col } from 'react-bootstrap';
import { themeComplement, themeColor, themeSecondary } from '../../theme';
import NextReusableHead from '../../components/NextComponents/NextReusableHead'


export default function BlogTemplate(props) {

  const CodeBlock = require('../../components/CodeBlock').default

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }
  const markdownBody = props.content
  const frontmatter = props.data


  return (
    <Layout siteTitle={props.siteTitle}>

      <NextReusableHead
        title={frontmatter.title}
        description={frontmatter.description}
        siteName="coderdan's blog"
        url={`https://blog.coderdan.dev/post/${frontmatter.slug}`}
        faviconPath="https://blog.coderdan.dev/favicon.ico"
        image={`https://blog.coderdan.dev${frontmatter.hero_image}`}
      />

      <style jsx>
        {`

        .blog {
          width:75%;
          margin:0 auto;
        }

        .metadata {
          display: flex;
          flex-direction:row;
          margin-top:10px;
          margin-bottom:20px;
        }

        .date {
          background: whitesmoke;
          width: fit-content;
          padding: 10px;
          margin:0;
        }

        .tag {
          background: ${themeComplement};
          width: fit-content;
          padding: 10px;
          margin-left:5px;
        }

        .blogHero {
          width:100%;
          height:400px;
          overflow:hidden;
        }

        a {
          color:${themeColor} !important;
        }

        a:hover {
          color:${themeSecondary};
        }

        @media screen and (max-width:768px) {

          .blogHero {
            height:300px;
          }

          h1 {
            font-size:36px;
          }
        }
        
      `}

      </style>



      <Row>

        <Col style={{ margin: '0 auto' }} xl={8} lg={9} md={10} sm={12} xs={12}>


          <Jumbotron fluid style={{ paddingBottom: 0, background: 'none' }}>
            <div className="blogHero">
              <img
                width="100%"
                src={frontmatter.hero_image}
                alt={`blog_hero_${frontmatter.title}`}
              />
            </div>
          </Jumbotron>


          <div className="blogInfo">
            <h1>{frontmatter.title}</h1>

            <div className="metadata">
              <h3 className="date">{reformatDate(frontmatter.date)}</h3>


              {props.data.tags && props.data.tags.map((tag) => {
                return (
                  <div className="tag" key={tag}>#{tag}</div>
                )
              })

              }
            </div>



          </div>
          <div className="blogBody">
            <ReactMarkdown
              components={{ code: CodeBlock }}>
              {markdownBody}
            </ReactMarkdown>
          </div>
        </Col>

      </Row>

      <NextStyledFooter />

    </Layout >
  );

}

BlogTemplate.getInitialProps = async function (ctx) {
  const { slug } = ctx.query
  const content = await import(`../../posts/${slug}.md`)
  //@ts-ignore
  const config = await import(`../../data/config.json`)
  const data = matter(content.default);
  return {
    siteTitle: config.title,
    ...data
  }
}
