import { getBeers } from '../services/getBeersService'

export default async ({ response }) => {
	response.body = await getBeers()
}
