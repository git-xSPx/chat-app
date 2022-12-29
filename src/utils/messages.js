const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMessage = (username, url, text = 'My current location...') => {
    return {
        username,
        url,
        text,
        createdAt: new Date().getTime()
    }
}

module.exports = { generateMessage, generateLocationMessage }