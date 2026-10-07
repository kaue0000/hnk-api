import { CharacterSchema } from '#database/schema'
import { column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Character extends CharacterSchema {
  static table = 'characters'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare hardness: string | null

  @column()
  declare description: string

  @column()
  declare color: string

  @column()
  declare specie: 'lunarian' | 'gem' | 'admirabili'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
