exports.roleMiddleware = (role) => {
    return ( req, res , next ) => {
        if(!role.imcludes(req.user.role)) {
            return res.status(403).json({message: "You don't have access to this page"});
        }
        next();
    }
}