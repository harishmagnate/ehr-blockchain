import { Router } from 'express';
import { searchByUserNamePassword } from '../repos/ehr_mongodb_repo.js';

const router = Router();

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

router.post('/', (req, res) => {
    const loginData = req.body
    searchByUserNamePassword(loginData).then(response => {
        console.log(response);
        if (response && response.firstName && response.password === loginData.password) {
            return res.status(200).json("true");
        } else {
            return res.status(500).json("false");
        }
    }).catch(error => {
        log.error(error)
        return res.status(500).json("false");
    })
    
})

export default router;