'use strict';

module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            about: {
                type: DataTypes.STRING
            },
            remind_date: {
                type: DataTypes.DATE
            },
            event_date: {
                type: DataTypes.DATE
            },
            user_id: {
                type: DataTypes.INTEGER
            }
        },
        {
            tableName: 'events',
            timestamps: false
        }
    );

    const User = sequelize.import('./User.js');
    Event.belongsTo(User, {foreignKey: 'user_id'});

    return Event;
};
