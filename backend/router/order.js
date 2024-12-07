import express from 'express';
import orderControllers from '../controllers/orderControllers.js';
const router = express.Router();

router.get('/', orderControllers.orderAll);
router.post('/create',orderControllers.createOrder);

router.route("/:id")  
   .get(orderControllers.oderId)
   .put(orderControllers.updateOrder)
   .delete(orderControllers.deleteOrder)

export default router;