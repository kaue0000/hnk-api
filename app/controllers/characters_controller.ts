import Character from '#models/character'
import type { HttpContext } from '@adonisjs/core/http'

export default class CharactersController {
    async index({ inertia } : HttpContext){
        const characters = await Character.all()

        return inertia.render('characters/index' as any, {
            characters,
        })
    }
}