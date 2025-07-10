import React from 'react'
import Joi from 'joi'
export const email_validation = async(req,res,next) => {
    const data=req.body
    const schema=Joi.object({
        email:Joi.string()
        .lowercase()
        .required()
        .email()
        .messages({
            'string.empty':'Email is required',
            'string.email': 'Please enter a valid email address',
            'any.required':'Email is required'
    
        })
    }).options({
            abortEarly:false
    })
    try{
        const {error,value}=schema.validate(data)
        if(error){
        return res.status(400).json({
        errors:error.details.map((e)=>({
                field:e.context.key,
                message:e.message
            }))
        
  })};

    req.validatedData = value;
        next();
    }
    catch(error){
        return res.json({
            message:false,
            error:error.message
        })
    }
}
export const otp_validation = async (req, res, next) => {
  const data = req.body;

  const schema = Joi.object({
    otp: Joi.string()
      .length(6) // exactly 6 digits
      .pattern(/^[0-9]+$/)
      .required()
      .messages({
        'string.empty': 'OTP is required',
        'string.length': 'OTP must be exactly 6 digits',
        'string.pattern.base': 'OTP must contain only numbers',
        'any.required': 'OTP is required'
      }),
    email: Joi.string().email().optional() // Add email as optional
 
  }).options({ 
     abortEarly: false, 
     stripUnknown: true,
    allowUnknown: true  // This allows other fields to pass through

    });

  try {
    const { error, value } = schema.validate(data, { 
      stripUnknown: true 
    });

    if (error) {
      return res.status(400).json({
        errors: error.details.map((e) => ({
          field: e.context.key,
          message: e.message,
        })),
      });
    }

    req.validatedData = value;
    next();
  } catch (error) {
    return res.json({
      message: false,
      error: error.message,
    });
  }
};

export const password_validation = async (req, res, next)=> {
  const data = req.body;

  const schema = Joi.object({
    password: Joi.string()
      .required()
      .min(8)
      .messages({
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 8 characters long',
        'any.required': 'Password is required',
      })
      .when(Joi.string().min(8), {  // Only check patterns if length ≥8
        then: Joi.string()
          .pattern(/[A-Z]/, 'uppercase letter')
          .pattern(/[a-z]/, 'lowercase letter')
          .pattern(/[0-9]/, 'digit')
          .pattern(/[@$!%*?&]/, 'special character')
          .messages({
            'string.pattern.name': 'Password must contain at least one {#name}',
          }),
      }),
    email: Joi.string().email().optional(),
  }).options({
    abortEarly: false,
    stripUnknown: true,
    allowUnknown: true,
  });

  try {
    const { error, value } = schema.validate(data, { 
      stripUnknown: true 
    });
    if (error) {
      return res.status(422).json({
        errors: error.details.map((e) => ({
          field: e.context.key,
          message: e.message,
        })),
      });
    }

    req.validatedData = value;
    next();
  } catch (error) {
    return res.status(500).json({
      message: false,
      error: error.message,
    });
  }
};

 
    //     .required()
    //     .uri({ scheme: ['http', 'https'] }) // Only allow HTTP/HTTPS URLs
    //     .messages({
    //       'string.empty': 'Image URL is required',
    //       'string.uri': 'Image must be a valid URL (e.g., https://example.com/image.jpg)',
    //       'any.required': 'Image URL is required',
    //     })
    // }).options({
    //         abortEarly:false
    //     });
    // try{
    //     const {error,value}=schema.validate(data)
    //     return res.json({
    //         message:false,
    //         error:error
    //     })
    // }
 // here i write presenece requiered because i nedd al filed to be reuired so if
export const company_validation = async (req, res, next) => {
  const data = req.body;

  const schema = Joi.object({
    CIN: Joi.string()
      .required()
      .length(21) // First check length
      .pattern(/^[A-Z0-9]+$/) // Then check pattern (only if length is 21)
      .messages({
        'string.empty': 'CIN is required',
        'string.length': 'CIN must be exactly 21 characters',
        'string.pattern.base': 'CIN must be uppercase alphanumeric',
        'any.required': 'CIN is required'
      }),

    PAN: Joi.string()
      .required()
      .length(10) // First check length
      .pattern(/^[A-Z]{5}[0-9]{4}[A-Z]$/) // Then check pattern (only if length is 10)
      .messages({
        'string.empty': 'PAN is required',
        'string.length': 'PAN must be exactly 10 characters',
        'string.pattern.base': 'Invalid PAN format. Must be: 5 letters + 4 digits + 1 letter (e.g., ABCDE1234F)',
        'any.required': 'PAN is required'
      })
  }).options({
    abortEarly: false, // Show all errors at once
    stripUnknown: true, // Remove extra fields
    allowUnknown: true // Allow non-validated fields (e.g., email)
  });

  try {
    const { error, value } = schema.validate(data);
    
    if (error) {
      return res.status(400).json({
        errors: error.details.map(e => ({
          field: e.path[0], // 'CIN' or 'PAN'
          message: e.message
        }))
      });
    }

    // Success: Attach validated data
    req.validatedData = {
      CIN: value.CIN, // Already validated as uppercase
      PAN: value.PAN, // Already validated as correct format
      email: data.email // Optional field
    };
    
    next(); // Proceed to controller
  } catch (error) {
    return res.status(500).json({
      message: "Server error during validation",
      error: error.message
    });
  }
};
// export const company_validation = async (req, res, next) => {
//   const data = req.body;

//   // Government-standard validation (no mock)
//   const schema = Joi.object({
//     CIN: Joi.string()
//       .length(21) // MCA mandates 21 chars
//       .pattern(/^[A-Z0-9]+$/) // Only uppercase alphanumeric
//       .required()
//       .messages({
//         'string.empty': 'CIN is required',
//         'string.length': 'CIN must be 21 characters',
//         'string.pattern.base': 'CIN must be uppercase alphanumeric',
//       }),

//     PAN: Joi.string()
//       .length(10) // Income Tax Dept mandates 10 chars
//       .pattern(/^[A-Z]{5}[0-9]{4}[A-Z]$/) // Strict PAN format (e.g., ABCDE1234F)
//       .required()
//       .messages({
//         'string.empty': 'PAN is required',
//         'string.length': 'PAN must be 10 characters (e.g., ABCDE1234F)',
//         'string.pattern.base': 'Invalid PAN. Format: ABCDE1234F',
//       })
//   }).options({
//      abortEarly: false, 
//     stripUnknown:false,
//     allowUnknown:false});

//   const { error, value } = schema.validate(data);
  
//   if (error) {
//     return res.status(400).json({
//       errors: error.details.map(err => ({
//         field: err.path[0], // 'CIN' or 'PAN'
//         message: err.message
//       }))
//     });
//   }

//   // Convert to uppercase to match government records
//   req.validatedData = {
//     CIN: value.CIN.toUpperCase(),
//     PAN: value.PAN.toUpperCase()
//   };
//   next();
// };
