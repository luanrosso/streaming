import { Router } from 'express';
import streamController from '../controllers/stream.controller';

const router: Router = Router();

router.get('/streams', streamController.findAll)
router.get('/streams/search', streamController.search)
router.get('/streams/:id', streamController.findById)
router.post('/streams', streamController.create)
router.put('/streams/:id', streamController.update)
router.delete('/streams/:id', streamController.delete)

export default router;