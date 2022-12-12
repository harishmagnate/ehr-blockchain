import { Router } from 'express';
import { mnemonicToSeed } from 'bip39';
import sampleRepo from '../repos/sample_repo.js';
import { saveRegistrationData } from '../repos/ehr_mongodb_repo.js';

const router = Router();

router.post('/register', (req, res) => {
    console.log(req.body)
    saveRegistrationData(req.body).catch(console.dir)
    res.send({ success: true }).status(200)
})

/* router.post('/register', (req, res) => {
    console.log(req.body)
    const metadata = {
        type: 'Patient Data',
        app: 'EHR'
    }
    
    mnemonicToSeed(req.body.email).then(keySeed => {
        sampleRepo.postPatientData(keySeed.slice(0, 32), req.body, metadata)        
    });    
    res.send({success: true}).status(200);
}) */

export default router;