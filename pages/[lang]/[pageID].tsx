import { useRouter } from "next/dist/client/router";
import React from 'react'
import matter from 'gray-matter'
import { Row, Col, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout";
import NextReusableHead from "../../components/NextComponents/NextReusableHead";
import Sidebar from "../../components/Sidebar";
import ReactMarkdownWithHtml from 'react-markdown/with-html'
import htmlParser from 'react-markdown/plugins/html-parser'
import Link from "next/link";
import { useEffect, useState } from "react";
import { addTablesToMarkdown } from "../../functions";

interface Commit {
    date: string
    name: string

}

const Page = (props) => {

    const router = useRouter()

    const [latestCommit, setLatestCommit] = useState<Commit>(undefined)

    const CodeBlock = require('../../components/CodeBlock').default

    const markdownBody = props.content
    const frontmatter = props.data

    //Override the content and add tables
    const finalMarkdown = addTablesToMarkdown(markdownBody, router.query.pageID)


    const flatten = (text: string, child) => {
        return typeof child === 'string'
            ? text + child
            : React.Children.toArray(child.props.children).reduce(flatten, text);
    };

    /**
     * HeadingRenderer is a custom renderer
     * It parses the heading and attaches an id to it to be used as an anchor
     */
    const HeadingRenderer = props => {
        const children = React.Children.toArray(props.children);
        const text = children.reduce(flatten, '');
        const slug = text.toLowerCase().replace(/\W/g, '-');
        return React.createElement('h' + props.level, { id: slug }, props.children);
    };

    const renderers = {
        //This custom renderer changes how images are rendered
        //we use it to constrain the max width of an image to its container

        link: ({ children, href }) => {
            return <Link href={href}><a target="_blank">{children}</a></Link>
        },
        code: CodeBlock,
        heading: HeadingRenderer
    };

    const parseHtml = htmlParser({
        isValidNode: (node) => node.type !== 'script',
        processingInstructions: [
            /* ... */
        ]
    })


    useEffect(() => {

        getLastCommits()

    }, [router.query.pageID])

    useEffect(() => {
        const lang = Array.isArray(router.query.lang) ? router.query.lang[0] : router.query.lang
        const pageID = Array.isArray(router.query.pageID) ? router.query.pageID[0] : router.query.pageID
        if (lang && lang !== "en" && pageID) {
            router.replace(`/en/${pageID}`)
        }
    }, [router.query.lang, router.query.pageID])

    async function getLastCommits() {
        const url = `https://api.github.com/repos/aavegotchi/aavegotchi-wiki/commits?path=posts/en/${router.query.pageID}.md&page=1&per_page=1`

        const commits = await fetch(url)
        const response = await commits.json()

        console.log('response:', response)

        if (response.length > 0) {
            setLatestCommit(response[0].commit.author)
        }

    }


    return (
        <Layout pathname="/" siteTitle={props.title} siteDescription={props.description}>

            <NextReusableHead
                title={`${frontmatter.title} -- Aavegotchi Wiki`}
                description={frontmatter.description}
                siteName="Aavegotchi Wiki"
                url="https://wiki.aavegotchi.com"
                faviconPath="/favicon.ico"
                image={`https://wiki.aavegotchi.com/${frontmatter.image}`}
            />




            <Row style={{ padding: 0, margin: 0 }}>
                <Col style={{ padding: 0, margin: 0 }} xl={2} lg={2} md={2} sm={12} xs={12}>
                    <Sidebar />
                </Col>

                <Col>

                    <div className="blogBody">


                        <h1 style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                            {frontmatter.icon && <img src={frontmatter.icon} className="headerIcon" />}

                            {frontmatter.title}

                        </h1>


                        <div className="latestCommit">
                            Last updated on {latestCommit && latestCommit.date} by {latestCommit && latestCommit.name}
                        </div>



                        {frontmatter.contributors &&
                            <div className="contributorContainer">
                                Contributors
                                {frontmatter.contributors.map((name) => {
                                return <a target="_blank" href={`https://github.com/${name}`}>
                                    <img className="contributor" src={`/contributors/${name}.png`} />
                                </a>
                            })}
                            </div>
                        }

                        { router.query.lang === 'en' &&
                            <div style={{marginTop: '1rem'}}>
                                <a href={`https://github.com/aavegotchi/aavegotchi-wiki/edit/main/posts/${router.query.lang}/${router.query.pageID}.md`}>
                                    ✏️ Edit this page
                                </a>
                            </div>
                        }

                        <hr />
                        <ReactMarkdownWithHtml

                            allowDangerousHtml={true}
                            astPlugins={[parseHtml]}
                            renderers={renderers}
                            children={finalMarkdown} />
                    </div>

                </Col>
            </Row>


            <style jsx>
                {`
                            .contributorContainer {
                                font-size:10px;
                                text-transform:uppercase;
                                border:solid 1px rgba(0,0,0,0.3);
                                width:fit-content;
                                padding:4px 10px 4px 10px;
                                display:flex;
                                flex-direction:row;
                                align-items:center;
                                border-radius:30px;
                            }
                            
                            .contributor {
                                margin-left:10px;
                                width:30px;
                                height:30px;
                                border-radius:100%;
                            }
                        `}
            </style>

        </Layout>
    );
};

export default Page;

Page.getInitialProps = async function (ctx) {
    const langQuery = Array.isArray(ctx.query.lang) ? ctx.query.lang[0] : ctx.query.lang
    const pageQuery = Array.isArray(ctx.query.pageID) ? ctx.query.pageID[0] : ctx.query.pageID
    const lang = typeof langQuery === "string" ? langQuery.toLowerCase() : ""
    const pageID = typeof pageQuery === "string" ? pageQuery : "error"

    if (lang !== "en" && ctx.res) {
        ctx.res.writeHead(301, { Location: `/en/${pageID}` })
        ctx.res.end()
        return {}
    }

    try {
        //@ts-ignore
        const content = await import(`../../posts/en/${pageID}.md`)
        //@ts-ignore
        const config = await import(`../../data/config.json`)
        const data = matter(content.default);
        return {
            siteTitle: config.title,
            ...data
        }
    } catch (error) {
        //@ts-ignore
        const content = await import(`../../posts/en/error.md`)
        //@ts-ignore
        const config = await import(`../../data/config.json`)
        const data = matter(content.default);
        return {
            siteTitle: config.title,
            ...data
        }
    }

}
