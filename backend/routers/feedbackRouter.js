const express = require('express');
const router = express.Router();
const Model = require('../models/feedbackModel');

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

router.get('/getall', (req, res) => {
    res.send('post getall response');
});

router.get('/update', (req, res) => {
    res.send('post update response');
});

router.get('/delete', (req, res) => {
    res.send('post delete response');
});

router.post('/authenticate',(req,res) => {
   Model.findOne(req.body)
   .then((result) => {
    if(result){
        res.json(result);
    }else{
        res.status(401).json({message: "Invalide Credential"})
    }
   }).catch((err) => {
    console.log(err);

    res.status(500).json(err);
   });
});

module.exports = router;
