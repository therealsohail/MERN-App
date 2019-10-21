const express = require('express');
const router = express.Router();
const Ninja = require('./Models/model');

router.get('/ninja',(req,res) => {
    Ninja.find({})
    .then((ninja) =>{
        res.send(ninja);  
    })
})

router.get('/ninja/:id',(req,res)=>{
    Ninja.findById({_id: req.params.id})
    .then(ninja=>{
        res.send(ninja)
    })
});

router.post('/ninja',(req,res,next) => {
    const ninja  = new Ninja({
        name: req.body.Name,
        rank: req.body.Rank,
        available: req.body.Available
    })
    ninja.save()
    .then((ninja) =>{
        res.send(ninja);  
    }).catch(err => {
        res.send({ error: err.message })
    }); 
})

router.put('/ninja/:id',(req,res) => {
    Ninja.findByIdAndUpdate({_id: req.params.id},{
        name: req.body.Name,
        rank: req.body.Rank,
        available: req.body.Available
    })
    .then(ninja => {
        res.send(ninja)
    })
})

router.delete('/ninja/:id',(req,res) => {
    // console.log(req.params.id);
    Ninja.findByIdAndRemove({_id: req.params.id})
    .then(ninja =>{
        res.send(ninja)
    })
    
})

module.exports = router;