import { Model } from 'objection';

export class User extends Model {
  //id!: number;
  username!: string;
  password!: string;
  role!: string;

  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['username', 'password', 'role'],
      properties: {
        //id: { type: 'integer' },
        username: { type: 'string' },
        password: { type: 'string' },
        role: { type: 'string', enum: ['superadmin', 'admin', 'member'] }
      }
    };
  }
}
