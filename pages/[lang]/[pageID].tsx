import { useRouter } from "next/router";
import React from 'react'
import matter from 'gray-matter'
import { Row, Col, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout";
import NextReusableHead from "../../components/NextComponents/NextReusableHead";
import Sidebar from "../../components/Sidebar";
import rehypeRaw from 'rehype-raw'
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


    const flatten = (node: React.ReactNode): string => {
        return React.Children.toArray(node)
            .map((child) => {
                if (typeof child === "string" || typeof child === "number") {
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
                        <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
                            {finalMarkdown}
                        </ReactMarkdown>
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
