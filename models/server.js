const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.bmiCalculatorPath = '/bmi';

        // Middlewares
        this.middlewares();

        // my app routes
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

        // Middleware to parse the form data
        this.app.use(express.urlencoded({ extended: true }));

    }

    routes() {
        this.app.use( this.bmiCalculatorPath, require('../routes/bmi'));
    }

    listen() {
        this.server = this.app.listen( this.port, () => {
            console.log(`App listening at http://localhost:${this.port}`);
        });
    }

    close(callback) {
        this.server.close(callback);
    }

}




module.exports = Server;
