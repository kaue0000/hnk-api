import { CharacterSchema } from '#database/schema'
import { column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Character extends CharacterSchema {
    static table = 'characters'

    @column({isPrimary: true})
    declare id: number

    @column()
    declare name: string

    @column()
    declare hardness: string

    @column()
    declare description: string

    @column({ prepare: (value) => JSON.stringify(value), consume: (value) => typeof value === 'string' ? JSON.parse(value) : value })
        declare colors: string[] 

    @column()
    declare specie : 'lunarian' | 'gem' | 'admirabili'

    @column()
    declare photoUrl: string | null

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime
}