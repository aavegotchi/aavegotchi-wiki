
export function validateEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(text)
}

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export function getLanguageCode(req, languages) {

    let code: string;

    if (req) {
        //There's only one
        code = req.headers['accept-language']
        console.log('req code:', code)
    }
    else if (languages.length > 0) code = languages[0]
    else code = "en"

    //Handle some cases
    if (code.toLowerCase() === "zh-cn") code = "cn"
    else if (!code) code = "en"

    console.log('final code:', code)

    return code.slice(0, 2);
}
