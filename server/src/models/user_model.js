//SCHEMA - USERS

const config = require("config");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const Joi = require('joi')
const validator = require("../middleware/joiValidator");
const _ = require("lodash");

const dataSchema = new mongoose.Schema({
    user_id: String,
    prompt_1: String,
    prompt_2: String,
    temp: Number,
    response: Object
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    age: Number,
    gender: String,
    occupation: String,
    data: [dataSchema]

});

userSchema.methods.generateToken = function () {
    return jwt.sign(
      _.pick(this, ["_id", "email"]),
      config.get("jwtPrivateKey")
    );
  };

const User = mongoose.model('User', userSchema)

function validateData(data){
    const schema = Joi.object({
    prompt_1: Joi.string(),
    prompt_2: Joi.string(),
    temp: Joi.number(),
    response: Joi.object()
    })

    return schema.validate(data)
}


const reqSchema = Joi.object({
    username: Joi.string()
    .required()
    .messages({ "any.required": `El nombre de usuario no es valido o está incompleto.` }),
    email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": `El e-mail no es valido o está incompleto.` }),
    password: Joi.string()
    .required()
    .messages({ "any.required": `La contraseña no es valida o está incompleta` }),
    age: Joi.number()
    .messages({ "any.required": `EDAD` }),
    gender: Joi.string()
    .messages({ "any.required": `GENDER` }),
    occupation: Joi.string()
    .messages({ "any.required": `OCUPACIÓN` })
})

exports.User = User;
exports.validateBody = validator(reqSchema);