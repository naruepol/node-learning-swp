const fs = require('fs');
fs.watchFile('message.txt', function(curr, prev){
    fs.readFile('message.txt', 'utf8',function(err, data){
        if(err) throw err;
            console.log(data);
    })
})