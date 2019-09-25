const readline = require('readline');
const fs = require('fs');

let file = readline.createInterface({
    input: fs.createReadStream('Hello.java')
});

let lines=0;
let block=false

file.on('line', function(line) {
    //removing all whitespaces
    line=line.replace(/\s/g,'')
    //check if line length is bigger than 0 
    if(line.length>0){
        //check if a line doesnt not start with // comments and not a block
        if(!line.startsWith("//") && block===false){
            lines++
        }else if(!line.startsWith("/*") && block===false){
            //check if the line is a block and setting it true if it is
            lines++
            block=true
        }else if(line.includes("*/") && block===true){
            block=false
        }
    }
});


file.on('close', function(line) {
    console.log('Total lines : ' + lines);
});
module.export={lines}