import beerRepository from '../repositories/beerRepository.js'

export const deleteBeer = async (beerId) => {
	if (!beerId) throw new Error('Missing beer id')

	beerRepository.delete(beerId)
}
