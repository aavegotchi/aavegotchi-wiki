import React, { useState } from "react";
import { Modal, Col } from "react-bootstrap";
import NextStyledInput from "./NextComponents/NextStyledInput";
import NextStyledButton from "./NextComponents/NextStyledButton";
import { themeColor, darkThemeColor, themeGray } from "../theme";
import { validateEmail } from "../functions";

interface SubscribeModalProps {
    show: boolean
    hide: () => void
}

const SubscribeModal = (props: SubscribeModalProps) => {

    const { show, hide } = props

    const [email, setEmail] = useState(undefined)
    const [firstName, setFirstName] = useState(undefined)
    const [lastName, setLastName] = useState(undefined)
    const [submitting, setSubmitting] = useState(false)

    function verifyInformation() {
        if (validateEmail(email) && firstName && lastName) return true
        else return false
    }

    async function handleSubmit() {

        const verify = verifyInformation()

        if (verify) {

            try {
                setSubmitting(true)

                const result = await fetch(`/api/addSubscriber?email=${email}&fname=${firstName}&lname=${lastName}`)

                const json = await result.json()
                const parsed = JSON.parse(json.body)

                if (parsed.status === "success") {
                    alert("Subscribed! Please check your inbox to confirm.")
                }
                else {
                    alert(`Error: ${parsed.message}`)
                }

                setSubmitting(false)
                hide()

            } catch (error) {
                console.log('error:', error)

                alert("This email has already subscribed!")
                setSubmitting(false)
            }


        }
        else {
            alert("Please input a valid email address and name.")
        }


    }




    return (
        <Modal
            show={show}
            dialogClassName="modal-md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >



            <Modal.Header closeButton onClick={() => hide()}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Subscribe to coderdan's blog
                </Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <div style={{ textAlign: 'center', fontSize: '16px', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                    Level up your Web3 development with tutorials by @coderdannn
                    </div>

                <Col>


                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <NextStyledInput
                            placeHolderText="First name"

                            onChangeText={(text) => setFirstName(text)}
                            value={firstName}
                            inputFieldStyles={`
                            margin-top:20px;
                            font-size:14px;
                            height:60px;
                            color:black;
                            background:whitesmoke;
                        `}
                        />

                        <NextStyledInput
                            placeHolderText="Last name"
                            onChangeText={(text) => setLastName(text)}
                            value={lastName}
                            inputFieldStyles={`
                            margin-left:15px;
                            margin-top:20px;
                            font-size:14px;
                            height:60px;
                            color:black;
                            background:whitesmoke;
                        `}
                        />
                    </div>


                    <NextStyledInput
                        placeHolderText="Email"

                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        inputFieldStyles={`
                            height:60px;
                            font-size:14px;
                            color:black;
                            background:whitesmoke;
                        `}
                    />

                    <NextStyledButton
                        title="Subscribe"
                        onClick={() => {
                            handleSubmit()
                        }}
                        defaultStyle={`
                            margin-top:15px;
                            background:${themeColor};
                            height:50px;
                            transition:background 0.2s;
                        `}
                        hoverStyle={`
                            background:${darkThemeColor};
                            text-decoration:none;
                        `}
                        titleStyles={`
                            color:white;
                            letter-spacing:1.2px;
                            font-size:12px;
                            text-transform:uppercase;
                        `}
                        submitting={submitting}
                        submittingTitle="Subscribing..."
                        disabled={submitting}
                        disabledStyle={`
                            background:${themeGray};
                        `}
                    />

                    <div className="spam">
                        You'll never receive any spam mail from me. Just awesome content.
                    </div>


                </Col>

            </Modal.Body>


            <style jsx>
                {`
                    .spam {
                        margin-top:10px;
                        font-size:12px;
                    }
                `}
            </style>

        </Modal>
    );
}
export default SubscribeModal;