import express from 'express'
import { findUserById } from '../controllers/userController.js';
const userRouter=express.Router()

userRouter.get('/:id',findUserById);

export default userRouter;