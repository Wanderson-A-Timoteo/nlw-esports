import express from "express";

const app = express()

app.get('/games', (request, response) => {
    return response.json([]);
});

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
    //const gamedId =  request.params.id;
    return response.json([
        {id: 1, name: 'Anúncio 01'},
        {id: 2, name: 'Anúncio 02'},
        {id: 3, name: 'Anúncio 03'},
        {id: 4, name: 'Anúncio 04'}
    ])
})

app.get('/ads/:id/discord', (request, response) => {
    //const adId =  request.params.id;
    return response.json([])
})
app.listen(3333)