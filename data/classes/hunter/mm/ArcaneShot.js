/**
 * Arcane Shot Spell Rank
 */
class ArcaneShotRank {
  constructor (props) {
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

let rank1 = new ArcaneShotRank({
  level: 6,
  cost: 100, // 1s
  damageAmount: 13,
  damageType: 'arcane',
  manaCost: 25,
})

let rank2 = new ArcaneShotRank({
  level: 12,
  cost: 600,
  damageAmount: 21,
  damageType: 'arcane',
  manaCost: 35
})

export const ArcaneShot = {
  name: "Arcane Shot",
  firstLearnable: 6,
  hasRanks: true,
  ranks: {
    1: rank1,
    2: rank2,
  },
  school: 'Marksmanship'
}
