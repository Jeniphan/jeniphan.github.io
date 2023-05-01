export class HttpService {
	public async get<T>(url: string, headers: any = {}): Promise<T> {
		try {
			const response = await fetch(url, { headers })
			if (!response.ok) {
				throw new Error(`Request failed with status ${response.status}`)
			}
			return (await response.json()) as T
		} catch (error) {
			console.error(error)
			return null
		}
	}

	public async post<T>(
		url: string,
		body: any,
		headers: any = {}
	): Promise<T> {
		const response = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify(body),
		})
		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`)
		}
		return (await response.json()) as T
	}

	public async put<T>(url: string, body: any, headers: any = {}): Promise<T> {
		const response = await fetch(url, {
			method: 'PUT',
			headers,
			body: JSON.stringify(body),
		})
		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`)
		}
		return (await response.json()) as T
	}

	public async delete<T>(url: string, headers: any = {}): Promise<T> {
		const response = await fetch(url, {
			method: 'DELETE',
			headers,
		})
		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`)
		}
		return (await response.json()) as T
	}
}
