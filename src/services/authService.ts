import { UserRepository } from '../repositories/userRepository';
import { hashPassword, comparePassword } from '../utils/bcrypt';
import { generateToken } from '../utils/jwt';

const userRepository = new UserRepository();

export class AuthService {
  async register(username: string, password: string, role: string) {
    const hashedPassword = hashPassword(password);
    return userRepository.createUser({ username, password: hashedPassword, role });
  }

  async login(username: string, password: string) {
    const user = await userRepository.findUserByUsername(username);
    if (!user || !comparePassword(password, user.password)) {
      throw new Error('Invalid credentials');
    }
    const token = generateToken(user);
    return { user, token };
  }

  async getCurrentUser(userId: number) {
    return userRepository.findUserById(userId);
  }
}
