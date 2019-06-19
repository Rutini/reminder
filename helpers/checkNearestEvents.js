const getEventsByDate = require('./../controllers/event/getEventsByDate');
const sendEmail = require('./../helpers/sendEmail');

module.exports = () => {
    setInterval(async () => {

        const searchDate = new Date();
        searchDate.setSeconds(0);

        const eventsByDate = await getEventsByDate(searchDate);
        if (eventsByDate.length) {
            eventsByDate.forEach(event => {
                sendEmail(event);
            });
        }

    }, 60000);
};
