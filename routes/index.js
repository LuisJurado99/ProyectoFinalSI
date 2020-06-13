var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Perfume = require('../models/Perfume');


/* GET home page. */
router.get('/', function(req, res, next) {
  Perfume.find( {} , (err,datos)=>{
    if(err) res.status(400).json({mensaje:"Error de Api"})
    else res.render('index',{datos: datos, title: "Perfumes"})
  });
  
});

router.get('/apiPerfume',(req,res,next)=>{
  Perfume.find( {} , (err,datos)=>{
    res.status(200).json(datos);
  });
});



router.post('/',(req,res,next)=>{
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

router.get('/informar',(req,res,next)=>{
  res.render('alta',{title: "Information"})
});


router.get('/documentar',(req,res,next)=>{
  res.render('documentacion',{title: "Documentation"})
});


router.delete('/',(req,res,next)=>{
  res.status(405).json({mensaje:'Acción no permitida'})
});

router.delete('/',(req,res,next)=>{
  Perfume.findOneAndDelete({'_id':req.params.perfumeId},(err,datos)=>{
    if(err) res.status(404).json(err);
    else  res.status(200).json(datos);
  });
});

module.exports = router;