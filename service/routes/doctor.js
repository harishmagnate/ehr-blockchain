import { Router } from 'express';
import { saveRegistrationData } from '../repos/ehr_mongodb_repo.js';

const router = Router();

router.post('/register', (req, res) => {
    console.log(req.body)
    saveRegistrationData(req.body).catch(console.dir)
    res.send({ success: true }).status(200)
})

export default router;