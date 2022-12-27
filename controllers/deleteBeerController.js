import { deleteBeer } from '../services/deleteBeerService.js'
import { getBeerDetails } from '../services/getBeerDetailsService.js'

export default async ({ params, response }) => {
	const beerId = params.id

	if (!beerId) {
		response.status = 400
		response.body = { msg: 'Missing beer id' }
		return
	}

	const foundBeer = await getBeerDetails(beerId)

	if (!foundBeer) {
		response.status = 404
		response.body = { msg: `Beer with id ${beerId} not found` }
		return
	}

	await deleteBeer(beerId)

	response.body = { msg: 'Beer deleted' }
}
