import { Router } from 'https://deno.land/x/oak/mod.ts'
import createBeer from './controllers/createBeerController.js'
import deleteBeer from './controllers/deleteBeerController.js'
import getBeerByBrand from './controllers/getBeerByBrandController.js'
import getBeerById from './controllers/getBeerByIdController.js'
import getBeerByName from './controllers/getBeerByNameController.js'
import getBeers from './controllers/getBeersController.js'
import updateBeer from './controllers/updateBeerController.js'

const router = new Router()

router
	.get('/beers', getBeers)
	.get('/beers/id/:id', getBeerById)
	.get('/beers/name/:name', getBeerByName)
	.get('/beers/brand/:brand', getBeerByBrand)
	.post('/beers', createBeer)
	.put('/beers/:id', updateBeer)
	.delete('/beers/:id', deleteBeer)

export default router
