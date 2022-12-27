import { createBeer } from '../services/createBeerService.js'

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

	const createdBeer = await createBeer({ name, brand, is_premium })

	response.body = { msg: 'Beer created', beer: createdBeer }
}
