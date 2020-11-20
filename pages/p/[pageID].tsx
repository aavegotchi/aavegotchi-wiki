import { useRouter } from "next/dist/client/router";
import matter from 'gray-matter'
import { Row, Col, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout";
import NextReusableHead from "../../components/NextComponents/NextReusableHead";
import Sidebar from "../../components/Sidebar";
import { capitalize } from "../../functions";

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
                        <ReactMarkdown
                            renderers={{ code: CodeBlock }}
                            source={markdownBody} />
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
