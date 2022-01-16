const async = require("async")
const step1 = function(cb) {
    console.log("Step 1 Start");
    setTimeout(function () {
        console.log("Step 1 End");
        cb(null, "Step 1 Success");
    },200);
};
const step2 = function(cb) {
    console.log("Step 2 Start");
    setTimeout(function () {
        console.log("Step 2 End");
        cb(null, "Step 2 Success");
    },100);

};
const finalStep = function(err, resp){
    console.log("final step");
    if(err){
        console.log(err);
    } else {
        console.log(resp);
        // result is now equal ['Step1', 'Step2']
    }
};

async.parallel([step1, step2], finalStep);