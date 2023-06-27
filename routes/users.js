var express = require('express');
var router = express.Router();

var user = {
  email: "rodrigocoelho236@gmail.com",
  password: "123456789"
}

router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});

//O login deve ser implementado em um metodo post
//Assim garantimos que as informações do usuario não fiquem expostas na url
router.post('/Login', function(req, res, next) {
  //Os parametros são pegos do corpo da requisição post
  var email = req.body["email"];
  var password = req.body["password"]
  
  if(password == user.password && email == user.email){
    res.status(200).json({res: true});
  }else{
    //Caso as senhas não batam retornamos 401 não autorizado
    res.status(401).json({res: false});
  }
});

module.exports = router;
