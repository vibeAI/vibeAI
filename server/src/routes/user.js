const express = require('express')
const winston = require('winston')
const { User, validateBody } = require('../models/user_model')
const validator = require("../middleware/joiValidator");
const router = express.Router()
const Joi = require("joi");

//EDITAR DATOS DE USUARIO
const reqSchema = Joi.object({
  password: Joi.string()
    .required()
    .messages({ "any.required": `Password is required` }),
});

router.put('/edit/:email', validator(reqSchema), async (req, res) => {
  console.log(req.params)

  const user = await User.findOneAndUpdate({ email: req.params.email }, req.body)
  res.send(user)
  winston.info(`Usuario editado: ${req.params.email}`)
})

module.exports = router