// initializations
const csvFile = 'customer-data.csv';
const jsonFile = 'customer-data.json';
const csv = require('csvtojson');
const fs = require('fs');
// logic
console.log('starting of conversion of ' + csvFile+ ' into ' + jsonFile);
try{
    csv()
    .fromFile(csvFile)
    .then((jsonObj) =>{
        fs.writeFileSync(jsonFile, JSON.stringify(jsonObj));
        console.log('conversion complete');
    });
}
catch(error){
    console.log(error);
}

