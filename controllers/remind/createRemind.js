const dataBase = require('../../dataBase').getInstance();

module.exports = async (data) => {
    try {
        const User = dataBase.getModel('User');
        const Event = dataBase.getModel('Event');

        console.log('_____________');
        const {name, phone, email, about, event_date, remind_date} = data;
        await User.create({
            name,
            phone,
            email
        });

        const {id: user_id} = await User.findOne({
            attributes: ['id'],
            where: {
                name,
                phone,
                email
            }
        });

        await Event.create({
            about,
            remind_date,
            event_date,
            user_id
        });

        return `Remind successfully created!`;
    } catch (e) {
        console.log(e.message);
    }
};
