import { deleteBeer } from '../services/deleteBeerService.js'
import { getBeerById } from '../services/getBeerByIdService.js'

export default async ({ params, response }) => {
	const beerId = params.id

	if (!beerId) {
		response.status = 400
		response.body = { msg: 'Missing beer id' }
		return
	}

	const foundBeer = await getBeerById(beerId)

	if (!foundBeer) {
		response.status = 404
		response.body = { msg: `Beer with id ${beerId} not found` }
		return
	}

	await deleteBeer(beerId)

	response.body = { msg: 'Beer deleted' }
}
