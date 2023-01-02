import {
    Request,
    Response,
    NextFunction
} from 'express';
import AppDataSource from '../data-source';
import { Product } from '../entities/products.entity';
import { AppError } from '../erros';

const verifyProductExistMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const productRepo = AppDataSource.getRepository(Product)
    const product = await productRepo.findBy({name:req.body.name})
    
    if (product.length > 0){
        throw new AppError('Product as already registered', 400)
    }
    return next()
}

export default verifyProductExistMiddleware