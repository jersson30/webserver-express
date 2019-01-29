const http = require('http');
http.createServer((req, res) => {
        //res.write('Hola Mundo');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        //res.write('Hola Mundo');
        let salida = {
            nombre: 'Jersson',
            edad: 32,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();
        //res.end;

    })
    .listen(3000);

console.log('Escuchando el puerto 3000');