const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const data = require('./data.json');

const indexEjsPath = path.resolve(__dirname,'ejs/index.ejs');
const outputPath = path.resolve(__dirname,'../index.html');
const ejsData = {data};

ejs.renderFile(indexEjsPath, ejsData, null, function(err, str){
    if(err){console.log(err)}
    else{
        fs.writeFile(outputPath,str,function(err){
            console.log( err );
        }); 
    }
});