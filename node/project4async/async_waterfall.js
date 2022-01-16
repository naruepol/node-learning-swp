const async = require("async");
const step1 = function (cb) {
    console.log("run step 1");
    cb(null, "value1", "Value2");
};
const step2 = function (v1, v2, cb) {
    console.log("run step 2");
    cb(null, "Success");
};
const finalStep = function (err, result) {
    //business logic
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
};
async.waterfall([step1, step2], finalStep);