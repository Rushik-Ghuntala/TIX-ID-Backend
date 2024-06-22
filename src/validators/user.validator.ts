import Joi from 'joi' 

let validationSchema = {
    
    email: Joi.string().required(),
    password: Joi.string().min(4).max(12).required(),
};

export const Create = Joi.object().keys(validationSchema);