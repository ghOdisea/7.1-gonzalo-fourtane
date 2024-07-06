/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { sendMessage } from '../controllers/message.controller'
import { protectRoute } from '../middleware/protectRoute'

const router = express.Router()

router.post('/send/:id', protectRoute, sendMessage)

export default router