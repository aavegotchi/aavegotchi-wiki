import React, { useState } from 'react'
import { themeColor, themeSecondary } from '../../theme'
import Link from 'next/link'
import { Container, Button } from 'react-bootstrap'
import SubscribeModal from '../SignupModal'
import { useStateValue } from '../../State/globalState'

interface Props {
    logo?: React.ReactNode
    siteTitle?: string
}


const NextStyledNavBar = (props: Props) => {


    const [{ sideMenuOpen }, dispatch] = useStateValue()
    const [showSubscribe, setShowSubscribe] = useState(false)

    var rightLinks = [

        /* {
             name: "EN",
             href: "",
             component: <Button style={{ background: 'whitesmoke', border: 'none', color: 'black', fontSize: '12px', padding: 10, marginRight: 10 }}>
                 中文
             </Button>
         },
         */

        {
            name: "projects",
            href: "https://github.com/aavegotchi/aavegotchi",
            component: <Link href="https://github.com/aavegotchi/aavegotchi-wiki">
                <a><img src="/github.svg" /></a>
            </Link>

        },


    ]

    const brand = (
        <div className="brandContainer">
            <Link href="/">
                <a className="brand">
                    <div className="logoImage">

                        <img src="/aavegotchi.png" width="100%" />


                    </div>
                    <div className="siteTitle">
                        Aavegotchi Wiki</div>
                </a>
            </Link>


        </div>

    )

    function _renderLinks(side: "left" | "right") {

        let linkArray = side === "left" ? [] : rightLinks
        if (linkArray !== undefined && linkArray.length > 0) {

            return (
                linkArray.map(linkObject => {

                    if (linkObject.component) {
                        return (
                            <div>{linkObject.component}</div>
                        )
                    }

                    else {

                        return (
                            <div className="linkButton">


                                <Link key={linkObject.href} href={linkObject.href}>
                                    <a className="linkButtonSpecial" href={linkObject.href}>{linkObject.name}</a>
                                </Link>
                            </div>


                        )
                    }
                })
            )


        }

        else {
            return null
        }
    }




    return (

        <div className="navBar">

            <Container fluid>

                <style global jsx>
                    {`


                .navBar {

                 
                  
                    top:0;
                    display: flex;
                    height:65px;
                    width:100%;
                    flex-direction: row;
                    background:white;
                   
                    align-content: center;
                    justify-content: center;
                    justify-items: center;
                    z-index: 999;
                    margin: 0 auto;
                    opacity: 1;
                    flex-direction: column;
                    box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.04);
                
                }

                .row {
                    display:flex;
                    flex-direction:row;
                    padding-left:30px;
                    padding-right:30px;
                }


                .brandContainer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                background: none;
                   
                    border-radius: 20px;
                    justify-content:center;

                }
                .brand {
                    display: flex;
                    align-items: center;
                    justify-items: center;
                    border: none;
                    flex-direction: row;
                }

                .brand:hover {
                    text-decoration: none;
                }

                .logoImage {
                 
                    width:36px;
                    height:auto;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    margin-right: 8px;
                    color: white;
                    border-radius:30px;
                    overflow:hidden;
                   
                }

                .siteTitle {
                    display:block;
                    font-size: 18pt;
                font-weight: 500;
                margin-right:15px;
                margin-left:3px;
                    color: black;
                   
                }

                .userProfilePicture {
                  
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 35px;
                    min-width: 35px;
                    max-width: 35px;
                    max-height: 35px;
                    border-radius: 17.5px;
                    background: white;
                }


                .linkButton {
                   
                    height: 40px;
                    font-weight:300;
                    width:65px;
                    margin-left: 10px;
                    margin-right:10px;
                    font-size: 16px;
                    border: none;
               
                    display: flex;
                    align-items: center;
                    justify-content:center;
                    transition: background-color 0.3s ease, transform .3s ease;
                  
                }

                .linkButton:hover {

                    color:${themeColor};
                    text-decoration: none;
                    color: white !important;
                }

                .navMenu {
                    display: flex;
                    flex: 4.25;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                }

                .navMenuHamburger {
                    display:none;
                }

                .navMenuHamburgerContainer {
                    display:none;
                  
                }

                
                @media only screen and (max-width: 768px) {
                    .siteTitle {
                        font-size:18px;
                    }
                   
                }

                @media only screen and (max-width:768px) {

                    .navMenu {
                        display:none;
                    }
                  
                    .navMenuHamburgerContainer {
                        display:flex;
                        flex-direction:row;
                        align-items:center;
                       
                    }

                    .navMenuHamburger {
                        display:flex;
                        position:fixed;
                        top:15px;
                        right:20px;
                        background:none;
                        border:none;
                        z-index:999;
                      
                       
                    }
                }
                
                
                `}
                </style>

                <div className="row">

                    {brand}

                    {/*Left Side */}
                    <div style={{ display: 'flex', flex: 4.25, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>





                        {/*leftLinks !== undefined &&
                        _renderLinks("left")
                    */}


                    </div>




                    {/*Right */}
                    <div className="navMenu">

                        {rightLinks !== undefined &&
                            _renderLinks("right")
                        }



                    </div>



                    <div className="navMenuHamburgerContainer">



                        <button onClick={() => dispatch({
                            type: 'updateSideMenuOpen',
                            sideMenuOpen: !sideMenuOpen
                        })} className="navMenuHamburger">

                            <img src="/icons/hamburger.svg" />


                        </button>

                    </div>


                </div>

            </Container>



            <SubscribeModal show={showSubscribe} hide={() => setShowSubscribe(false)} />

        </div>


    )

}





export default NextStyledNavBar
