const async = require("async");
const step1 = function (cb){
    console.log("run step 1");
    cb(null, "Step1");
};
const step2 = function (cb){
    console.log("run step 2");
    cb(null, "Step2");
};
const finalStep = function (err, result) {
    console.log("final step");
    if(err){
        console.log(err);
    } else {
        console.log(result);
        // result is now equal ['Step1', 'Step2']
    }
}
async.series([step1, step2], finalStep);

