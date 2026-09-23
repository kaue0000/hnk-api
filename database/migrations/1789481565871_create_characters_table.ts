import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'characters'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name', 40).notNullable()
      table.decimal('hardness', 10, 2).nullable()
      table.string('description', 200).notNullable()
      table.string('color').notNullable()
      table.enum('specie', ['lunarian', 'gem', 'admirabili'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}