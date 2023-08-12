import express from 'express'
import usersController from '../controllers/users_controller.js'
import isAuthenticated from '../middleware/auth.js'
const router = express.Router()

router.get('/profile', isAuthenticated, usersController.profile)
router.post('/register', usersController.register)
router.post('/login', usersController.login)
export default router;