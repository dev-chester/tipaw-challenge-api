import { Joi } from "express-validation";

export const register = {
    body: Joi.object({
        data: Joi.object({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            phone_number: Joi.string().required(),
            email:Joi.string().email().required(),
            password: Joi.string().min(8).pattern(new RegExp('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=?:]).*$')),
            has_accepted_terms: Joi.boolean().required(),
        }).required()
    })
}


{
    "data": {
        "first_name": "asdf",
        "last_name": "Arellano",
        "phone_number": "324242234234243",
        "email": "chester@gmail.co3m",
        "password": "asdF3^asdff",
        "has_accepted_terms": true
    }
}

{"data" :{
    "first_name":"Chester",
    "last_name":"Arellano",
    "phone_number":"667767565",
    "email":"test@gmail.com",
    "password":"asdfasdfQ1!",
    "has_accepted_terms":true
}
}