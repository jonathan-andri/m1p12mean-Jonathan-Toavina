exports.roleMiddleware = (role) => {
    return ( req, res , next ) => {
        // if(!role.includes(req.body.role)) {
        //     return res.status(403).json({message: "You don't have access to this page"});
        // }
        console.log(req.body)
        next();
    }
}