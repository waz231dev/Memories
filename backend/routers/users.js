import express from 'express'
import usersController from '../controllers/users_controller.js'
const router = express.Router()

router.get('/profile', usersController.profile)

export default router;