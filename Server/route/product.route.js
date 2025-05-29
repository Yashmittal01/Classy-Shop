import { Router } from "express";
import auth from '../middlewares/auth.js'
import upload from '../middlewares/multer.js'
import { createProduct, deleteProducts, getAllFeaturedProducts, getAllProducts, getAllProductsByCatId, getAllProductsByCatName, getAllProductsByPrice, getAllProductsByRating, getAllProductsBySubCatId, getAllProductsBySubCatName, getAllProductsByThirdLavelCatName, getAllProductsByThirdLevelCatId, getProduct, getProductCount, removeImageFromCloudinary, updateProduct, uploadImages } from "../controllers/product.controller.js";

const productRouter = Router()

productRouter.post('/uploadImages',auth,upload.array('images'),uploadImages)

productRouter.post('/create',auth,createProduct)

productRouter.get('/getAllProducts',getAllProducts)

productRouter.get('/getAllProductsByCatId/:id',getAllProductsByCatId)

productRouter.get('/getAllProductsByCatName',getAllProductsByCatName)

productRouter.get('/getAllProductsBySubCatId/:id',getAllProductsBySubCatId)

productRouter.get('/getAllProductsBySubCatName',getAllProductsBySubCatName)

productRouter.get('/getAllProductsByThirdLevelCatId/:id',getAllProductsByThirdLevelCatId)

productRouter.get('/getAllProductsBySubCatName',getAllProductsByThirdLavelCatName)

productRouter.get('/getAllProductsByPrice',getAllProductsByPrice)

productRouter.get('/getAllProductsByRating',getAllProductsByRating)

productRouter.get('/getAllProductsCount',getProductCount)

productRouter.get('/getAllFeaturedProducts',getAllFeaturedProducts)

productRouter.delete('/:id',deleteProducts)

productRouter.get('/:id',getProduct)

productRouter.delete("/deleteImage",auth,removeImageFromCloudinary)

productRouter.put("/updateProduct",auth,updateProduct)

export default productRouter