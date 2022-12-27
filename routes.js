import { Router } from 'https://deno.land/x/oak/mod.ts'
import createBeer from './controllers/createBeerController.js'
import deleteBeer from './controllers/deleteBeerController.js'
import getBeerDetails from './controllers/getBeerDetailsController.js'
import getBeers from './controllers/getBeersController.js'
import updateBeer from './controllers/updateBeerController.js'

const router = new Router()

router
	.get('/beers', getBeers)
	.get('/beers/:id', getBeerDetails)
	.post('/beers', createBeer)
	.put('/beers/:id', updateBeer)
	.delete('/beers/:id', deleteBeer)

export default router
