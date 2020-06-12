var express = require('express');
var router = express.Router();
var Perfume = require('../models/Perfume');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', });
});
router.get('/alta', function(req, res, next) {
  res.render('alta_perfume', { title: 'Express' });
});
router.post('/grabar',(req,res,next)=>{
  var perfume=Perfume({
    nombre: req.body.nombre,
    marca: req.body.marca,
    aroma: req.body.aroma,
    cantidad: req.body.cantidad,
    precio: req.body.precio,
    tipo: req.body.tipo,
  });
  perfume.save((err,datos)=>{
    if(err) res.render('error',{message: err});
    else res.status(201).json(datos);
  });

});
module.exports = router;
