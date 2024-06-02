import { UserRepository } from '../repositories/userRepository';
import { hashPassword } from '../utils/bcrypt';

const userRepository = new UserRepository();

const seedSuperAdmin = async () => {
  const username = 'superadmin';
  const password = 'superadminpassword';
  const role = 'superadmin';

  const hashedPassword = hashPassword(password);

  await userRepository.createUser({ username, password: hashedPassword, role });
  console.log('Superadmin created');
};

seedSuperAdmin().then(() => process.exit(0));
