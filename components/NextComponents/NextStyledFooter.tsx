import React from "react";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Link from "next/link";
import { themeColor } from '../../theme'
import { TwitterSVG, DiscordSVG, RedditSVG } from '../icons'

interface FooterProps {

}

const Footer = (props: FooterProps) => {
    return (
        <div style={{ marginTop: 170, marginBottom: 20 }}>


            <Container>

                <style jsx>
                    {`

                    h3 {
                        font-weight:900;
                        letter-spacing:1.2px;
                        text-transform:uppercase;
                        font-size:18px;
                        line-height:22px;
                    }
                    h4 {
                        font-weight:900;
                        letter-spacing:1.2px;
                        text-transform:uppercase;
                        font-size:14px;
                        line-height:22px;

                    }

                    p {
                        font-weight:300;
                    }

                    a {
                        color:black;
                        letter-spacing:1.2px;
                        text-transform:uppercase;
                        transition:color:0.2s;
                    }

                    a:hover {
                        color:${themeColor};
                    }

                    .social-icon {
                        width:25px;
                        height:25px;
                        margin-right:8px;
                    }

                    svg {
                        width:25px;
                        height:25px;
                    }
                `}
                </style>


                <Row>

                    <Col style={{ margin: '0 auto', marginBottom: 20, }} xl={12} lg={12} md={12} sm={12} xs={12}>

                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>

                            <h3 style={{ margin: 0 }}>© coderdan 2020</h3>

                            <a style={{ marginLeft: 15 }} className="social-icon" target="_blank" href="https://www.twitter.com/bullionix_io">{TwitterSVG(25, "black")}</a>


                        </div>




                    </Col>

                </Row>
            </Container>
        </div>

    );
}
export default Footer;