export function validateEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(text)
}

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export function handleLanguageCode(code: string) {
    let finalCode: string
    //Handle some cases
    if (code.toLowerCase() === "zh-cn") finalCode = "cn"
    else if (!code) finalCode = "en"
    else finalCode = code
    console.log('final code:', finalCode)
    return finalCode.slice(0, 2);
}
