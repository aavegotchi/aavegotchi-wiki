import matter from 'gray-matter'

import Layout from "../components/Layout";
import BlogList from "../components/BlogList";
import NextReusableHead from '../components/NextComponents/NextReusableHead';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import ReactMarkdownWithHtml from 'react-markdown/with-html'
import htmlParser from 'react-markdown/plugins/html-parser'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

interface Commit {
    date: string
    name: string

}

const Index = (props) => {

    const router = useRouter()
    console.log('qery:', router.query)

    const CodeBlock = require('../components/CodeBlock').default
    const markdownBody = props.content
    const frontmatter = props.data

    const [latestCommit, setLatestCommit] = useState<Commit>(undefined)

    const parseHtml = htmlParser({
        isValidNode: (node) => node.type !== 'script',
        processingInstructions: [
            /* ... */
        ]
    })

    useEffect(() => {

        getLastCommits()

        console.log('navigator:', navigator.languages)

    }, [])

    async function getLastCommits() {
        const url = "https://api.github.com/repos/aavegotchi/aavegotchi-wiki/commits?path=posts/index.md&page=1&per_page=1"

        const commits = await fetch(url)
        const response = await commits.json()

        if (response.length > 0) {
            setLatestCommit(response[0].commit.author)
        }

    }

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


                        <div className="latestCommit">
                            Last updated on {latestCommit && latestCommit.date} by {latestCommit && latestCommit.name}
                        </div>


                        <hr />

                        <ReactMarkdownWithHtml

                            allowDangerousHtml={true}
                            astPlugins={[parseHtml]}
                            renderers={renderers}
                            children={markdownBody} />
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

    const { lang, pageID } = ctx.query
    const { res, req } = ctx

    //Check if there's a pageID argument. If not, then redirect and try to find a page
    if (!pageID) {

        if (res) {

            let code;

            if (req) {
                const preferredLanguage: string = req.headers['accept-language']
                code = preferredLanguage.slice(0, 2)
            }
            else {
                code = navigator.languages[0].slice(0, 2)

            }

            if (!code) code = "en"

            //Set the correct language for their browser


            //Add on SSH if it's not localhost
            let path
            const host = req.headers.host
            if (host.includes("localhost")) {
                path = `http://${req.headers.host}/${code}/${lang}`
            }
            else {
                path = `https://${req.headers.host}/${code}/${lang}`
            }


            res.writeHead(301, { Location: path });
            res.end()
        }



    }
}