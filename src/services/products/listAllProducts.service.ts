import AppDataSource from "../../data-source";
import { Product } from "../../entities/products.entity";
import { iProductResponse } from "../../interfaces/products.interface";

const listAllProductsService = async ():Promise<iProductResponse[]> => {

    const productRepo = AppDataSource.getRepository(Product)
    const products = await productRepo.find({
        relations:{
            storage:true
        }
    })
    return products
}

export default listAllProductsService