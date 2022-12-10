const express = require('express');
const router = express.Router();

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
    if (userDetails.filter(x => x.emailID === req.body.emailID && x.password === req.body.password).length != 0) {
        return res.status(200).json("true");
    } else {
        return res.status(500).json("false");
    }
})

module.exports = router;