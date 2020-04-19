import React, { useState } from "react";
import { Modal, Col } from "react-bootstrap";
import NextStyledInput from "./NextComponents/NextStyledInput";
import NextStyledButton from "./NextComponents/NextStyledButton";
import { themeColor, darkThemeColor, themeComplement, themeGray } from "../theme";
import { validateEmail } from "../functions";

interface SubscribeModalProps {
    show: boolean
    hide: () => void
}

const SubscribeModal = (props: SubscribeModalProps) => {

    const { show, hide } = props

    const [email, setEmail] = useState(undefined)
    const [name, setName] = useState(undefined)
    const [submitting, setSubmitting] = useState(false)

    async function handleSubmit() {

        const verify = true //validateEmail(email)

        if (verify) {

            try {
                setSubmitting(true)
                //const result = await addSubscriber(email)

                // console.log('result:', result)

                alert("Subscribed! Please check your inbox to confirm.")

                setSubmitting(false)
            } catch (error) {
                console.log('error:', error)

                alert("This email has already subscribed!")
                setSubmitting(false)
            }


        }
        else {
            alert("Please input a valid email address.")
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


                    <NextStyledInput
                        placeHolderText="Name"

                        onChangeText={(text) => setName(text)}
                        value={email}
                        inputFieldStyles={`
                            margin-top:20px;
                            font-size:14px;
                            height:60px;
                            color:black;
                            background:whitesmoke;
                        `}
                    />

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