"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const options = {
    logger: true,
};
const start = async () => {
    const app = await (0, app_1.buildApp)(options);
    try {
        await app.listen({
            port: 3000,
            host: 'localhost',
        });
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
