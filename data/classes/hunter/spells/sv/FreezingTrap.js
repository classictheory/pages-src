import { SpellWithRanks } from '../../../../SpellWithRanks'

const spell = new SpellWithRanks({
  name: 'Freezing Trap',
  firstLearnable: 20
})

spell.addRank(1, {
  level: 20,
  cost: 2200,
  manaCost: 50,
  trapDuration: 60,
  duration: 10,
  cooldown: 15
})

spell.addRank(1, {
  level: 40,
  cost: 18000,
  manaCost: 75,
  trapDuration: 60,
  duration: 15,
  cooldown: 15
})

export const FreezingTrap = spell