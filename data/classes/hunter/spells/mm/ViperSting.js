class ViperStingRank {
  constructor (props) {
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

const rank1 = new ViperStingRank({
  level: 36,
  cost: 14000,
  manaCost: 135,
  debuffAmount: 616,
  duration: 8,
})

const rank2 = new ViperStingRank({
  level: 46,
  cost: 28000,
  manaCost: 175,
  debuffAmount: 848,
  duration: 8,
})

const rank3 = new ViperStingRank({
  level: 56,
  cost: 46000,
  manaCost: 215,
  debuffAmount: 1108,
  duration: 8,
})

export const ViperSting = {
  name: "Viper Sting",
  type: 'Target Debuff',
  firstLearnable: 36,
  hasRanks: true,
  ranks: {
    1: rank1,
    2: rank2,
    3: rank3,
  },
  tooltip: "Stings the target, draining {debuffAmount} mana over {duration} sec. Only one Sting per Hunter can be active on any one target.",
  school: 'Marksmanship'
}
