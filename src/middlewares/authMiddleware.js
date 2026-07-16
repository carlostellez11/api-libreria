const verifyAppToken = (req, res, next) => {
    const appToken = req.headers["app-token"];

    if (!appToken) {
        return res.status(401).json({
            message: "Application token is required."
        });
    }

    if (appToken !== process.env.APP_TOKEN) {
        return res.status(401).json({
            message: "Invalid application token."
        });
    }

    next();
};

module.exports = verifyAppToken;