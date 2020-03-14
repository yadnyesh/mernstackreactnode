const User = require("../models/user");

exports.sayHi = (req, res) => {
    res.json({message: "hello there"});
}; 

exports.signup = (req, res) => {
    //console.log("req.body", req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err
            })
        }
        res.json({
            user
        });
    });
}; 