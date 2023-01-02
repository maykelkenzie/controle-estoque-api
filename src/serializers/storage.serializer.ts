import * as yup from 'yup';

export const createStorageSerializer = yup.object().shape({
    road: yup.number().positive('Must be a positive integer').typeError('Must be a positive integer').required(),
    row: yup.number().positive('Must be a positive integer').typeError('Must be a positive integer').required(),
    stand: yup.number().positive('Must be a positive integer').typeError('Must be a positive integer').required()
})

export const updateStorageSerializer = yup.object().shape({
    road: yup.number().positive('Must be a positive integer').typeError('Must be a positive integer'),
    row: yup.number().positive('Must be a positive integer').typeError('Must be a positive integer'),
    stand: yup.number().positive('Must be a positive integer').typeError('Must be a positive integer')
})