import AppDataSource from "../../data-source";
import { Product } from "../../entities/products.entity";
import { Storage } from "../../entities/storage.entity";
import { StorageSize } from "../../entities/storage_size.entity";
import { AppError } from "../../erros";
import { iProduct, iProductResponse } from "../../interfaces/products.interface";


const createProductService = async (body:iProduct): Promise<iProductResponse> => {
    const storageRepo = AppDataSource.getRepository(Storage)
    const storageFound = await storageRepo.findAndCountBy({
        row: body.storage.row,
        road: body.storage.road,
        stand: body.storage.stand})
    
    if (storageFound[1] > 0){
        throw new AppError('Storage in use', 400);
    }

    const storageSizeRepo = AppDataSource.getRepository(StorageSize)

    const storageSize = await storageSizeRepo.findOneBy({id:1})

    if (body.storage.road > storageSize.road){
        throw new AppError('The road cannot exceed the maximum number of roads registered in the storage size', 400);
    }
    if (body.storage.row > storageSize.row){
        throw new AppError('The row cannot exceed the maximum number of rows registered in the storage size', 400);
    }
    if (body.storage.stand > storageSize.stand){
        throw new AppError('The stand cannot exceed the maximum number of stands registered in the storage size', 400);
    }

    const productsRepo = AppDataSource.getRepository(Product)
    const product = productsRepo.create({
        ...body
    })
    await productsRepo.save(product)

    const storage = storageRepo.create(body.storage)
    await storageRepo.save(storage)

    const productWithStorage = productsRepo.create({
        ...product,storage
    })
    await productsRepo.save(productWithStorage)
    
    return product
}

export default createProductService