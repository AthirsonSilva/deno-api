import beerRepository from '../repositories/beerRepository.js'
import { getBeerById } from './getBeerByIdService.js'

export const updateBeer = async (beerId, beerData) => {
	const beer = await getBeerById(beerId)

	if (Object.keys(beer).length === 0 && beer.constructor === Object) {
		throw new Error('Beer not found')
	}

	const updatedBeer = { ...beer, ...beerData }

	beerRepository.update(beer.id, updatedBeer)

	return updatedBeer
}
