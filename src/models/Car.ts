import { Model } from 'objection';

export class Car extends Model {
  id!: number;
  car_name!: string;
  image!: string;
  price!: number;
  available!: boolean;
  start_rent?: Date;
  finish_rent?: Date;
  created_at!: Date | string | null;
  updated_at!: Date | string | null;
  deleted_by?: number | null;
  user_id!: number;

  static get tableName() {
    return 'cars';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['make', 'model', 'year', 'created_at', 'updated_at', 'deleted_by'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        image: { type: 'string' },
        price: { type: 'string' },
        availability: { type: 'boolean' },
        start_rent: { type: 'time' },
        finish_rent: { type: 'time' },
        created_at: { type: 'integer' },
        updated_at: { type: 'integer' },
        deleted_by: { type: 'integer', nullable: true }
      }
    };
  }
}
