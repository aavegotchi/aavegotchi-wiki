export function validateEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(text)
}

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export function getLanguageCode(req, languages) {

    let code;

    if (req) {
        const preferredLanguage: string = req.headers['accept-language']
        code = preferredLanguage.slice(0, 2)
        console.log('req code:', code)
    }
    else if (languages.length > 0) {
        code = languages[0].slice(0, 2)
        console.log('languages code:', code)
    }
    else {
        code = "en"
    }

    //Handle some cases
    if (code === "zh-CN" || code === "zh") code = "cn"
    if (!code) code = "en"

    console.log('final code:', code)

    return code;
}