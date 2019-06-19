const dataBase = require('../../dataBase').getInstance();

module.exports = async (searchDate) => {
    try {
        const Event = dataBase.getModel('Event');
        const User = dataBase.getModel('User');

        const currentEvents =  await Event.findAll({
            where: {
                remind_date: searchDate
            },
            include: [
                User
            ]
        });

        return currentEvents.map(event => {
            const {about, event_date, User} = event;
            const {phone, email} = User;
            return {
                about,
                event_date,
                phone,
                email
            };
        });

    } catch (e) {
        return e.message;
    }
};
