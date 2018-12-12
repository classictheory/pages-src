class ScorpidStingRank {
  constructor (props) {
    this.type = 'Target Debuff',
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

const rank1 = new ScorpidStingRank({
  level: 22,
  cost: 6000,
  manaCost: 70,
  debuffAmount: 20,
})

const rank2 = new ScorpidStingRank({
  level: 32,
  cost: 10000,
  manaCost: 90,
  debuffAmount: 29,
})

const rank3 = new ScorpidStingRank({
  level: 42,
  cost: 24000,
  manaCost: 125,
  debuffAmount: 45,
})

const rank4 = new ScorpidStingRank({
  level: 52,
  cost: 40000,
  manaCost: 165,
  debuffAmount: 68,
})

export const ScorpidSting = {
  name: "Scorpid Sting",
  firstLmearnable: 22,
  hasRanks: true,
  ranks: {
    1: rank1,
    2: rank2,
    3: rank3,
    4: rank4,
  },
  tooltip: "Stings the target, reducing Strength and Agility by {debuffAmount} for 20 sec. Only one Sting per Hunter can be active on any one target.",
  school: 'Marksmanship'
}
