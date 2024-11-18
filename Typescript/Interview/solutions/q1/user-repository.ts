import { ApiService } from './api-service';
import { User, ApiResponse } from './types';

export class UserRepository {
    constructor(private readonly apiService: ApiService) {}

    async getUser(id: number): Promise<ApiResponse<User>> {
        return this.apiService.get<User>(`/users/${id}`);
    }

    async getAllUsers(): Promise<ApiResponse<User[]>> {
        return this.apiService.get<User[]>('/users');
    }

    async createUser(userData: Omit<User, 'id'>): Promise<ApiResponse<User>> {
        return this.apiService.post<User>('/users', userData);
    }
} 