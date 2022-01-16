var express = require('express');
var router = express.Router();

router.get("/user", function(req, res){
    res.json({ code : "007"});
});

router.get("/users/:userId/books/:bookId", function(req, res){
    console.log(req.params);
    res.json(req.params);
});

module.exports = router;