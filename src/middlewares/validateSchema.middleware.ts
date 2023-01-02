import {
    Request,
    Response,
    NextFunction
} from 'express';


const validateSchemaMiddleware = (serializer) => async (req:Request, res: Response, next: NextFunction) =>{
    try {
        const validetad = await serializer.validate(req.body, {
            stripUnknow: true,
            abortEarly: true
        })
        req.validatedBody = validetad

        return next()
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export default validateSchemaMiddleware