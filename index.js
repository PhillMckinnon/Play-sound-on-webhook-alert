const express = require('express');
const bodyParser = require('body-parser');
const wavPlayer = require('node-wav-player'); // Initialize the play-sound library

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log('Webhook received:', req.body);

    wavPlayer.play({
        path: 'alert.wav', 
    }).then(() => {
        console.log('Sound played successfully');
    }).catch((err) => {
        console.error('Error playing sound:', err);
    });

    res.status(200).send('Webhook received and sound played');
});

app.post('/webhook1', (req, res) => {
    console.log('Webhook1 received:', req.body);

    wavPlayer.play({
        path: 'alert1.wav', 
    }).then(() => {
        console.log('Sound played successfully');
    }).catch((err) => {
        console.error('Error playing sound:', err);
    });

    res.status(200).send('Webhook1 received and sound played');
});

app.post('/webhook2', (req, res) => {
    console.log('Webhook2 received:', req.body);

    wavPlayer.play({
        path: 'alert2.wav', 
    }).then(() => {
        console.log('Sound played successfully');
    }).catch((err) => {
        console.error('Error playing sound:', err);
    });

    res.status(200).send('Webhook2 received and sound played');
});

app.post('/webhook3', (req, res) => {
    console.log('Webhook3 received:', req.body);

    wavPlayer.play({
        path: 'alert3.wav', 
    }).then(() => {
        console.log('Sound played successfully');
    }).catch((err) => {
        console.error('Error playing sound:', err);
    });

    res.status(200).send('Webhook3 received and sound played');
});

app.post('/webhook4', (req, res) => {
    console.log('Webhook4 received:', req.body);

    wavPlayer.play({
        path: 'alert4.wav', 
    }).then(() => {
        console.log('Sound played successfully');
    }).catch((err) => {
        console.error('Error playing sound:', err);
    });

    res.status(200).send('Webhook4 received and sound played');
});

app.listen(port, () => {
    console.log(`Webhooks receiver listening at http://localhost:${port}`);
});

