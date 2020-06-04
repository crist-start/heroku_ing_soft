var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cristopher','carrera':'ICO',acciones:[{accion:"abrir"},{accion:"cerrar"},{accion:"dormir"}] });
});

router.get('/hola',function (req,res,next) {
  res.render('home',{saludo:"hola mundo desde home"})
});

module.exports = router;
