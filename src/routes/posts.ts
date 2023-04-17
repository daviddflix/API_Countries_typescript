import express, { Router } from 'express'
import { activities } from '../controllers/activities'


const router: Router = express.Router();

router.post('/activities', activities)

export default router