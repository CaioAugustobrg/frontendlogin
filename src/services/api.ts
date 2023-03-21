import axios, { Method } from 'axios'

export class ApiService {
  constructor(private endPoint: string) {}

  public get(url: string, params?: any) {
    return this.request('GET', url, params)
  }

  public post(url: string, body: any) {
    return this.request('POST', url, body)
  }

  public put(url: string, body: any) {
    return this.request('PUT', url, body)
  }

  public delete(url: string, params?: any) {
    return this.request('DELETE', url, params)
  }

  private async request(method: Method, url: string, data: any) {
    let response;
    try {
      response = await axios.request({
        baseURL: this.endPoint,
        url,
        data,
        method,
        withCredentials: true,
        headers: {
          "Content-Type": data instanceof FormData ? "multipart/form-data" : "application/json",
      },
      })
    } catch (error: any) { 
      return error
    }
    return response
  }
}

const API_ENDPOINT = 'http://127.0.0.1:3030'

const apiService = new ApiService(API_ENDPOINT)

export default apiService