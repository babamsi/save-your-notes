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
    const duplicate = data.filter(elem => elem.title.toUpperCase() === title.toUpperCase());
    if(duplicate.length < 1) {
        data.push(obj);
        fs.writeFileSync('./note-data.json', JSON.stringify(data));
        console.log('        ')
        console.log('data is created');
        logSecret(obj);
    } else {
        console.log('       ')
        console.log('this title used before');
    }
}
const removeSecret = (title) => {
    let data = fetchSecret();

    const rem = data.filter(elem => elem.title.toUpperCase() !== title.toUpperCase());
    if(rem.length >= 0) {
        fs.writeFileSync('./note-data.json', JSON.stringify(rem));
    }
    return data.length === rem.length
}

const getSecret = (title) => {
    let data = fetchSecret();
    const filt = data.filter(elem => elem.title.toUpperCase() === title.toUpperCase());
    if(filt.length > 0) {
        console.log('     ')
        console.log('       ')
        console.log('Here is your data:');
        console.log('          ');
        return filt[0];
    }
}

const getAllSecret = () => {
    return fetchSecret();
}

const clearAllSecret = () => {
    let data = fetchSecret();
    const cnt = data.length;
    data.length = 0;
    fs.writeFileSync('./note-data.json', data)
    return cnt
}

const logSecret = (secret) => {
    console.log('--------------------');
    console.log('Title:- ', secret.title);
    console.log('Text:- ', secret.body)

}

module.exports = {
    addYourSecret,
    removeSecret,
    getSecret,
    getAllSecret,
    clearAllSecret,
    logSecret
}