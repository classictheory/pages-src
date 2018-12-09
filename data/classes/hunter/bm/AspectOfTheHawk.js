/**
 * Aspect of the Hawk Spell Rank
 */
class AspectHawkRank {
  constructor (props) {
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

const rank1 = new AspectHawkRank({
  level: 10,
  cost: 400,
  rangedAttackPower: 20,
  manaCost: 20,
})

const rank2 = new AspectHawkRank({
  level: 18,
  cost: 2000,
  rangedAttackPower: 35,
  manaCost: 35,
})

const rank3 = new AspectHawkRank({
  level: 28,
  cost: 8000,
  rangedAttackPower: 50,
  manaCost: 50,
})

const rank4 = new AspectHawkRank({
  level: 38,
  cost: 16000,
  rangedAttackPower: 70,
  manaCost: 70,
})

const rank5 = new AspectHawkRank({
  level: 48,
  cost: 32000,
  rangedAttackPower: 90,
  manaCost: 90,
})

const rank6 = new AspectHawkRank({
  level: 58,
  cost: 48000,
  rangedAttackPower: 110,
  manaCost: 110,
})

export const AspectOfTheHawk = {
  name: "Aspect of the Hawk",
  firstLearnable: 10,
  hasRanks: true,
  ranks: {
    1: rank1,
    2: rank2,
    3: rank3,
    4: rank4,
    5: rank5,
    6: rank6,
  },
  school: 'Beast Mastery',
  type: 'Self Buff'
}