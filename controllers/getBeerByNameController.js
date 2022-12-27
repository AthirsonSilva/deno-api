import { getBeerByName } from '../services/getBeerByNameService.js'

export default async ({ params, response }) => {
	const beerName = params.name

	if (!beerName) {
		response.status = 400
		response.body = { msg: 'Missing beer name' }
		return
	}

	const foundBeer = await getBeerByName(beerName)

	if (!foundBeer) {
		response.status = 404
		response.body = { msg: `Beer with name ${beerName} not found` }
		return
	}

	response.body = foundBeer
}
