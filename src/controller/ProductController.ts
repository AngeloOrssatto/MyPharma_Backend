import { Product } from "../entity/Product";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";

export const getProducts = async (request: Request, response: Response) => {
    const products = await AppDataSource.getRepository(Product).find()
    return response.json(products)
}

export const getProductById = async (request: Request, response: Response) => {
    const { id } = request.params

    const productRepository = AppDataSource.getRepository(Product)
    const product = await productRepository.findOneBy({
        id: Number(id),
    })

    return response.json(product)
}

export const createProducts = async (request: Request, response: Response) => {
    const { name, description, price } = request.body
    
    const product = new Product()
    product.name = name
    product.description = description
    product.price = price

    await AppDataSource.manager.save(product)
    return response.json(product)
}

export const updateProducts = async (request: Request, response: Response) => {
    const { id } = request.params
    const { name, description, price } = request.body
    
    const productRepository = AppDataSource.getRepository(Product)
    const product = await productRepository.findOneBy({
        id: Number(id),
    })

    product.name = name
    product.description = description
    product.price = price
    await productRepository.save(product)
    return response.json(product)
}

export const removeProducts = async (request: Request, response: Response) => {
    const { id } = request.params

    const productRepository = AppDataSource.getRepository(Product)
    const product = await productRepository.findOneBy({
        id: Number(id),
    })

    await productRepository.remove(product)
    return response.json(product)
}
