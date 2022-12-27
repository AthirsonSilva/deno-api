import beerRepository from '../repositories/beerRepository.js'

export const getBeerByBrand = async (beerBrand) => {
	const beers = await beerRepository.selectByBrand(beerBrand)

	if (!beers || beers?.length === 0) throw new Error('Beer not found')

	return beers.rows.map((beer) => {
		return beers.rowDescription.columns.reduce((acc, element, index) => {
			acc[element.name] = beer[index]
			return acc
		}, {})
	})
}
