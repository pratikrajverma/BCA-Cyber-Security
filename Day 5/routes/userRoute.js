import express from "express";
import { createUser, deleteUser, getuser, updateUser } from "../controllers/user.js";

const router = express.Router()

router.get('/user',  getuser)


router.post('/user', createUser)


router.put('/user/:id', updateUser)

router.delete('/user/:id', deleteUser)

export default router