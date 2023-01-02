import AppDataSource from "../../data-source";
import { Product } from "../../entities/products.entity";
import { AppError } from "../../erros";
import { iProductUpdate,iProductResponse } from "../../interfaces/products.interface";

const updateProductService = async (body:iProductUpdate, product_id:string): Promise<iProductResponse> => {
    const productRepo = AppDataSource.getRepository(Product)
    const product = await productRepo.findOneBy({id: product_id})

    if(body.validity && !body.quantity){
        throw new AppError('To update the validity need update the quantity')
    }
    const updateProduct = productRepo.create({
        ...product,
        ...body
    })

    await productRepo.save(updateProduct)

    return updateProduct
}

export default updateProductService