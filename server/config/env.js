'use strict';

const env = {
    PORT: process.env.PORT || 5083,
    DATABASE_NAME: process.env.DATABASE_NAME || 'db_teste',
    DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
    DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'post102030',
    DATABASE_PORT: process.env.DATABASE_PORT || 15432,
    DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',
};

module.exports = env;
