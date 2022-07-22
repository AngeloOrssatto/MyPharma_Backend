import { Router, Request, Response } from 'express'
import { getProducts, getProductById, createProducts, updateProducts, removeProducts } from './controller/ProductController'

const routes = Router()

routes.get('/products', getProducts)
routes.get('/products/:id', getProductById)
routes.post('/products', createProducts)
routes.put('/products/:id', updateProducts)
routes.delete('/products/:id', removeProducts)

export default routes