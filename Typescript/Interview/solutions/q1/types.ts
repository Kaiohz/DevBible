// Define types for the API layer
export interface ApiResponse<T> {
    data: T;
    status: number;
    success: boolean;
    error?: string;
}

export interface ApiConfig {
    baseUrl: string;
    apiKey: string;
    timeout: number;
}

// Example data interface
export interface User {
    id: number;
    name: string;
    email: string;
}