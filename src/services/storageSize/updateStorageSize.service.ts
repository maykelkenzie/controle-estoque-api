import AppDataSource from "../../data-source"
import { StorageSize } from "../../entities/storage_size.entity"
import { iStorageSizeResponse, iStorageSizeUpdate } from "../../interfaces/storageSize.interface"

export const updateStorageSizeService = async (body: iStorageSizeUpdate): Promise<iStorageSizeResponse> => {
    const storageSizeRepo = AppDataSource.getRepository(StorageSize)
    const storageSize = await storageSizeRepo.findOneBy({id: 1})
    const updatedStorageSize = storageSizeRepo.create({
        ...storageSize,
        ...body
    })
    await storageSizeRepo.save(updatedStorageSize)
    return updatedStorageSize
}