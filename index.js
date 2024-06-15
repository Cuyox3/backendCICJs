const express = require('express');
const { constrainedMemory } = require('process');
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
    res.status(200).json({
        clients,
        message: "Clients list"
    });
});

app.post('/clients', (req, res) =>  {
    const info = req.body;
    const clientsAmount = (Object.keys(clients).length + 1);
    console.log(clientsAmount);
    clients [clientsAmount] = info;
    console.log(clients);
    res.status(201).json({
        clients,
        message: "Clients list" 
    });
});


app.patch('/clients/update_first_name/:id', (req, res) =>  {
    const { id }  = req.params.id; //Destructuring
    const { first_name } = req.body;
    clients[id].first_name = first_name;
    const clientsAmount = (Object.keys(clients).length + 1);
    console.log(clientsAmount);
    clients [clientsAmount] = info;
    console.log(clients);
    res.status(201).json({
        clients,
        message: "Clients list updating " 
    });
});