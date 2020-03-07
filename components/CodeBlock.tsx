import React from "react";
import { Prism as SyntaxHighlier } from 'react-syntax-highlighter'

import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/cjs/styles/prism/'

interface CodeBlockProps {
    value: string
    language: string
}

const CodeBlock = (props: CodeBlockProps) => {

    const { value } = props

    if (typeof window !== 'undefined') {


        return (

            <div>




                <SyntaxHighlier language={"javascript"} style={base16AteliersulphurpoolLight}>
                    {value}
                </SyntaxHighlier>



            </div>
        );
    }
    else return <div></div>
}
export default CodeBlock;



