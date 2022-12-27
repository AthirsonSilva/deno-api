import { getBeerByBrand } from '../services/getBeerByBrandService.js'

export default async ({ params, response }) => {
	const beerBrand = params.brand

	if (!beerBrand) {
		response.status = 400
		response.body = { msg: 'Missing beer brand' }
		return
	}

	const foundBeer = await getBeerByBrand(beerBrand)

	if (!foundBeer) {
		response.status = 404
		response.body = { msg: `Beer with brand ${beerBrand} not found` }
		return
	}

	response.body = foundBeer
}
