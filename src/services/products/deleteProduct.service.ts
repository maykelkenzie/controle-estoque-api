import AppDataSource from "../../data-source"
import { Product } from "../../entities/products.entity"
import { AppError } from "../../erros"

const deleteProductService = async (product_id:string) => {
    const productRepo = AppDataSource.getRepository(Product)
    const product = await productRepo.findOneBy({id:product_id})

    product.isActive = false
    await productRepo.save(product)
    return {}
}

export default deleteProductService