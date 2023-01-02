import express from "express"
import 'express-async-errors'
import { handleError } from "./erros"
import productRouter from "./routes/products"
import storageRouter from "./routes/storage"

const app = express()

app.use(express.json())
app.use('/products', productRouter)
app.use('/storage', storageRouter)
app.use(handleError)


export default app