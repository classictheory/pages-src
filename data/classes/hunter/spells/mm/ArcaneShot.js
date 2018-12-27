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

const rank1 = new ArcaneShotRank({
  level: 6,
  cost: 100, // 1s
  damageAmount: 13,
  manaCost: 25,
})

const rank2 = new ArcaneShotRank({
  level: 12,
  cost: 600,
  damageAmount: 21,
  manaCost: 35
})

const rank3 = new ArcaneShotRank({
  level: 20,
  cost: 2200,
  damageAmount: 33,
  manaCost: 50
})

const rank4 = new ArcaneShotRank({
  level: 28,
  cost: 8000,
  damageAmount: 59,
  manaCost: 80,
})

const rank5 = new ArcaneShotRank({
  level: 36,
  cost: 14000,
  damageAmount: 83,
  manaCost: 105,
})

const rank6 = new ArcaneShotRank({
  level: 44,
  cost: 26000,
  damageAmount: 115,
  manaCost: 105,
})

const rank7 = new ArcaneShotRank({
  level: 52,
  cost: 40000,
  damageAmount: 145,
  manaCost: 160,
})

const rank8 = new ArcaneShotRank({
  level: 60,
  cost: 50000,
  damageAmount: 183,
  manaCost: 190,
})

export const ArcaneShot = {
  name: "Arcane Shot",
  firstLearnable: 6,
  hasRanks: true,
  damageType: 'arcane',
  school: 'Marksmanship',
  description: "An instant shot that causes {damageAmount} Arcane damage.",
  ranks: {
    1: rank1,
    2: rank2,
    3: rank3,
    4: rank4,
    5: rank5,
    6: rank6,
    7: rank7,
    8: rank8,
  },
}
