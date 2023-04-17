import express, { Router } from 'express'
import { allActivities } from '../controllers/activities';
import {countries, countriesById} from '../controllers/countries'
import { orderFilter, continentFilter, } from '../controllers/filters'

const router: Router = express.Router();

router.get('/orderFilter/:order',orderFilter) //params
      .get('/continentFilter', continentFilter) //query
      .get('/activities', allActivities) // no params
      .get('/:id', countriesById) //params
      .get('/', countries) // no params

export default router