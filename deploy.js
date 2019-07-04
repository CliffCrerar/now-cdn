const path = require('path');
const create = require('s3-website').s3site;
const deploy = require('s3-website').deploy,
    config = require('./.s3-website.json'),
    AWS = require('aws-sdk'),
    s3 = new AWS.S3({ region: config.region });


// create((err, website) => {
//     if (err) {
//         throw err;
//         console.log('ERR: ', err)
//     }
//     console.log(website);
// });


deploy(s3, config, (err, website) => {
    if (err) {
        throw err;
    }
    console.log(website);
})