export const validarEmail = (email) => {
    // const length = email.length;
    // if(length > 8 && length < 25 && email.includes('@')) {
    //     return true
    //     } else {
    //         return false
    //     }
    const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.match(reg)) {
            return true
        } else {
            return false
        }
}

export function validarPassword(password) {
    const length = password.length;
    if(length >= 8 && length < 20) {
            return true
        } else {
            return false
        }
}
