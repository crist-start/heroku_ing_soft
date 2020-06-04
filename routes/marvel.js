var express = require('express');
var router =express.Router();

var mongoose = require('mongoose');
const Marvel = require('../models/marvel');

router.get('/comic/',(req,res,next) =>{
  Marvel.find({},(err, datos)=> {
    if(err) res.status(500).json({error:"Error en la comnsulta"});
    if(datos) res.status(200).json(datos)
  });
});

router.get('/comic/:idComic',(req,res,next) => {
  Marvel.find(
    {'id':req.params.idComic},
    (err,datos) => {
      if (datos==null) {
        res.status(404).json({mensaje:"no existe datos"});
      } else {
        res.status(200).json(datos);
      }
    }
  );
});

router.post('/comic',(req,res,next)=>{
  var comic= Marvel(
    {
      id:req.body.id,
      nombre:req.body.nombre,
      poder:req.body.poder,
      alias:req.body.alias,
      conCapa:req.body.conCapa,
      imagen:req.body.imagen,
      villano:req.body.villano
    }
  );
  comic.save((err,datos) =>{
    if (err) {
      res.status(404).json({mensaje:"error al guardar"});
    } else {
      res.status(201).jsos(datos);
    }
  });
});

router.delete('/comic',(req,res,next)=> {
  res.status(405).json({mensaje:'accion no permitida'});
});
router.delete('/comic/:idComic',(req,res,next) => {
  Marvel.findOneAndDelete({id: req.params.idComic},(err,datos) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(datos);
    }
  })
});

module.exports=router;
