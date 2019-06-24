const dataBase = require('../../dataBase').getInstance();

module.exports = async (data) => {
    try {
        const User = dataBase.getModel('User');
        const Event = dataBase.getModel('Event');

        const {name, phone, email, about, event_date, remind_date} = data;

        if (!name ||
            !phone ||
            !email ||
            !about ||
            !event_date ||
            !remind_date) throw new Error('All fields are required and some data missed');

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

        if (!user_id) throw new Error('Unfortunately user didn\'t create, try again');

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
        return e.message;
    }
};
