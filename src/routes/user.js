const { Router } = require('express'); //llama a la libreria router que permite entregar rutas
const router = Router();
const user = require('../models/userModel')
const mongoose = require('mongoose')

router.get('/findAll',(req,res)=>{
    user.find().exec()
        .then((docs) => {
            res.status(200).json(docs); //
    })
        .catch((error) => {
            console.log(error)
            res.status(404).json({message: "Not data Found"})
        })
console.log('rev')

});
router.get('/findById/:id',(req,res)=>{

    user.findById(req.params.id).exec()
        .then((docs) => {
            res.status(200).json(docs); //
        })
        .catch((error) => {
            console.log(error)
            res.status(404).json({message: "Not data Found"})
        })
    console.log('rev')

});
router.post('/create',(req,res) => {
    const {body}=req;

    if (body.password !== body.passwordConfirmation) {
        res.status(400).json({ message:'Passwords do not match'});
    }

    const payload = {
        name: body.name,
        email: body.email,
        password: body.password,
        cellPhone : body.cellPhone
    };

    if (Object.values(payload).some((val) => val === null)) {
        res.status(400).json({message: 'Payload must contain name, username, email, password and cellPhone'});
    }

    const myUser = new user({
        _id : new mongoose.Types.ObjectId(),
        name: payload.name,
        email: payload.email,
        password: payload.password,
        cellPhone: payload.cellPhone
    });
    myUser
        .save()
        .then(result => {
        res.status(200).json(result)
        })
        .catch((error)=>{
            console.log(error)
            console.log("hola error")
            res.status(401).json(error)
        })
    });

module.exports = router;


