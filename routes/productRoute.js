import express from 'express'
<<<<<<< HEAD
import { listProducts, addProduct, removeProduct, singleProduct, getBrands } from '../controllers/productController.js'
=======
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/productController.js'
>>>>>>> e193b3b578ea6c9ded6f732ac6cf5a1a061601cb
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
productRouter.post('/remove',adminAuth,removeProduct);
productRouter.post('/single',singleProduct);
<<<<<<< HEAD
productRouter.get('/list',listProducts);
productRouter.get('/brands',getBrands);
=======
productRouter.get('/list',listProducts)
>>>>>>> e193b3b578ea6c9ded6f732ac6cf5a1a061601cb

export default productRouter