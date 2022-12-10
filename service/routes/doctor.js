const express = require('express');
const router = express.Router();
const bip39 = require('bip39')
const sampleRepo = require('../repos/sample_repo.js');

router.post('/register', (req, res) => {
    console.log(req.body)
    const metadata = {
        type: 'Doctor Data',
        app: 'EHR'
    }

    bip39.mnemonicToSeed(req.body.email).then(keySeed => {
        sampleRepo.postPatientData(keySeed.slice(0, 32), req.body, metadata)        
    });    
    res.send({success: true}).status(200);
})

module.exports = router;