import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'characters'

  async up() {
    await this.db.rawQuery('ALTER TABLE characters ADD COLUMN IF NOT EXISTS color varchar(255)')

    await this.db.rawQuery(`
      UPDATE characters
      SET color = (
        SELECT string_agg(color_value, ', ')
        FROM jsonb_array_elements_text(characters.colors) AS colors(color_value)
      )
      WHERE color IS NULL
    `)

    await this.db.rawQuery('ALTER TABLE characters DROP COLUMN IF EXISTS colors')
    await this.db.rawQuery('ALTER TABLE characters DROP COLUMN IF EXISTS photo_url')

    await this.db.rawQuery('ALTER TABLE characters ALTER COLUMN color SET NOT NULL')
    await this.db.rawQuery('ALTER TABLE characters ALTER COLUMN specie SET NOT NULL')
  }

  async down() {
    await this.db.rawQuery('ALTER TABLE characters ADD COLUMN IF NOT EXISTS colors jsonb')
    await this.db.rawQuery('ALTER TABLE characters ADD COLUMN IF NOT EXISTS photo_url varchar(255)')

    await this.db.rawQuery(
      'UPDATE characters SET colors = jsonb_build_array(color) WHERE colors IS NULL'
    )
    await this.db.rawQuery('ALTER TABLE characters ALTER COLUMN specie DROP NOT NULL')

    await this.db.rawQuery('ALTER TABLE characters DROP COLUMN IF EXISTS color')
  }
}
