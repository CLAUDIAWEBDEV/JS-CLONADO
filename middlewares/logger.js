
function logger (req, res, next) {
    console.log(`
        new Request:
        TO: ${req.path}
        METHOD: ${req.method}
        `);
    next();
}

module.exports = {
    logger,
};