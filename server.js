const express = require('express');

const app = express();

const port = 3000;

app.use(express.static(__dirname));


app.get('/', (req, res) => {

    const tabuada = parseInt(req.query.tabuada) || 1; 
    const sequencia = parseInt(req.query.sequencia) || 10; 

    
    let resultado = `<h1>Tabuada do ${tabuada}</h1><ul>`;
    for (let i = 0; i <= sequencia; i++) {
        resultado += `<li>${tabuada} x ${i} = ${tabuada * i}</li>`;
    }
    resultado += '</ul>';

    
    res.send(`
        <html>
        <head>
            <title>Tabuada</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            ${resultado}
        </body>
        </html>
    `);
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
