import * as yup from 'yup';


export const createProductSerializer = yup.object().shape({
    name: yup.string().max(120).required(),
    price: yup.number().positive().required(),
    quantity: yup.number().positive().required(),
    validity: yup.date().required(),
    isActive: yup.boolean().default(true)
})

export const updateProductSerializer = yup.object().shape({
    name: yup.string().max(120),
    price: yup.number(),
    quantity: yup.number(),
    validity: yup.date(),
})

