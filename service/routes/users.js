import { Router } from 'express';
import patient from '../Patient';
import sampleRepo from '../repos/sample_repo.js';

const router = Router();

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

router.get('/searchPatients/:id', function(req, res){
  // let list = patientList;
  let list = []
  id = req.params.id
  if(id !== undefined && id !== "")
  {
    console.log("id : ",id)
      list = patientList.filter(x => x.id === id);
  }
  res.status(200).json(list);
});

export default router;
