import { SpellWithRanks } from '../../../../SpellWithRanks'

const spell = new SpellWithRanks({
  name: 'Explosive Trap',
  firstLearnable: 34
})

spell.addRank(1, {
  level: 20,
  cost: 12000,
  manaCost: 275,
  cooldown: 15,
  damageMin: 100,
  damageMax: 130,
  duration: 60
})

spell.addRank(2, {
  level: 44,
  cost: 26000,
  manaCost: 395,
  cooldown: 15,
  damageMin: 139,
  damageMax: 187,
  additionalDamage: 240,
  additionalDamageDuration: 20,
  duration: 60
})

export const ExplosiveTrap = spell