/**
 * Scare Beast Spell Rank
 */
class ScareBeastRank {
  constructor (props) {
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

let rank1 = new ScareBeastRank({
  level: 14,
  cost: 1200,
  duration: 10,
  manaCost: 35,
  castTime: 1.5,
  cooldown: 30,
  range: 10,
})

let rank2 = new ScareBeastRank({
  level: 30,
  cost: 8000,
  duration: 15,
  manaCost: 50,
  castTime: 1.5,
  cooldown: 30,
  range: 10,
})

let rank3 = new ScareBeastRank({
  level: 46,
  cost: 28000,
  duration: 20,
  manaCost: 75,
  castTime: 1.5,
  cooldown: 30,
  range: 10,
})

export const ScareBeast = {
  name: "Scare Beast",
  firstLearnable: 14,
  hasRanks: true,
  ranks: {
    1: rank1,
    2: rank2,
    3: rank3,
  },
  school: 'Beast Mastery',
  type: 'Target CroudControl',
}