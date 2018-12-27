class SerpentStingRank {
  constructor (props) {
    this.type = 'Target Damage over Time'
    this.duration = 15
    this.damageType = 'Nature'
    //super(props)
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

const rank1 = new SerpentStingRank({
  level: 4,
  cost: 100,
  manaCost: 15,
  damageAmount: 20,
})

const rank2 = new SerpentStingRank({
  level: 10,
  cost: 400,
  manaCost: 30,
  damageAmount: 40,
})

const rank3 = new SerpentStingRank({
  level: 18,
  cost: 2000,
  manaCost: 50,
  damageAmount: 80,
})

const rank4 = new SerpentStingRank({
  level: 26,
  cost: 7000,
  manaCost: 80,
  damageAmount: 140,
})

const rank5 = new SerpentStingRank({
  level: 34,
  cost: 12000,
  manaCost: 115,
  damageAmount: 210,
})

const rank6 = new SerpentStingRank({
  level: 42,
  cost: 24000,
  manaCost: 150,
  damageAmount: 290,
})

const rank7 = new SerpentStingRank({
  level: 50,
  cost: 36000,
  manaCost: 190,
  damageAmount: 385,
})

const rank8 = new SerpentStingRank({
  level: 58,
  cost: 48000,
  manaCost: 230,
  damageAmount: 490,
})

export const SerpentSting = {
  name: "Serpent Sting",
  damageType: 'Nature',
  firstLearnable: 4,
  hasRanks: true,
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
  tooltip: "Stings the target, cauing {damageAmount} over {duration} sec. Only one Sting per Hunter can be active on any one target.",
  school: 'Marksmanship'
}
