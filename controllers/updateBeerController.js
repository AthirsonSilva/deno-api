import { updateBeer } from '../services/updateBeerService.js'

export default async ({ params, request, response }) => {
	const beerId = params.id

	if (!beerId) {
		response.status = 400
		response.body = { msg: 'Missing beer id' }
		return
	}

	if (!request.hasBody) {
		response.status = 400
		response.body = { msg: 'Invalid beer data' }
		return
	}

	const { name, brand, is_premium } = await request.body().value

	const updatedBeer = await updateBeer(beerId, { name, brand, is_premium })

	response.body = { msg: 'Beer updated', beer: updatedBeer }
}
