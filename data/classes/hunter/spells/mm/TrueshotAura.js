class TrueshotAuraRank {
  constructor (props) {
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

const rank1 = new TrueshotAuraRank({
  level: 40, // Assumed
  cost: 0, // Assuming level 40 quest reward.
  duration: 1800,
  //attackPower: 75,
  //range: 45
})

const rank2 = new TrueshotAuraRank({
  level: 50,
  cost: 1800,
  duration: 1800,
  attackPower: 75,
  range: 45
})

const rank3 = new TrueshotAuraRank({
  level: 60,
  cost: 2500,
  duration: 1800, // 30 min
  attackPower: 100,
  range: 45
})

export const TrueshotAura = {
  name: "Trueshot Aura",
  type: 'Group Buff',
  damageType: 'Nature',
  firstLearnable: 4,
  hasRanks: true,
  ranks: {
    1: rank1,
    2: rank2,
    3: rank3,
  },
  tooltip: "Increases the attack power of party members within 45 yards by {attackPower}. Lasts 30 min.",
  school: 'Marksmanship'
}
