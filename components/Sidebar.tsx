import Link from "next/link";
import React from "react";
import { items } from "../data/sidebarItems";
import { themeHotPink } from "../theme";
import { Category, Item } from "../types";

interface SidebarProps {

}

const Sidebar = (props: SidebarProps) => {

    return (
        <div className="sidebarContainer">

            <style jsx>
                {`
                    .sidebarContainer {
                        width:100%;
                        min-height:600px;
                        height:auto;
                        height:100%;
                        background:${themeHotPink};
                        border:solid 5px #FFF971;
                        border-left:5px white;
                        border-style:none dashed none none;
                        padding:15px;
                        padding-top:50px;
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

                    a {
                        color:white;
                    }

                    a:hover {
                        text-decoration:none;
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

                  @media screen and (max-width:768px) {

                    .sidebarContainer {
                        display:none;
                        min-height:unset;
                        height:fit-content;
                        padding-top:20px;
                    }
                      ul {
                          display:flex;
                          flex-direction:row;
                          flex-wrap:wrap;
                          justify-content:center;
                      }

                      ul > a  > li {
                          width:40px;
                          height:40px;
                      }

                      .name {
                          display:none;
                      }
                  }
                `}
            </style>

            <ul>
                {items.map((category: Category) => {

                    return (
                        <div>
                            <div className="category">{category.name}</div>

                            {category.items.map((item: Item) => {
								const url = item.href.startsWith("https") ? item.href : `/en/${item.href}`;
								const href = item.href.startsWith("https") ? item.href : "/[lang]/[pageID]";
								const img = item.href === "https://blog.aavegotchi.com" ? "blog" : item.href;
								return (
                                    <Link href={href} as={url}>
                                        <a>
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

            <style jsx>
                {`
                    .category {
                        text-transform:uppercase;
                        color:rgba(255,255,255,0.5);
                        margin-bottom:15px;
                        margin-top:30px;
                        font-size:13px;
                    }

                    @media screen and (max-width:768px) {
                        .category {
                            display:none;
                        }
                    }
                `}
            </style>

        </div>
    );
}
export default Sidebar;
