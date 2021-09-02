import express from "express";

const app = express();
let counter = 0;

app.get('/', (req, res) => {
    res.send(`Counter: ${counter}`);
});

app.post('/inc', (req, res) => {
    counter++;
    res.send(`Counter: ${counter}`);
});

app.post('/dec', (req, res) => {
    counter--;
    res.send(`Counter: ${counter}`);
});

app.post('/die', (req, res) => {
    setTimeout(() => {
        console.log('Dying Now!');
        killServer(server);
    }, 500)
    res.send(`Server will die.\n`);
});

function killServer(server) {
    server.close();
}

const port = 3420;
const server = app.listen(port, () => {
    console.log("Counter app listening on http://localhost:" + port);
});