import React from "react";
import { Prism as SyntaxHighlier } from 'react-syntax-highlighter'

import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/cjs/styles/prism/'

interface CodeBlockProps {
    value?: string
    children?: React.ReactNode
    className?: string
    inline?: boolean
}

const CodeBlock = (props: CodeBlockProps) => {

    const { value, children, className, inline } = props

    if (inline) {
        return <code className={className}>{children}</code>
    }

    const code = typeof value === "string"
        ? value
        : Array.isArray(children)
            ? children.join("")
            : String(children ?? "")

    const language = className?.match(/language-(\w+)/)?.[1] || "javascript"

    if (typeof window !== 'undefined') {


        return (

            <div>




                <SyntaxHighlier language={language} style={base16AteliersulphurpoolLight}>
                    {code}
                </SyntaxHighlier>



            </div>
        );
    }
    else return <div></div>
}
export default CodeBlock;


