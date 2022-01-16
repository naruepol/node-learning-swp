const fs = require("fs");
const handler = function (err, data){
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
};
fs.readFile("abc.txt", "utf-8", handler);
console.log("next function.....");