import { SpellWithRanks } from '../../../../SpellWithRanks'

const spell = new SpellWithRanks({
  name: 'Mongoose Bite',
  firstLearnable: 16
})

spell.addRank(1, {
  level: 16,
  cost: 1800,
  manaCost: 30,
  damageAmount: 25,
})

spell.addRank(2, {
  level: 30,
  cost: 8000,
  manaCost: 40,
  damageAmount: 45,
})

spell.addRank(3, {
  level: 44,
  cost: 26000,
  manaCost: 50,
  damageAmount: 75,
})

export const MongooseBite = spell