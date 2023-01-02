import { Router } from "express";
import { createProductController, deleteProductController, listAllProductsController, listOneProductController, updateProductController } from "../controllers/products.controller";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import verifyProductIsActiveMiddleware from "../middlewares/verifyProducIsActive.middleware";
import verifyProductExistMiddleware from "../middlewares/verifyProductExist.middleware";
import verifyProductNotExistMiddleware from "../middlewares/verifyProductNotExist.middleware";
import verifyValidityMiddleware from "../middlewares/verifyValidity.middleware";
import { createProductSerializer, updateProductSerializer } from "../serializers/product.serializer";


const productRouter = Router()

productRouter.post('',
validateSchemaMiddleware(createProductSerializer),
verifyProductExistMiddleware,
verifyValidityMiddleware,
createProductController
)
productRouter.get('', listAllProductsController)
productRouter.get('/:product_id',
verifyProductNotExistMiddleware,
verifyProductIsActiveMiddleware,
listOneProductController
)
productRouter.patch('/:product_id',
validateSchemaMiddleware(updateProductSerializer),
verifyProductNotExistMiddleware,
verifyProductIsActiveMiddleware,
verifyValidityMiddleware,
updateProductController
)
productRouter.delete('/:product_id',
verifyProductNotExistMiddleware,
verifyProductIsActiveMiddleware,
deleteProductController)

export default productRouter