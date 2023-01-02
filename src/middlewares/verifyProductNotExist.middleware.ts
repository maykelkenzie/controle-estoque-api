import {
    Request,
    Response,
    NextFunction
} from 'express';
import AppDataSource from '../data-source';
import { Product } from '../entities/products.entity';
import { AppError } from '../erros';

const verifyProductNotExistMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const productRepo = AppDataSource.getRepository(Product)
    
    const product = await productRepo.findOneBy({id:req.params.product_id})
    if (!product){
        throw new AppError('Product not registered', 400)
    }
    return next()
}

export default verifyProductNotExistMiddleware