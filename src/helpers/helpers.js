
export function  getSubstring(string, offset, size) {
    let newString = string.substring(offset, size)
            
    if (string.length > newString.length) {
        return newString + '...'
    } else {
        return newString 
    }
}

export function checkAuthentication() {
    console.log("localStorage.getItem('user')",  localStorage.getItem('user'))

    if (!localStorage.getItem('user')) {
        return window.location = '/login'
    }
}
