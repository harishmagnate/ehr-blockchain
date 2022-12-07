var express = require('express');
var router = express.Router();
var patient = require('../Patient');

var sampleRepo = require('../repos/sample_repo.js');

const patientList = [
  new patient ("1001","first Name1", "last Name1", "Email1@123.com"),
  new patient ("1002","first Name2", "last Name2", "Email2@123.com"),
  new patient ("1003","first Name3", "last Name3", "Email3@123.com"),
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  sampleRepo.postData()
  res.send('respond with a resource');
});

router.get('/searchPatients', function(req, res){
  let list = patientList;
  if(req.body.id !== undefined && req.body.id !== "")
  {
      list = patientList.filter(x => x.id === req.body.id);
  }
  res.status(200).json(list);
});

router.post('/registration',(req, res) => {

  let registrationRequest = {
      rirstName : req.body.firstName,
      middleName : req.body.middleName,
      lastName : req.body.lastName,
      phone : req.body.phone,
      emergencyContactNumber : req.body.emergencyContactNumber,
      email : req.body.email,
      nationality : req.body.nationality,
      dateOfBirth : req.body.dateOfBirth,
      preferredLanguage : req.body.preferredLanguage,
      city : req.body.city,
      state : req.body.state,
      country : req.body.country,
      pincode : req.body.pincode,
      address : req.body.address,
      isAttested : req.body.isAttested
  }
  
  return res.status(200);
  
})


module.exports = router;
