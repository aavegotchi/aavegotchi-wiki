import React, { useState } from "react";

interface NextStyledButtonProps {
    title: string | JSX.Element //Title of the button
    onClick: () => void
    submittingTitle?: string | JSX.Element
    titleStyles?: string
    icon?: string | JSX.Element
    iconPosition?: "left" | "right"
    iconStyle?: string
    iconHoverStyle?: string
    defaultStyle: string //Default height and width of the button
    additionalStyles?: string //Other styles like border-radius, border, etc
    HW_480?: string //Height and width for 480px
    HW_767?: string //Height and width for 767px
    HW_1024?: string //Height and width for 1024px
    HW_1367?: string //Height and width for 1367px
    hoverStyle?: string //Hover styles
    activeStyle?: string //Active styles
    disabled?: boolean //Disabled
    disabledStyle?: string // Disabled style
    submitting?: boolean


}

const NextStyledButton = (props: NextStyledButtonProps) => {

    const { title, titleStyles, onClick, icon, iconPosition, iconStyle, iconHoverStyle, disabled, disabledStyle, defaultStyle, HW_480, HW_767, HW_1024, HW_1367, hoverStyle, activeStyle, additionalStyles, submitting, submittingTitle } = props

    const [hovering, setHovering] = useState(false)

    return (

        <a
            role="button"
            tabIndex={0}
            onClick={() => {
                disabled ? undefined : onClick()
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >

            <style jsx>
                {`
                
                a {
                    cursor:${disabled ? "default" : "pointer"};
                    display:flex;
                    align-items:center;
                    text-align:center;
                    justify-content:center;
                    ${defaultStyle};
                    ${additionalStyles};
                    ${disabled ? disabledStyle : undefined}
                }

                .titleStyle {
                    ${titleStyles}
                }

                .icon {
                    ${iconStyle}
                    ${hovering ? iconHoverStyle : undefined}
                }


                @media (hover: hover) {
                    a:hover {
                       ${!disabled && hoverStyle}
                    }

                    
                  }
               

                a:active {
                    ${!disabled && activeStyle}
                }


                `}
            </style>


            <div style={{ display: 'flex', alignItems: 'center' }}>

                {iconPosition === "left" &&
                    <span className="icon">{icon}</span>
                }

                <span className="titleStyle">{submitting ? submittingTitle : title}</span>

                {iconPosition === "right" &&
                    <span className="icon">{icon}</span>
                }

            </div>


        </a>

    );
}
export default NextStyledButton;