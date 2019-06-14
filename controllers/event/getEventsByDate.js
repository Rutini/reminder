const dataBase = require('../../dataBase').getInstance();
const Sequelize = require('sequelize');

module.exports = async (searchDateFrom, searchDateTo) => {
    try {
        const Event = dataBase.getModel('Event');
        const User = dataBase.getModel('User');

        const Op = Sequelize.Op;

        return await Event.findAll({
            where: {
                remind_date: {
                    [Op.between]: [searchDateFrom, searchDateTo]
                }
            },
            include: [
                User
            ]
        });

    } catch (e) {
        return e.message;
    }
};
