var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Perfume = require('../models/Perfume');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', });
});

router.post('/',(req,res,next)=>{
  var perfume=Perfume({
    marca: req.body.marca,
    aroma: req.body.aroma,
    cantidad: req.body.cantidad,
    precio: req.body.precio,
    tipo: req.body.tipo,
    foto: req.body.foto
  });

  perfume.save((err,datos)=>{
    if(err) res.render('error',{message: err, });
    else res.status(201).json(datos);
  });

});

router.get('/',(req,res,next)=>{
  Auto.find( {} , (err,datos)=>{
    if(err) res.status(400).json({mensaje:"Error de Api"})
    else res.status(200).json(datos);
  });
});
/*

function nuevoPerfume(){

  var perfume= Perfume({
    Nombre: "Soul Focus" ,
    Marca: "Oriflame",
    Aroma: "Amaderada aeromática",
    Precio: "$350",
    Perfume_para: "Caballero",
    Cantidad: "100ml"
  });

  perfume.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
    }
  });
}



function nuevosPerfumes() {


  var perfumes=[

{Nombre:"Vibrant Hero", Marca: "Toilette", Aroma: "Aromática", Precio: "$350", Perfume_para: "Caballero", Cantidad:"100ml"},

{Nombre:"Náutica Blue", Marca: "Náutica", Aroma: "Acuático", Precio: "$299", Perfume_para: "Caballero", Cantidad:"100ml"},

{Nombre:"Boss Bottled (Set de dos piezas)", Marca: "BOSS", Aroma: "Madera sándalo", Precio: "$1,199", Perfume_para: "Caballero", Cantidad:"100ml"},

{Nombre:"Eternity", Marca: "Calvin Klein", Aroma: "Frutado", Precio: "$1,100", Perfume_para: "Caballero", Cantidad:"100ml"},



{Nombre:"Ralph Lauren", Marca: "Polo", Aroma: "Floral-Frutal", Precio: "$2,100", Perfume_para: "Dama", Cantidad:"100ml"},

{Nombre:"Versace Btight Crystal", Marca: "Toilette", Aroma: "Acuático-Frutal", Precio: "$2,780", Perfume_para: "Dama", Cantidad:"200ml"},

{Nombre:"Miss Dior Eau Parfum", Marca: "Dior", Aroma: "Chipre Floral", Precio: "$3,390", Perfume_para: "Dama", Cantidad:"150ml"},

{Nombre:"La Vie Est Belle", Marca: "Lancome", Aroma: "Floral", Precio: "$2,245", Perfume_para: "Dama", Cantidad:"100ml"},

{Nombre:"Guess 1981", Marca: "Toilette", Aroma: "Floral Amaderado", Precio: "$950", Perfume_para: "Dama", Cantidad:"100ml"},


{Nombre:"Ck One Gold Eau de Toilette", Marca: "Calvin Klein", Aroma: "Amaderada", Precio: "$1,250", Perfume_para: "UNISEX", Cantidad:"100ml"},

{Nombre:"Ck Be", Marca: "Calvin Klein", Aroma: "Floral-Amaderado", Precio: "$600", Perfume_De: "UNISEX", Cantidad:"100ml"},

{Nombre:"Dirham", Marca: "Ard Al Zaafaran", Aroma: "Eau De Parfum", Precio: "$660", Perfume_De: "UNISEX", Cantidad:"100ml"},

{Nombre:"Bass Ketha", Marca: "Hind", Aroma: "Eau De Parfum", Precio: "$5,625", Perfume_De: "UNISEX", Cantidad:"50ml"},

{Nombre:"Everyone", Marca: "Giorgio Valenti", Aroma: "Refrescante", Precio: "$600", Perfume_De: "UNISEX", Cantidad:"100ml"},
 
];

  Perfume.collection.insert(perfumes,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}
*/
module.exports = router;
