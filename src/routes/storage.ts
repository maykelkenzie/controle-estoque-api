import { Router } from "express";
import { listStorageSizeController, updateStorageSizeController } from "../controllers/storageSize.controller";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { storageSizeUpdate } from "../serializers/storageSize.serializer";


const storageRouter = Router()

storageRouter.get('/size',listStorageSizeController)
storageRouter.patch('/size', validateSchemaMiddleware(storageSizeUpdate), updateStorageSizeController)

storageRouter.post('',)
storageRouter.get('',)
storageRouter.get('/:storage_id',)
storageRouter.patch('/:storage_id',)
storageRouter.delete('/:storage_id',)

export default storageRouter