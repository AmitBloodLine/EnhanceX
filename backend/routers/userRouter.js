const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');
const verifyToken = require('./verifyToken')
require('dotenv').config();
const jwt = require('jsonwebtoken');

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get("/getall", (req, res) => {
    Model.find({})
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/update', (req, res) => {
    res.send('post update response');
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err);
        });
});

router.post("/authenticate", (req, res) => {
    Model.findOne({ email: req.body.email })
        .then((result) => {
            if (result) {
                new Model(result).comparePassword(req.body.password, (err, isMatch) => {
                    if (err || !isMatch) {
                        console.error("Error authenticating user", err);
                        res.status(500).send({ status: "failed" });
                    } else {

                        const { _id, email, role, username, avatar } = result;
                        const payload = { _id, email, role, username, avatar };

                        jwt.sign(
                            payload,
                            process.env.JWT_SECRET,
                            { expiresIn: '3 days' },
                            (err, token) => {
                                if (err) {
                                    console.error("Error authenticating user", err);
                                    res.status(500).send({ status: "failed" });
                                } else {
                                    console.log("User authenticated");
                                    res.status(200).json({ token, username, role, avatar });
                                }
                            }
                        )
                    }
                });
            } else {
                console.error("Error authenticating user");
                res.status(501).json({ status: "failed" });
            }
        })
        .catch((err) => {
            console.error("Error authenticating user", err);
            res.status(502).json({ status: "failed" });
        });
});

router.get("/authorise", verifyToken, (req,res) => {
res.status(200).json({allowed:true});
})


module.exports = router;

