const createRemind = require('../remind/createRemind');

module.exports = (socket) => {

    socket.on('createRemind', async (data) => {
        socket.emit('createdRemind', await createRemind(data));
    })
};
