import Head from 'next/head'
import { themeColor, darkThemeColor, themeSecondary, themeComplement } from '../theme'

export default function Meta(props) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>{props.siteTitle}</title>
                <meta name="Description" content={props.description}></meta>
            </Head>
            <style jsx global>
                {`

                    * {
                    box-sizing: inherit;
                    }
                    html {
                    box-sizing: border-box;
                 
                    }
                    body {
                    margin: 0;
                 
                    overflow-x: hidden;
                    color: #000;
                    font-size: 16px;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    }
                    a {
                    text-decoration: none;
                    color: ${themeColor};
                    transition:color 0.2s;
                  
                    }

                    a:hover {    
                        text-decoration:none;           
                        color:${themeSecondary};
                    }

                    .btn-primary {
                        background-color:${themeColor};
                        border-color:${themeColor};
                        transition:background-color 0.2s, border-color 0.2s;   
                    }

                    .btn-primary:hover {
                        background-color:${darkThemeColor};
                        border-color:${darkThemeColor};
                    }
                 
                    {/* //TYPOGRAPHY------------------------------------- */}

                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6,
                    p {
                    font-family: "Work Sans", "Helvetica Neue", Helvetica, sans-serif;
                    margin-left: 0;
                    margin-right: 0;
                    margin-top: 0;
                    padding-bottom: 0;
                    padding-left: 0;
                    padding-right: 0;
                    padding-top: 0;
                    margin-bottom: 1.45rem;
                    color: inherit;
                    text-rendering: optimizeLegibility;
                    }

                    h1,
                    h2 {
                    font-weight: 500;
                    }

                    h1 {
                    font-size: 3rem;
                    letter-spacing: -1px;
                    line-height: 1.1875;
                    }

                    h2 {
                    font-size: 2.1rem;
                    letter-spacing: -0.75px;
                    line-height: 1.2;
                    }

                    h3 {
                    font-size: 1.2rem;
                    letter-spacing: -0.5px;
                    line-height: 1.1875;
                    color: black;
                    font-weight: normal;
                    }

                    p {
                    font-size: 1.2rem;
                    letter-spacing: -0.5px;
                    line-height: 1.5;
                    color: #464646;
                    }

                    blockquote {
                        padding:10px;
                        padding-bottom:10px;
                        background:${themeComplement};
                        border-left:solid 8px ${themeColor};
                    }

                    blockquote > p:last-child {
                        margin-bottom:0;
                    }

                    .modal-m {
                        width:60%;
                        max-width:unset;
                        margin: 0 auto;
                        margin-top:40px;
                        height:520px;
                    }

                    @media (max-width: 768px) {
                        h1 {
                            font-size: 2rem;
                            letter-spacing: -1px;
                            line-height: 1.1875;
                        }

                        h2 {
                            font-size: 1.5rem;
                            letter-spacing: -0.75px;
                            line-height: 1.1667;
                        }

                        h3 {
                            font-size: 1rem;
                            letter-spacing: -0.5px;
                            line-height: 1.1875;
                            font-weight: normal;
                        }

                        p {
                            line-height: 1.4375;
                        }

                        blockquote {
                            margin-top:20px;
                            margin-bottom:20px;
                            margin-left:0;
                            border-left:solid 5px ${themeColor};
                        }
                    }
                `}
            </style>
        </>
    )
}