import { SpellWithRanks } from '../../../../SpellWithRanks'

const spell = new SpellWithRanks({
  name: 'Immolation Trap',
  firstLearnable: 16
})

spell.addRank(1, {
  level: 16,
  cost: 1800,
  manaCost: 50,
  damageAmount: 105,
  damageDuration: 15,
  trapDuration: 60,
})

spell.addRank(2, {
  level: 26,
  cost: 7000,
  manaCost: 90,
  damageAmount: 215,
  damageDuration: 15,
  trapDuration: 60,
})

spell.addRank(3, {
  level: 36,
  cost: 14000,
  manaCost: 135,
  damageAmount: 340,
  damageDuration: 15,
  trapDuration: 60,
})

export const ImmolationTrap = spell