import { Router } from "express";
import * as productController from "../controllers/productController"

const router = Router()

router.get("/products", productController.getAllProducts)
router.post("/products", productController.addProduct)
router.put("/products/:id", productController.editProduct)
router.delete("products/:id", productController.deleteProduct)