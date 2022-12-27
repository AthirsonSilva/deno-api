import { createBeer } from '../services/createBeerService.js'
import { getBeerByBrand } from '../services/getBeerByBrandService.js'
import { getBeerByName } from '../services/getBeerByNameService.js'

export default async ({ request, response }) => {
	if (!request.hasBody) {
		response.status = 400
		response.body = { msg: 'Invalid beer data' }
		return
	}

	const { name, brand, is_premium } = await request.body().value

	if (!name || !brand) {
		response.status = 422
		response.body = { msg: 'Incorrect beer data. Name and brand are required' }
		return
	}

	const foundBeer = await getBeerByName(name)
	const foundBeerByBrand = await getBeerByBrand(brand)

	if (foundBeer) {
		response.status = 409
		response.body = { msg: `Beer with name ${name} already exists` }
		return
	}

	const createdBeer = await createBeer({ name, brand, is_premium })

	response.body = { msg: 'Beer created', beer: createdBeer }
}
