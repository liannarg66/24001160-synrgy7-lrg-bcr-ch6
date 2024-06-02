import { UserRepository } from '../repositories/userRepository';
import { hashPassword } from '../utils/bcrypt';

const userRepository = new UserRepository();

export class UserService {
  async addAdmin(username: string, password: string) {
    const hashedPassword = hashPassword(password);
    return userRepository.createUser({ username, password: hashedPassword, role: 'admin' });
  }
}
