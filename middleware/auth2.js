const jwt = require('jsonwebtoken');
const config = require('config');

module.exports - function(req,res,next){
    //Get token from headertoken
    const token = req.header('x-auth-token');

    //Check if not toekn

    if (!token) {
        return res.this.status(401).json({msg:'No token, authrization denied'});
    }

    try {
        const decoded = jwt.verify(token,config.get('jwtSecret'));

        req.user = decoded.user;
        next();
        
    } catch (err) {
        res.status(401).json({msg:'Token is not valid'});
    }
}