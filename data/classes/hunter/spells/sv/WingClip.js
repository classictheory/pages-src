import { SpellWithRanks } from '../../../../SpellWithRanks'

const spell = new SpellWithRanks({
  name: 'Wing Clip',
  firstLearnable: 12
})

spell.addRank(1, {
  level: 12,
  cost: 600,
  damageAmount: 5,
  manaCost: 40,
  movementSpeedReductionPercent: 50,
  movementSpeedReductionDuration: 10,
})

spell.addRank(1, {
  level: 38,
  cost: 16000,
  damageAmount: 25,
  manaCost: 60,
  movementSpeedReductionPercent: 55,
  movementSpeedReductionDuration: 10,
})

export const WingClip = spell