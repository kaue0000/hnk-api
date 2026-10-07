import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Character from '#models/character'

type CharacterSeed = {
  name: string
  hardness?: string | null
  description: string
  color: string
  specie: 'lunarian' | 'gem' | 'admirabili'
}

export default class extends BaseSeeder {
  async run() {
    const characters: CharacterSeed[] = [
      {
        name: 'Phosphophyllite',
        hardness: '3.5',
        description:
          'Being 300 years old, they are the youngest among the gems. Their hardness is 3.5, low compared to most of the other gems. They are brittle and weak so they are not suited for battle. Despite being clumsy and ineffective they were given the job of completing an encyclopedia. They want to find new job for Cinnabar, who patrols at night and lives distantly from the other gems.',
        color: 'mint green',
        specie: 'gem',
      },
      {
        name: 'Aculeatus',
        hardness: null,
        description: 'Brother to Ventricosus, ruler of the admirabilis.',
        color: 'black and white',
        specie: 'admirabili',
      },
    ]

    await Character.updateOrCreateMany(
      'name',
      characters.map(({ hardness, ...character }) => ({
        ...character,
        hardness: hardness ?? null,
      }))
    )

    const names = characters.map(({ name }) => name)
    if (names.length === 0) {
      await Character.query().delete()
      return
    }

    // Records omitted from the seeder are removed from the database.
    await Character.query().whereNotIn('name', names).delete()
  }
}
