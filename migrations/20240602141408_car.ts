import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('car_name').notNullable();
    table.string('image').notNullable();
    table.integer('price').notNullable();
    table.boolean('available').notNullable();
    table.timestamp('start_rent').notNullable();
    table.timestamp('finish_rent').notNullable();
    table.timestamp('created_at').notNullable();
    table.timestamp('updated_at').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
