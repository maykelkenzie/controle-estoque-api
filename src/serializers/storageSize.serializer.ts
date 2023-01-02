import * as yup from 'yup'

export const storageSizeUpdate = yup.object().shape({
    road: yup.number().positive('Must be a positive integer').typeError('Must be a positive integer'),
    row: yup.number().positive('Must be a positive integer').typeError('Must be a positive integer'),
    stand: yup.number().positive('Must be a positive integer').typeError('Must be a positive integer')
})