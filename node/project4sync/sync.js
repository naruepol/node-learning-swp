//Synchoronous Control Flow

const fs = require('fs');
data = fs.readFileSync('abc.txt', 'utf8');
console.log(data);
console.log("somthing else");