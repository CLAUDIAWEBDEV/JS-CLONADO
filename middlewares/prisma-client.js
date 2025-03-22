

function prismaClient(client) {
    return function (req, res, next) {
        req.client = client;
        next();
    };                           
}


module.exports = {
    prismaClient,
};