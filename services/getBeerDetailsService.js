import beerRepository from '../repositories/beerRepository'

export const getBeerDetails = async (beerId) => {
	const beer = await beerRepository.selectById(beerId)

	if (!beer || beer?.length === 0) throw new Error('Beer not found')

	return beer.rowDescription.columns.reduce((acc, element, index) => {
		acc[element.name] = beer.rows[0][index]
		return acc
	}, {})
}
