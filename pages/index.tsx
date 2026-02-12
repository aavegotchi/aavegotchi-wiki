import matter from 'gray-matter'

import React from 'react'
import Layout from "../components/Layout";
import NextReusableHead from '../components/NextComponents/NextReusableHead';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Commit {
  date: string
  name: string

}

const Index = (props) => {

  const CodeBlock = require('../components/CodeBlock').default
  const markdownBody = props.content
  const frontmatter = props.data

  const [latestCommit, setLatestCommit] = useState<Commit>(undefined)

  useEffect(() => {
    getLastCommits()
  }, [])

  async function getLastCommits() {
    const url = "https://api.github.com/repos/aavegotchi/aavegotchi-wiki/commits?path=posts/index.md&page=1&per_page=1"

    const commits = await fetch(url)
    const response = await commits.json()

    if (response.length > 0) {
      setLatestCommit(response[0].commit.author)
    }

  }

  const flatten = (node: React.ReactNode): string => {
    return React.Children.toArray(node)
      .map((child) => {
        if (typeof child === 'string' || typeof child === 'number') {
          return String(child)
        }
        if (React.isValidElement<{ children?: React.ReactNode }>(child) && child.props?.children) {
          return flatten(child.props.children)
        }
        return ""
      })
      .join("")
  };

  const createHeadingRenderer = (tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => (props) => {
    const text = flatten(props.children)
    const slug = text.toLowerCase().replace(/\W/g, '-');
    return React.createElement(tag, { id: slug }, props.children);
  };

  const components = {
    a: ({ children, href, ...props }) => {
      if (!href) return <>{children}</>
      if (href.startsWith("/")) {
        return <Link href={href}>{children}</Link>
      }
      return (
        <a href={href} target="_blank" rel="noreferrer" {...props}>
          {children}
        </a>
      )
    },
    code: CodeBlock,
    h1: createHeadingRenderer("h1"),
    h2: createHeadingRenderer("h2"),
    h3: createHeadingRenderer("h3"),
    h4: createHeadingRenderer("h4"),
    h5: createHeadingRenderer("h5"),
    h6: createHeadingRenderer("h6"),
  };

  return (
    <Layout pathname="/" siteTitle={props.title} siteDescription={props.description}>

      <NextReusableHead
        title="Aavegotchi Wiki"
        description="Official Aavegotchi Wiki: GHST, tokenomics, Gotchiverse, Rarity Farming, Alchemica, the Forge, contracts, tutorials, and more."
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


            <div className="latestCommit">
              Last updated on {latestCommit && latestCommit.date} by {latestCommit && latestCommit.name}
            </div>


            <hr />

            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
              {markdownBody}
            </ReactMarkdown>
          </div>

        </Col>


      </Row>

      <style jsx>
        {`
        
        `}
      </style>

    </Layout >
  );
};

export default Index;

Index.getInitialProps = async function (ctx) {
  const slug = "index"
  const content = await import(`../posts/en/${slug}.md`)
  //@ts-ignore
  const config = await import(`../data/config.json`)
  const data = matter(content.default);
  return {
    siteTitle: config.title,
    ...data
  }

}
