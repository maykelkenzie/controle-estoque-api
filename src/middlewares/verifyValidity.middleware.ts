import {
    Request,
    Response,
    NextFunction
} from 'express';
import { AppError } from '../erros';

const verifyValidityMiddleware = (req:Request, res:Response, next:NextFunction) => {
    if (req.validatedBody.validity){
        const newDate = new Date()
        const validity = req.validatedBody.validity
        
        if (validity < newDate){
            throw new AppError('The product cannot be out of date', 400)
        }
    }
    return next()
}

export default verifyValidityMiddleware