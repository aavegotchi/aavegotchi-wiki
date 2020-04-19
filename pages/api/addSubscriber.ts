import { NowRequest, NowResponse } from '@now/node'

export default (req: NowRequest, res: NowResponse) => {

    const email = req.query.email
    const fname = req.query.fname
    const lname = req.query.lname

    console.log('email:', email)
    console.log('fname:', fname)
    console.log('lname:', lname)

    const Mailchimp = require('mailchimp-api-v3')

    const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

    return mailchimp.post('/lists/4a61409add/members', {
        "email_address": email,
        "status": 'pending',
        "tags": ["coderdanBlog"],
        "merge_fields": {
            "FNAME": fname,
            "LNAME": lname,
            "SOURCE": "subscribeBox"
        }

    }).then((results) => {
        console.log('added new user to mailchimp list', results);

        let response = {
            statusCode: 200,
            headers: {
                "x-custom-header": "my custom header value",
                "content-type": "application/json",
                "Access-Control-Allow-Origin": '*'
                //****** needed to add the next 3 lines
            },
            body: JSON.stringify({ status: "success", message: "awaiting confirmation" })
        };
        console.log("response: " + JSON.stringify(response))

        res.json(response)


    })
        .catch((err) => {

            console.log('err:', err.status)

            let response = {
                statusCode: err.status,
                headers: {
                    "x-custom-header": "my custom header value",
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": '*'
                    //****** needed to add the next 3 lines
                },
                body: JSON.stringify({ status: "error", message: err.title })
            };
            console.log("response: " + JSON.stringify(response))

            res.json(response)
        })

    /*

  
    res.json({ name: name, email: email })
    */
}