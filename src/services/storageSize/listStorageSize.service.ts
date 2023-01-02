import AppDataSource from "../../data-source"
import { StorageSize } from "../../entities/storage_size.entity"
import { iStorageSizeResponse } from "../../interfaces/storageSize.interface"

export const listStorageSizeService = async (): Promise<iStorageSizeResponse> => {
    const storageSizeRepo = AppDataSource.getRepository(StorageSize)
    const storage = await storageSizeRepo.findOneBy({id: 1})
    return storage
}