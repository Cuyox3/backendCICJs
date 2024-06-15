const exp = require('constants');
const express = require('express');
const { constrainedMemory } = require('process');
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use((req,res,next) => {
    console.log('middleware');
    next();
});

app.listen(port, () => {
    console.log('server running on',port);
});

app.get('/clients', (req, res,next) =>  {
    console.log('middleware');
    next();
});

const clients = {
    c1:{
    first_name: "Juan",
    last_name: "Perez",
    spent_amount: 100
    }
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
app.post('/clients/:id', 
    localMv,
    (req, res) =>  {
    const cientId = req.body;
    const client= clients[clientId];
    console.log(client);
    res.status(200).json({
        clients,
        message: "Here the client by id" 
    });
});


// Falta por completar

app.patch('/clients/update_first_name/:id', (req, res) =>  {
    const { id }  = req.params.id; //Destructuring
    const { first_name } = req.body;
    clients[id].first_name = first_name;

    res.status(200).json({
        clients,
        message: "Clients list updating " 
    });
});

app.delete('/clients/:id', (req, res) =>  {
    const { id }  = req.params.id; //Destructuring
    delete clients[id];
    clients[id].first_name = first_name;

    res.status(200).json({
        clients,
        message: "Clients list delete  " 
    });
});