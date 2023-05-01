import axios from 'axios'
var URL: string = process.env.NEXT_PUBLIC_APP_URL || '15.235.147.150:3100/'

export class HttpService {
	public async get<T>(url: string, headers: any = {}): Promise<T> {
		url = URL + url
		const response = await axios.get(url, { headers })
		return response.data as T
	}

	public async post<T>(
		url: string,
		body: any,
		headers: any = {}
	): Promise<T> {
		url = URL + url
		const response = await axios.post(url, body, {
			headers: headers,
		})
		return response.data as T
	}

	public async put<T>(url: string, body: any, headers: any = {}): Promise<T> {
		url = URL + url
		const response = await axios.put(url, body, { headers })
		return response.data as T
	}

	public async delete<T>(url: string, headers: any = {}): Promise<T> {
		url = URL + url
		const response = await axios.delete(url, { headers })
		return response.data as T
	}

	public async patch<T>(
		url: string,
		body: any,
		headers: any = {}
	): Promise<T> {
		url = URL + url
		const response = await axios.patch(url, body, { headers })
		return response.data as T
	}
}
