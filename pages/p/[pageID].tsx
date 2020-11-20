import { useRouter } from "next/dist/client/router";
import matter from 'gray-matter'
import { Row, Col, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout";
import NextReusableHead from "../../components/NextComponents/NextReusableHead";
import Sidebar from "../../components/Sidebar";
import { capitalize } from "../../functions";
import ReactMarkdownWithHtml from 'react-markdown/with-html'
import htmlParser from 'react-markdown/plugins/html-parser'
import Link from "next/link";

const Page = (props) => {

    const router = useRouter()

    console.log('router:', router)

    const CodeBlock = require('../../components/CodeBlock').default

    function reformatDate(fullDate) {
        const date = new Date(fullDate)
        return date.toDateString().slice(4);
    }
    const markdownBody = props.content
    const frontmatter = props.data

    const renderers = {
        //This custom renderer changes how images are rendered
        //we use it to constrain the max width of an image to its container

        link: ({ children, href }) => {
            return <Link href={href}><a target="_blank">{children}</a></Link>
        },
        code: CodeBlock
    };

    const parseHtml = htmlParser({
        isValidNode: (node) => node.type !== 'script',
        processingInstructions: [
            /* ... */
        ]
    })



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


        </Layout>
    );
};

export default Page;

Page.getInitialProps = async function (ctx) {
    const { pageID } = ctx.query
    const content = await import(`../../posts/${pageID}.md`)
    //@ts-ignore
    const config = await import(`../../data/config.json`)
    const data = matter(content.default);
    return {
        siteTitle: config.title,
        ...data
    }
}
