import express from 'express'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'
import validateRequest from '../../middleware/validateRequest'
const router = express.Router()

// create new user
router.post(
  '/signup',
  validateRequest(UserValidation.userValidationSchema),
  UserController.createUser
)
// get all user
router.get('/users', UserController.getAllUsers)

export const UserRoutes = router
