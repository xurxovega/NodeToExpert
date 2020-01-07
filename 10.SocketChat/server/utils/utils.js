const sendMessage = (user, message) => {
    return {
        name: user,
        message,
        date: new Date().getTime()
    };
}

module.exports = {
    sendMessage
}