import React from 'react'
import NextStyledButton from './NextStyledButton'


interface Props {
    inputType?: "text" | "password"
    inputLabel?: string | undefined
    placeHolderText: string
    buttonTitle?: React.ReactNode
    buttonSubmittingTitle?: React.ReactNode

    errorText?: string | undefined
    value: string
    onChangeText: (text: string) => void
    onSubmit?: () => void
    onBlur?: () => void
    submitWithEnterKey?: boolean

    disabled?: boolean
    submitting?: boolean | undefined
    buttonDisabled?: boolean

    connectButton?: boolean
    buttonWidth?: number

    //Styles
    buttonStyles?: any
    buttonHoverStyle?: string
    inputFieldStyles: string
    inputLabelStyles?: string
    buttonDisabledStyles?: string
    errorTextStyles?: string
}

const NextStyledInput = (props: Props) => {

    const {
        inputLabel,
        inputType,
        placeHolderText,
        buttonTitle,
        buttonSubmittingTitle,
        buttonStyles,

        errorText,
        value,
        onChangeText,
        onSubmit,
        onBlur,
        submitWithEnterKey,

        disabled,
        submitting,
        buttonDisabled,
        connectButton,

        inputFieldStyles,
        inputLabelStyles,
        errorTextStyles,
        buttonHoverStyle
    } = props

    const darkThemeColor = "#3d3d3d"


    function saveButton() {

        return (
            <NextStyledButton
                title={buttonTitle ?? ""}
                onClick={() => onSubmit()}
                submittingTitle={buttonSubmittingTitle}
                submitting={submitting}
                defaultStyle={buttonStyles}
                disabled={buttonDisabled}
                disabledStyle={props.buttonDisabledStyles}
                hoverStyle={buttonDisabled ? undefined : buttonHoverStyle}

            />
        )
    }


    function didPressKey(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {

            if (submitWithEnterKey && onSubmit) {
                onSubmit()
            }

        }

    }

    return (

        <div className="sl-inputGroup">

            <style jsx>{`

                .sl-inputGroup {
                    width:100%;
                  
                }

                
                .sl-inputContainer {
                    display: flex;
                    flex-direction: row;
                }

                .sl-inputLabel {
                    background: none;
                    color: ${darkThemeColor};
                    font-size: 11pt;
                    margin-bottom: 10px;
                    margin-left: 10px;
                    text-align: left;
                    font-weight: bold;
                    ${inputLabelStyles}
                }


                input {
                    padding-left:15px;
                    flex:1;
                    display: flex;
                    border:none;
                    font-size: 16pt;
                    color:${darkThemeColor};
                    font-weight: 400;

                    ${inputFieldStyles}
                }

                input:disabled{
                    padding-left:15px;
                    flex:1;
                    display: flex;
                    border:none;
                    font-size: 16pt;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    background: white;
                    height: 70px;
                    color:rgba(0,0,0,0.5);
                    font-weight: 400;
                    ${inputFieldStyles}
                }

                .sl-errorText {
                    margin-top: 10px;
                    margin-left: 10px;
                    color: red;
                    font-size: 11pt;
                    ${errorTextStyles}
                  
                    
                }

            `}</style>

            {inputLabel !== undefined &&
                <div className="sl-inputLabel">{inputLabel}</div>
            }

            <div className="sl-inputContainer">



                <input
                    type={inputType ? inputType : "text"}
                    style={connectButton && { paddingRight: props.buttonWidth + 10 }}
                    onBlur={() => onBlur ? onBlur() : undefined}
                    onChange={(text) => onChangeText(text.currentTarget.value)}
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => didPressKey(e)}
                    value={value}

                    disabled={disabled}
                    placeholder={placeHolderText}>
                </input>

                {buttonTitle !== undefined && !connectButton &&
                    saveButton()
                }

                {buttonTitle && connectButton &&
                    <div style={{
                        marginLeft: -props.buttonWidth,
                    }}>
                        {saveButton()}
                    </div>
                }


            </div>

            <div className="sl-errorText">{errorText}</div>

        </div>

    )


}

/*
function areEqual(prevProps, nextProps) {
    return prevProps.value === nextProps.value
}

const MemoInput = React.memo(ReusableSingleLineInput, areEqual)
*/

export default NextStyledInput
