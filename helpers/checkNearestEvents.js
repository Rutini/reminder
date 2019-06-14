const getEventsByDate = require('./../controllers/event/getEventsByDate');

module.exports = () => {
    setInterval(async () => {
        const searchDateFrom = new Date();
        const searchDateTo = new Date();
        searchDateTo.setMinutes(searchDateFrom.getMinutes() + 5);

        const eventsByDate = await getEventsByDate(searchDateFrom, searchDateTo);
        if (eventsByDate.length) {
            eventsByDate.forEach((event) => {
                console.log(event.about);
                console.log(event.User.phone);
                console.log('________________');
            })
        }

    }, 300000);
};
