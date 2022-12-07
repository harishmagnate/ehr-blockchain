var express = require('express');
var router = express.Router();

const userDetails = 
[
    {
        emailID: "user1@test.com",
        password: "test123"
    },
    {
        emailID: "user2@test.com",
        password: "test123"
    }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',(req, res) => {
  if(userDetails.filter(x => x.emailID === req.body.emailID && x.password === req.body.password)){
      return res.status(200).json("true");
  }else{
      return res.status(500).json("false");
  }
})

module.exports = router;
