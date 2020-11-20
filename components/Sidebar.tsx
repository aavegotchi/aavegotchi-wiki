import Link from "next/link";
import React from "react";
import { items } from "../data/sidebarItems";

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
                        background:#FA34F3;
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
                `}
            </style>

            <ul>
                {items.map((linkObject) => {

                    if (linkObject.href === "") {
                        return (
                            <Link href="/">
                                <a>
                                    <li>
                                        {linkObject.name}
                                    </li>
                                </a>
                            </Link>
                        )
                    }

                    return (
                        <Link href="/p/[pageID]" as={`/p/${linkObject.href}`}>
                            <a>
                                <li>
                                    {linkObject.name}
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