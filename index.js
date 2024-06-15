const express = require('express');
const app = express();

const port = 3000

app.listen(port, () => {
    console.log('server running on',port);
});


const clients = {
    first_name: "Juan",
    last_name: "Perez",
    spent_amount: 100
}

app.get('/clients', (req, res) =>  {
    res.json(clients)
});