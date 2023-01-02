import {
    Request,
    Response,
    NextFunction
} from 'express';
import AppDataSource from '../data-source';
import { Product } from '../entities/products.entity';
import { AppError } from '../erros';

const verifyProductIsActiveMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const productRepo = AppDataSource.getRepository(Product)
    console.log(req.params.product_id,'================');
    
    const product = await productRepo.findOneBy({id:req.params.product_id})
    if (!product.isActive){
        throw new AppError('Product is not active', 400)
    }
    return next()
}

export default verifyProductIsActiveMiddleware