require ('./config/config')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

 
app.get('/', function (req, res) {
  res.send('<h1> Bienvenito a mi proyecto integrador SERVIDOR REST</h1>');
});

//app.use(require('./routers/departamento'));
//app.use(require('./routers/empleado'));
//app.use(require('./routers/usuario'));

mongoose.connect('mongodb://localhost:27017/examen', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('El servidor esta en linea en el puerto ',process.env.PORT);
})