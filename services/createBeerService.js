import beerRepository from '../repositories/beerRepository.js'

export const createBeer = async (beerData) => {
	const { name, brand, is_premium } = beerData

	if (!name || !brand) throw new Error('Missing beer name or brand')

	const newBeer = {
		name: String(name),
		brand: String(brand),
		is_premium: 'is_premium' in beerData ? Boolean(is_premium) : false,
		registration_date: new Date(),
	}

	const beer = await beerRepository.create(newBeer)

	return beer
}
