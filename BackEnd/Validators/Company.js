import Joi from 'joi'
export const companyschema=Joi.object({

    name:Joi.string()
    .required()
    .min(2)
    .max(50)
    .pattern(/^[A-Za-z\s]+$/,{name:'alphabetic characters'})
    .messages({
        'string.empty':'Name is required',
        'string.min':'min 2 characters are required',
        'string.max':'max 50 characters are allowed',
        'string.pattern.name':'Name can only contain{#name}'

    }),
    email:Joi.string()
    .lowercase()
    .required()
    .pattern(/^[A-za-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/)
    .messages({
        'string.empty':'Email is required',
        'string.pattern.name':'Email must follow user@domain.com',
        'any.required':'Email is required'

    }),
    password:Joi.string()
    .required()
    .min(8)
    .pattern(/[A-Z]/,{name: 'uppercase letter'})
    .pattern(/[a-z]/,{name:'lowercase letter'})
    .pattern(/[0-9]/,{name:'digits are required'})
    .pattern(/[@$!%*?&]/,{name:'special character (@$!%*?&)'})
    .message({
        'string.empty':'password is required',
        'string.min':'Password must be 8 characters long',
        'string.pattern.name':'Password has missing {#name}',
        'any.required':'password is required'
    }),
    image: Joi.string()
    .required()
    .uri({ scheme: ['http', 'https'] }) // Only allow HTTP/HTTPS URLs
    .messages({
      'string.empty': 'Image URL is required',
      'string.uri': 'Image must be a valid URL (e.g., https://example.com/image.jpg)',
      'any.required': 'Image URL is required',
    }),
});

