'use strict';

const env = {
    PORT: process.env.PORT || 5083,
    DATABASE_NAME: process.env.DATABASE_NAME || 'db_teste',
    DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
    DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'post102030',
    DATABASE_PORT: process.env.DATABASE_PORT || 15432,
    DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',

    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY || '',
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
    AWS_BUCKET: process.env.AWS_BUCKET || '',

};

module.exports = env;
