import { ApiService } from './api-service';
import { UserRepository } from './user-repository';
import { ApiConfig, User } from './types';

async function main() {
    // Configuration
    const config: ApiConfig = {
        baseUrl: 'https://api.example.com',
        apiKey: 'your-api-key',
        timeout: 5000
    };

    // Initialize services
    const apiService = new ApiService(config);
    const userRepository = new UserRepository(apiService);

    try {
        // Get a single user
        const userResponse = await userRepository.getUser(1);
        if (userResponse.success) {
            console.log('User found:', userResponse.data);
        } else {
            console.error('Error fetching user:', userResponse.error);
        }

        // Get all users
        const usersResponse = await userRepository.getAllUsers();
        if (usersResponse.success) {
            console.log('Total users:', usersResponse.data.length);
        }

        // Create a new user
        const newUser = {
            name: 'John Doe',
            email: 'john@example.com'
        };
        
        const createResponse = await userRepository.createUser(newUser);
        if (createResponse.success) {
            console.log('User created:', createResponse.data);
        }

    } catch (error) {
        console.error('Unexpected error:', error);
    }
}

// Run the example
main().catch(console.error); 