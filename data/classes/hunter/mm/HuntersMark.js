class HuntersMarkRank {
  constructor (props) {
    this.type = 'Target Debuff',
    this.duration = 120,
    //super(props)
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

let rank1 = new HuntersMarkRank({
  level: 6,
  cost: 100,
  manaCost: 15,
  rangedAttackPower: 20,
})

let rank2 = new HuntersMarkRank({
  level: 22,
  cost: 6000,
  manaCost: 30,
  rangedAttackPower: 45
})


export const HuntersMark = {
  name: "Hunter's Mark",
  firstLearnable: 6,
  hasRanks: true,
  ranks: {
    1: rank1,
    2: rank2
  },
  tooltip: "Places the Hunter's Mark of the target, increasing the Ranged Attack Power of all attackers against that target by {rangedAttackPower}. In addition, the target of this ability can always be seen by the hunter whether it stealths or turns invisible. The target also appears on the mini-map. Lasts for 2 min.",
  school: 'Marksmanship'
}