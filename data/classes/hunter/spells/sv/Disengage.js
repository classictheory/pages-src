import { SpellWithRanks } from '../../../../SpellWithRanks'

const spell = new SpellWithRanks({
  name: 'Disengage',
  firstLearnable: 20
})

spell.addRank(1, {
  level: 20,
  cost: 2200,
  manaCost: 50,
  cooldown: 5,
  range: 5
})

spell.addRank(2, {
  level: 34,
  cost: 12000,
  manaCost: 100,
  cooldown: 5,
  range: 5
})

export const Disengage = spell