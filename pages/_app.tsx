import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import NextStyledNavBar from '../components/NextComponents/NextStyledNavBar'
import '../css/fonts.css'
import '../css/styles.css'
import BackToTopButton from '../components/BackToTop'
import SideMenu from '../components/SideMenu'


class MyApp extends App {



    render() {
        const { Component, pageProps } = this.props




        return (

            <div>

                <div className="sideMenu">
                    <SideMenu />
                </div>



                <NextStyledNavBar />

                <Head>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                </Head>






                <BackToTopButton />


                <Component {...pageProps} />

                <style jsx>
                    {`
                        .sideMenu {
                           
                            display:none;
                        }

                        @media screen and (max-width:768px) {
                            .sideMenu {
                        
                                display:block;
                            }
                        }
                    `}
                </style>

            </div>


        )
    }
}

export default MyApp