import { User } from '../models/User';

export class UserRepository {
  async createUser(data: Partial<User>): Promise<User> {
    return User.query().insert(data);
  }

  async findUserByUsername(username: string): Promise<User | undefined> {
    return User.query().findOne({ username });
  }

  async findUserById(id: number): Promise<User | undefined> {
    return User.query().findById(id);
  }
}
