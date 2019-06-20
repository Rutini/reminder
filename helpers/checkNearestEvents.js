const getEventsByDate = require('./../controllers/event/getEventsByDate');
const sendEmail = require('./../helpers/sendEmail');

module.exports = () => {
    setInterval(async () => {

        const searchDate = new Date();
        searchDate.setSeconds(0);

        const eventsByDate = await getEventsByDate(searchDate);
        if (eventsByDate.length) {
            return eventsByDate.forEach(event => {
                sendEmail(event);
            });
        }
        console.log('No events!');
    }, 60000);
};
