import Joi from 'joi';

export const companyVerifySchema = Joi.object({
  companyName: { 
    type: String, 
    required: true 
  },
  CIN:Joi.string()
   .max(21)
   .required(/^[A-Z0-9]/,{name:'Cin number'})
   .pattern()
   .messages({
    'string.empty':'CIN must be exactly 21 characters',
    'string.pattern.name':'not a valid {#name}',
    'any.required':'Cin no is required'
   }),
  PAN:Joi.string()
    .max(10)
   .required()
   .pattern(/^[A-Z0-9]/,{name:'Pan number'})
   .messages({
    'string.empty':'Pan must be exactly 21 characters',
    'string.pattern.name':'not a valid {#name}',
    'any.required':'Cin no is required'
   })
});

