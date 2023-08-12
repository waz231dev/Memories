import jwt from 'jsonwebtoken';

const isAuthenticated = async (req, res, next) => {
    if (!req.headers
        || !req.headers.authorization
        || !req.headers.authorization.startsWith('Bearer')) {
        return res.json({ message: 'Bearer token is required' })
    }
    try {
        const authorizationHeader = req.headers.authorization;
        const accessToken = authorizationHeader.split(' ')[1];

        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return next('Error in authentication');
    }
}

export default isAuthenticated;