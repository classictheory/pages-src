import { SpellWithRanks } from '../../../../SpellWithRanks'

const spell = new SpellWithRanks({
  name: 'Raptor Strike',
  firstLearnable: 1
})

spell.addRank(1, {
  level: 1,
  cost: 0,
  manaCost: 15,
  damageAmount: 5,
})

spell.addRank(2, {
  level: 8,
  cost: 200,
  manaCost: 25,
  damageAmount: 11
})

spell.addRank(3, {
  level: 16,
  cost: 1800,
  manaCost: 35,
  damageAmount: 21
})

spell.addRank(4, {
  level: 23,
  cost: 7000,
  manaCost: 45,
  damageAmount: 34
})

spell.addRank(5, {
  level: 32,
  cost: 10000,
  manaCost: 55,
  damageAmount: 50
})

spell.addRank(6, {
  level: 40,
  cost: 18000,
  manaCost: 70,
  damageAmount: 80
})

export const RaptorStrike = spell