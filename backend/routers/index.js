import express from 'express'
import homeController from '../controllers/home_controller.js'
import users from './users.js'
const router = express.Router()

router.get('/', homeController.home)
router.use('/users', users)

export default router;
