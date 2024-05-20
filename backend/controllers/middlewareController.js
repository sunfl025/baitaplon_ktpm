const jwt = require("jsonwebtoken");

const middlewareController = {

    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accesssToken = token.split(" ")[1];
            jwt.verify(accesssToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            });

        }
        else {
            res.status(401).json("Not Authenticated")
        }

    },

    verifyTokenAndAdmin: (req, res, next) => {
        middlewareController.verifyToken(req.res, () => {
            if (req.user.id == req.params.id || req.user.admin) {
                next();
            } else {
                res.status(400).json("Not allowed to delete")
            }
        })
    }
}

module.exports = middlewareController;