import { Client } from 'https://deno.land/x/postgres/mod.ts'

class Database {
	constructor() {
		this.connect()
	}

	async connect() {
		this.client = new Client({
			user: 'athirson',
			database: 'deno-api',
			hostname: '127.0.0.1',
			password: '',
			port: 5432,
		})

		await this.client.connect()
	}
}

export default new Database().client
