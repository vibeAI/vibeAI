//RUTAS DE USERS

const express = require('express')
const winston = require('winston')
const bcrypt = require("bcrypt");
const {User , validateBody} = require('../models/user_model')
const validator = require("../middleware/joiValidator");
const router = express.Router()
const Joi = require("joi");


router.get('/all', async (req, res) => {
    
    res.send (await Users.find({}))
    
})

const reqSchema = Joi.object({
    email: Joi.string()
      .required()
      .email()
      .messages({ "any.required": `El campo "email" es requerido` }),
    password: Joi.string()
      .required()
      .messages({ "any.required": `El campo "password" es requerido` }),
  });

router.post("/", validator(reqSchema), async (req, res) => {

    console.log("hola")
  
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email y password invalidos");
  
    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) return res.status(400).send("Email y password invalidos");
  
    const token = user.generateToken();
    res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send("Usuario autentificado");
  });

//CREAR NUEVO USUARIO
router.post('/create', validateBody, async (req, res) => {
    let user = await Users.findOne({email: req.body.email});
    if (user) return res.status(400).send("Ya existe un usuario registrado con ese nombre o e-mail.");


    user = new Users(req.body); 

    const salt = await bcrypt.genSalt(10);
    console.log(salt)
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
    await user.save()

    // res.send({username: user.username, email: user.email})
    // winston.info('Nuevo/a usuario/a en la la base de datos.')

    const token = user.generateToken();
    res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send('Nuevo/a usuario/a en la la base de datos.');

});

//EDITAR USUARIO
router.put('/edit/:email', async (req, res) => {
    const user = await Users.findOneAndUpdate({id: req.params.email}, req.body)
    res.send(user)
    winston.info(`Editado: ${req.params.email}`)
})



module.exports = router