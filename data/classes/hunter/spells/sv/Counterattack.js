import { SpellWithRanks } from '../../../../SpellWithRanks'

const spell = new SpellWithRanks({
  name: 'Counterattack',
  firstLearnable: 0, //TODO: When is this first learnable?
})

spell.addRank(2, {
  level: 42,
  cost: 1200,
  damageAmount: 70,
  immobilizeDuration: 5,
  manaCost: 65
})

export const Counterattack = spell