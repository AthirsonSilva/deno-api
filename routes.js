import { Router } from 'https://deno.land/x/oak/mod.ts'
import createBeer from './controllers/createBeer.js'
import deleteBeer from './controllers/deleteBeer.js'
import getBeerDetails from './controllers/getBeerDetails.js'
import getBeers from './controllers/getBeers.js'
import updateBeer from './controllers/updateBeer.js'

const router = new Router()

router
	.get('/beers', getBeers)
	.get('/beers/:id', getBeerDetails)
	.post('/beers', createBeer)
	.put('/beers/:id', updateBeer)
	.delete('/beers/:id', deleteBeer)

export default router
