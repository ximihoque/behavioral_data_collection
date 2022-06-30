const fs = require('fs');


function readQuestion(question_num) {
    let _creds = fs.readFileSync('../questions/'+ question_num + '.json');
    return JSON.parse(_creds);
}
module.exports = { readQuestion }