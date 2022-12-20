const consoleRequest = (req, res, next) => {
    console.log(`\x1b[31m --> \x1b[33m ${req.method} \x1b[32m ${req.url} \x1b[36m ${res.statusCode} \x1b[0m`);
    next();
}

module.exports = consoleRequest;
