import AppDataSource from "../../data-source";
import { Product } from "../../entities/products.entity";
import { iProductResponse } from "../../interfaces/products.interface";

const listOneProductsService = async (product_id:string):Promise<iProductResponse> => {

    const productRepo = AppDataSource.getRepository(Product)
    const product = await productRepo.findOne({
        where:{id: product_id},
        relations:{
            storage:true
        }})
    return product
}

export default listOneProductsService