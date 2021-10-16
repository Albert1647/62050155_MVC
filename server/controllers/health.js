exports.healthCheck = (req, res, next) => {
    res.send('response from server port 3000');
};
exports.pathHandler = (req, res, next) => {
    res.status(404).send('invalidPath');
};