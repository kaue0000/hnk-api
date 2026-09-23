import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Character from '#models/character'

export default class extends BaseSeeder {
  async run() {
    const uniqueKey = 'id';
    await Character.updateOrCreateMany(uniqueKey, [
      {
        id: 1,
        name: 'Phosphophyllite',
        hardness: '3.5',
        description: 'Being 300 years old, they are the youngest among the gems. Their hardness is 3.5, low compared to most of the other gems. They are brittle and weak so they are not suited for battle. Despite being clumsy and ineffective they were given the job of completing an encyclopedia. They want to find new job for Cinnabar, who patrols at night and lives distantly from the other gems.',
        colors: ['mint green'],
        specie: 'gem',
        photoUrl: 'https://cdn.myanimelist.net/images/characters/16/355231.jpg'
      },
      {
        id: 2,
        name: 'Aculeatus',
        description: 'Brother to Ventricosus, ruler of the admirabilis.',
        colors: ['black', 'white'],
        specie: 'admirabili',
        photoUrl: 'https://cdn.myanimelist.net/images/characters/6/346207.jpg'
      },
    ])
  }
}