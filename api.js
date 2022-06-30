const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(3001, () => {
    console.log('Start Server : localhost:3001');
});

const key = {
    apiKey: 'H2KAQ36-DMDMF35-NBABHTF-AE0JP1K',
    uuid: '88a6ab8c-6d1b-478c-aad4-b8e953812b06'
};

app.get('/api/users/:apikey/:type', async (req, res) => {
    let {
        apikey,
        type
    } = req.params;

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)){
        res.send('apikey is not valid')
    } else {
        if(type == 'seoul') {
            let data = [
                {name:"홍길동",city:"seoul"},
                {name:"김철수",city:"seoul"}
            ];
            res.send(data);
        }else if(type == 'jeju') {
            let data = [
                {name:"박지성",city:"jeju"},
                {name:"손흥민",city:"jeju"}
            ];
            res.send(data);
        }else {
            res.send('Type is not correct.');
        }
    }
});