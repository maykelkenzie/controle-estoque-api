import {
    Request,
    Response,
} from 'express';
import createProductService from '../services/products/createProduct.service';
import deleteProductService from '../services/products/deleteProduct.service';
import listAllProductsService from '../services/products/listAllProducts.service';
import listOneProductsService from '../services/products/listOneProduct.service';
import updateProductService from '../services/products/updateProduct.service';

export const createProductController = async (req: Request, res: Response) => {
    const data = await createProductService(req.body)
    return res.status(201).send(data)
}

export const listAllProductsController = async (req:Request, res: Response) => {
    const data = await listAllProductsService()
    return res.status(200).send(data)
}

export const listOneProductController = async (req:Request, res: Response) => {
    const data = await listOneProductsService(req.params.product_id)
    return res.status(200).send(data)
}

export const updateProductController = async (req:Request, res: Response) => {
    const data = await updateProductService(req.validatedBody, req.params.product_id)
    return res.status(200).send(data)
}

export const deleteProductController = async (req:Request, res: Response) => {
    await deleteProductService(req.params.product_id)
    return res.status(204).send()
}