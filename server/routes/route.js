import express from 'express'
import { addUser,viewUser } from '../controller/user-controller.js';

const router=express.Router();

router.post('/add',addUser);
router.get('/view',viewUser);


export default router;