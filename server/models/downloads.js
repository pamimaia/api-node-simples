'use strict'

module.exports = (sequelize, DataTypes) => {
    const Download = sequelize.define('download', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            required: true
        },
        description: DataTypes.TEXT,
        type: {
            type: DataTypes.ENUM,
            values: ['ebook', 'tutorial']
        },
        link: {
            type: DataTypes.STRING,
            required: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('NOW')
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, {
        paranoid: true,
        underscored: true
    });
    return Download;
};
