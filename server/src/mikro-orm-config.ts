import { Test } from "./entities/Test";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

export default {
    type: 'postgresql',
    name: 'postgres',
    password: 'root',
    dbName: 'lol-app',
    debug: process.env.NODE_ENV === 'production',
    entities: [Test],
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    }
} as Parameters<typeof MikroORM.init>[0];