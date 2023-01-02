import {
    Request,
    Response,
} from 'express';
import { listStorageSizeService } from '../services/storageSize/listStorageSize.service';
import { updateStorageSizeService } from '../services/storageSize/updateStorageSize.service';


export const listStorageSizeController = async (req:Request, res:Response) => {
    const data = await listStorageSizeService()
    return res.status(200).send(data)
}

export const updateStorageSizeController = async (req:Request, res:Response) => {
    const data = await updateStorageSizeService(req.body)
    return res.status(200).send(data)
}