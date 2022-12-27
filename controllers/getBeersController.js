import { getBeers } from '../services/getBeersService.js'

export default async ({ response }) => {
	response.body = await getBeers()
}
