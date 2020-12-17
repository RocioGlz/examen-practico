const express =require ('express');
const app = express();

app.get('/usuario', function (req, res) {
    res.json ({
        ok: 200,
        msg: 'Usuarios consultados con exito'
    });
});

app.post('/usario', function(req, res) {
    let nombre = req.body.nombre;
    let body = req.body;

    if(nombre === undefined) {
        res.status(400).json({
            ok: 400,
            msg: 'Favor de colocar un nombre'
        });
    } else {
        res.json({
            ok:200,
            msg:'Usuario insertado exitosamente', 
            body:body
        });
    }
});

app.put('/usuario/:id/:nombre', function (req, res){
    let id = req.params.id;
    let nombre = req.params.nombre;

    res.json({
        ok: 200, 
        msg:' Usuario actualizado exitosamente',
        id: id,
        nombre: nombre
    });
});

app.delete('/usuario/:id', function (req, res){
    let id = req.params.id;

    res.json({
        ok: 200,
        msg:'Usuario eliminado exiosamente',
        id:id
    });
});

module.exports = app ;