import React from "react";
import { slide as Menu } from 'react-burger-menu'

import Link from "next/link";
import { items } from '../data/sidebarItems'
import { Category, Item } from "../types";
import { darkThemeColor, themeHotPink } from "../theme";
import { useStateValue } from "../State/globalState";

interface SideMenuProps {

}

const SideMenu = (props: SideMenuProps) => {

    const [{ sideMenuOpen }, dispatch] = useStateValue()

    var styles = {
        bmBurgerButton: {
            /* position: 'fixed',
             width: 24,
             height: 24,
             top: 24,
             right: 24
             */
            display: 'none',

        },

        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            display: 'none',
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%',
            width: 250,
            transition: 'all 0.3s ease 0s'
        },
        bmMenu: {
            padding: '0.5em 0.5em 0',
            fontSize: '1.15em',
            background: themeHotPink,
            borderLeft: `solid 3px ${darkThemeColor}`,

        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em',
            display: 'flex',
            flexDirection: 'column',

        },
        bmItem: {
            display: 'flex'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        },
        a: {
            textDecoration: 'none'
        }


    }

    function closeMenu() {

        console.log('hcloseey!')

        dispatch({
            type: 'updateSideMenuOpen',
            sideMenuOpen: false
        })
    }


    return (
        <div>
            <Menu disableAutoFocus onClose={() => {
                console.log('closing time')
                closeMenu()
            }} isOpen={sideMenuOpen} right styles={styles}>

                <div className="sidebarContainer">

                    <ul>
                        {items.map((category: Category) => {

                            return (
                                <div>
                                    <div className="category">{category.name}</div>

                                    {category.items.map((item: Item) => {
                                        const url = item.href.startsWith("https") ? item.href : `/en/${item.href}`
                                        const href = item.href.startsWith("https") ? item.href : "/[lang]/[pageID]"
                                        const img = item.href === "https://blog.aavegotchi.com" ? "blog" : item.href
                                        return (
                                            <Link href={href} as={url}>
                                                <a onClick={() => {
                                                    closeMenu()
                                                }}>
                                                    <li className="flexRow">
                                                        <img className="sideBarIcon" src={`/icons/${img}.svg`} />

                                                        <div className="name">
                                                            {item.name}
                                                        </div>

                                                    </li>
                                                </a>
                                            </Link>
                                        )
                                    })}

                                </div>


                            )
                        })}



                    </ul>

                </div>

            </Menu>

            <style jsx>
                {`
                      .sidebarContainer {
                        width:100%;
    
                        height:100%;
                        
                       
                    }
                    
                    .userContainer {
                        color:white;
                        margin-bottom:20px;
                    }

                    .user {
                        font-size:20px;
                        text-align:center;
                    }

                    .navContainer {
                        display:flex;
                        flex:1;
                        flex-direction:column;
                    }

                    ul {
                        list-style-type: none;
                        padding:0;
                        margin:0;
                    }

                    li {
                        letter-spacing:0.2px;
                        
                        color:white;
                        font-size:18px;
                        
                        margin-bottom:20px;
                    }

                    .category {
                        text-transform:uppercase;
                        color:rgba(255,255,255,0.5);
                        margin-bottom:15px;
                        margin-top:30px;
                        font-size:13px;
                    }

                    .sideBarIcon {
                        margin-top:-4px;
                      margin-right:10px;
                      width:26px;
                      height:26px;
                      height: 100%;
                      object-fit: contain;
                  }


                  .name {
                    font-size:14px;
                }

                    .navItem {
                        padding:5px;
                        color:white;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        background:red;
                        border:solid 2px black;
                        margin:5px;
                        
                    }

                    .navTitle {
                        display:flex;
                        flex:1;
                        justify-content:flex-start;
                        margin-left:10px;
                    }

                    .navIcon {
                        
                       margin-left:3px;
                        object-fit:contain;
                        width:30px;
                        height:30px;
                        margin-right:6px;
                    }

                    .divider {
                        height:1px;
                        background:black;
                        width:100%;
                        margin-top:8px;
                        margin-bottom:8px;
                    }

                    .logout {
                        padding: 0 0 0 0;
                    }
                `}
            </style>
        </div>
    );
}
export default SideMenu;
