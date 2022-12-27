import beerRepository from '../repositories/beerRepository'

export const getBeers = async () => {
	const beers = await beerRepository.selectAll()

	return beers.rows.map((beer) => {
		return beers.rowDescription.columns.reduce((acc, element, index) => {
			acc[element.name] = beer[index]
			return acc
		}, {})
	})
}
