const express = require('express');
const bodyParser = require('body-parser');
const player = require('node-wav-player'); 
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log('Webhook received');
    const payload = req.body;
    const status_check = Number(payload.heartbeat.status);
    console.log(`Status: ${payload.heartbeat.status}`);
    const soundFile = status_check === 0 ? 'error.wav' : 'success.wav';
    const soundPath = path.join(__dirname, soundFile);

    console.log(`Attempting to play: ${soundPath}`);
    

    player.play({
        path: soundPath 
    })
    .then(() => console.log('Playback completed'))
    .catch(err => console.error('Playback failed:', err));

    res.sendStatus(200);
});


app.post('/webhook1', (req, res) => {
    console.log('Webhook1 received');
    const payload = req.body;
    const status_check = Number(payload.heartbeat.status);
    console.log(`Status: ${payload.heartbeat.status}`);
    const soundFile = status_check === 0 ? 'error.wav' : 'success.wav';
    const soundPath = path.join(__dirname, soundFile);

    console.log(`Attempting to play: ${soundPath}`);
    

    player.play({
        path: soundPath 
    })
    .then(() => console.log('Playback completed'))
    .catch(err => console.error('Playback failed:', err));

    res.sendStatus(200);
});

app.post('/webhook2', (req, res) => {
    console.log('Webhook2 received');
    const payload = req.body;
    const status_check = Number(payload.heartbeat.status);
    console.log(`Status: ${payload.heartbeat.status}`);
    const soundFile = status_check === 0 ? 'error.wav' : 'success.wav';
    const soundPath = path.join(__dirname, soundFile);

    console.log(`Attempting to play: ${soundPath}`);
    

    player.play({
        path: soundPath 
    })
    .then(() => console.log('Playback completed'))
    .catch(err => console.error('Playback failed:', err));

    res.sendStatus(200);
});

app.post('/webhook3', (req, res) => {
    console.log('Webhook3 received');
    const payload = req.body;
    const status_check = Number(payload.heartbeat.status);
    console.log(`Status: ${payload.heartbeat.status}`);
    const soundFile = status_check === 0 ? 'error.wav' : 'success.wav';
    const soundPath = path.join(__dirname, soundFile);

    console.log(`Attempting to play: ${soundPath}`);
    

    player.play({
        path: soundPath 
    })
    .then(() => console.log('Playback completed'))
    .catch(err => console.error('Playback failed:', err));

    res.sendStatus(200);
});

app.post('/webhook4', (req, res) => {
    console.log('Webhook4 received');
    const payload = req.body;
    const status_check = Number(payload.heartbeat.status);
    console.log(`Status: ${payload.heartbeat.status}`);
    const soundFile = status_check === 0 ? 'error.wav' : 'success.wav';
    const soundPath = path.join(__dirname, soundFile);

    console.log(`Attempting to play: ${soundPath}`);
    

    player.play({
        path: soundPath 
    })
    .then(() => console.log('Playback completed'))
    .catch(err => console.error('Playback failed:', err));

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Webhooks receiver listening at http://localhost:${port}`);
});

