import beerRepository from '../repositories/beerRepository'
import { getBeerDetails } from './getBeerDetailsService'

export const updateBeer = async (beerId, beerData) => {
	const beer = await getBeerDetails(beerId)

	if (Object.keys(beer).length === 0 && beer.constructor === Object) {
		throw new Error('Beer not found')
	}

	const updatedBeer = { ...beer, ...beerData }

	beerRepository.update(beerId, updatedBeer)

	return updatedBeer
}
