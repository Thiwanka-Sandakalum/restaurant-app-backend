const { createLogger, format, transports } = require('winston');
const { combine, timestamp, errors, json } = format;

function buildProdLogger() {
    return createLogger({
        format: combine(
            timestamp(),
            errors({ stack: true }),
            json()
        ),
        defaultMeta: { service: 'userService' },
        transports: [new transports.Console(), new transports.File({ filename: "production.log", level: "http" })]
    });
}

module.exports = buildProdLogger;