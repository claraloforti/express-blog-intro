const express = require('express');
const app = express();
const port = 3000;

// Attivazione cartella "public" per uso file statici
app.use(express.static('public'));

// Rotta index dell'APP
app.get('/', (req, res) => {
    res.send("<h1>Server del mio blog</h1>")
})

// Rotta bacheca
app.get('/bacheca', (req, res) => {
    // Dati da restituire a /bacheca
    const food = [
        {
            id: 1,
            name: "Ciambellone",
            image: "imgs/ciambellone.jpeg",
            ingredients: ["farina", "lievito", "uova", "zucchero"],
        }, {
            id: 2,
            name: "Cracker barbabietola",
            image: "imgs/cracker_barbabietola.jpeg",
            ingredients: ["cracker", "barbabietola"],
        }, {
            id: 3,
            name: "Pane fritto",
            image: "imgs/pane_fritto_dolce.jpeg",
            ingredients: ["pane", "zucchero", "olio"],
        }, {
            id: 4,
            name: "Pasta barbabietola",
            image: "imgs/pasta_barbabietola.jpeg",
            ingredients: ["pasta", "barbabietola"],
        }, {
            id: 5,
            name: "Torta paesana",
            image: "imgs/torta_paesana.jpeg",
            ingredients: ["farina", "cacao", "burro"],
        },
    ];

    // Invio i dati al client in formato json
    res.json(food);
})

// Metto in ascolto il server sulla porta 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})