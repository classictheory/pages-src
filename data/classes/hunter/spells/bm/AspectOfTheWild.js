/**
 * Aspect of the Hawk Spell Rank
 */
class AspectWildRank {
  constructor (props) {
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

const rank1 = new AspectWildRank({
  level: 46,
  cost: 28000,
  natureResistance: 45,
  manaCost: 90,
})

const rank2 = new AspectWildRank({
  level: 56,
  cost: 46000,
  natureResistance: 60,
  manaCost: 115,
})

export const AspectOfTheWild = {
  name: "Aspect of the Wild",
  firstLearnable: 46,
  hasRanks: true,
  ranks: {
    1: rank1,
    2: rank2,
  },
  school: 'Beast Mastery',
  type: 'Group Buff'
}