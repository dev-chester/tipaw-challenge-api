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
