import { ApiConfig, ApiResponse } from './types';

export class ApiService {
    constructor(private readonly config: ApiConfig) {}

    async get<T>(endpoint: string): Promise<ApiResponse<T>> {
        try {
            const response = await fetch(`${this.config.baseUrl}${endpoint}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.config.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            return {
                data,
                status: response.status,
                success: response.ok
            };
        } catch (error) {
            return {
                data: null as T,
                status: 500,
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error occurred'
            };
        }
    }

    async post<T>(endpoint: string, body: unknown): Promise<ApiResponse<T>> {
        try {
            const response = await fetch(`${this.config.baseUrl}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.config.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            const data = await response.json();

            return {
                data,
                status: response.status,
                success: response.ok
            };
        } catch (error) {
            return {
                data: null as T,
                status: 500,
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error occurred'
            };
        }
    }
} 