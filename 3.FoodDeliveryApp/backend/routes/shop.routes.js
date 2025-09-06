import {Router} from 'express'
import { createEditShop, getMyShop, getShopByCity } from '../controllers/shop.controllers.js';
import isAuth from '../middleware/isAuth.js';
import { upload } from '../middleware/multer.js';



const shopRouter=Router();


shopRouter.post("/create-edit",isAuth,upload.single("image") ,createEditShop);
shopRouter.get("/get-my",isAuth,getMyShop)
shopRouter.get("/get-by-city/:city",isAuth,getShopByCity)

export default shopRouter