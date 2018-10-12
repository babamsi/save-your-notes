var fs = require('fs');

const fetchSecret = () => {
    try {
        var lastInfo = fs.readFileSync('./note-data.json');
        return JSON.parse(lastInfo)
    } catch(e) {
        return [];
    }
}


const addYourSecret = (title, body) => {
    let data = fetchSecret();
    let obj = {
        title,
        body
    }
    const duplicate = data.filter(elem => elem.title === title);
    if(duplicate.length < 1) {
        data.push(obj);
        fs.writeFileSync('./note-data.json', JSON.stringify(data));
        console.log('data is created');
        logSecret(obj);
    } else {
        console.log('this title used before');
    }
}
const removeSecret = (title) => {
    let data = fetchSecret();

    const rem = data.filter(elem => elem.title !== title);
    if(rem.length >= 0) {
        fs.writeFileSync('./note-data.json', JSON.stringify(rem));
    }
    return data.length == rem.length
}

const logSecret = (title) => {
    console.log('--------------------');
    console.log('Title:- ', title.title);
    console.log('Text:- ', title.body)

}

module.exports = {
    addYourSecret,
    removeSecret,
    logSecret
}