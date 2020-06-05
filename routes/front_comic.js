var express = require('express');
var router = express.Router();
const request = require('request');

/* GET users listing. */
router.get('/listar',(req,res,next)=>{
  request.get('http://ingsoftceut.herokuapp.com/marvel/api/comic/',(err,response,body) =>{
    if(err) response.status(404).json({mensaje:'error al consumir get comic'})
    else res.render('comic_view',{'datos':JSON.parse(body)});
  });
});

module.exports = router;
