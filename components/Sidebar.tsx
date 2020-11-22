import Link from "next/link";
import React, { useEffect, useState } from "react";
import { items } from "../data/sidebarItems";
import { getLanguageCode } from "../functions";
import { themeHotPink } from "../theme";

interface SidebarProps {

}

const Sidebar = (props: SidebarProps) => {

    const [languageCode, setLanguageCode] = useState(undefined)



    useEffect(() => {
        //  const code = navigator.languages[0].slice(0, 2)

        const code = getLanguageCode(undefined, navigator.languages)

        setLanguageCode(code)
    }, [])


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
                `}
            </style>

            <ul>
                {items.map((linkObject) => {

                    if (linkObject.href === "") {
                        return (
                            <Link href="/">
                                <a>
                                    <li>
                                        <div className="name">
                                            {linkObject.name}
                                        </div>

                                    </li>
                                </a>
                            </Link>
                        )
                    }

                    return (
                        <Link href="/[lang]/[pageID]" as={`/${languageCode}/${linkObject.href}`}>
                            <a>
                                <li className="flexRow">
                                    <img className="sideBarIcon" src={`/icons/${linkObject.href}.svg`} />

                                    <div className="name">
                                        {linkObject.name}
                                    </div>

                                </li>
                            </a>
                        </Link>
                    )
                })}



            </ul>

        </div>
    );
}
export default Sidebar;