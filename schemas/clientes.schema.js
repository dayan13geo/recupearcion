const Joi = require('joi');

const id = Joi.string()
              .uuid();
const razonSocial = Joi.string()
                   //.alphanum()
                   .min(3)
                   .max(15);
const nombre = Joi.string()
                   //.alphanum()
                   .min(3)
                   .max(15);
const apellido = Joi.string()
                   .min(3)
                   .max(15);
const telefono = Joi.number()
                   .integer()
                   .min(10);
const DNI = Joi.number()
                   .integer()
                   .min(10);


const createclienteSchema = Joi.object({
  razonSocial: razonSocial.required(),
  nombre: nombre.required(),
  apellido: apellido.required(),
  telefono: telefono.required(),
  DNI: DNI.required()
});

const updateclienteSchema = Joi.object({
  razonSocial:razonSocial,
  nombre: nombre,
  apellido: apellido,
  telefono: telefono,
  DNI: DNI
});

const getclienteSchema = Joi.object({
  id: id.required()
});

module.exports = {createclienteSchema, updateclienteSchema, getclienteSchema};



