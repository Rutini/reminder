const dataBase = require('../../dataBase').getInstance();

module.exports = async (data) => {
    try {
        const User = dataBase.getModel('User');
        const Event = dataBase.getModel('Event');

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

        const response = `Remind successfully created for ${email} at ${remind_date}`;
        console.log(response);
        return response;

    } catch (e) {
        console.log(e.message);
    }
};
