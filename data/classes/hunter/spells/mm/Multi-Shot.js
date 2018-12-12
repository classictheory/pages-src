class MultiShotRank {
  constructor (props) {
    this.type = 'AoE Damage',
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

const rank1 = new MultiShotRank({
  level: 18,
  cost: 2000,
  manaCost: 100,
  description: "Fires several missiles, hitting 3 targets.",
})

const rank2 = new MultiShotRank({
  level: 30,
  cost: 8000,
  manaCost: 150,
  additionalDamage: 40,
  description: "Fires several missiles, hitting 3 targets for an additional {additionalDamage} damage..",
})

const rank3 = new MultiShotRank({
  level: 42,
  cost: 24000,
  manaCost: 175,
  additionalDamage: 80,
  description: "Fires several missiles, hitting 3 targets for an additional {additionalDamage} damage..",
})

const rank4 = new MultiShotRank({
  level: 54,
  cost: 42000,
  manaCost: 210,
  additionalDamage: 120,
  description: "Fires several missiles, hitting 3 targets for an additional {additionalDamage} damage..",
})

export const MultiShot = {
  name: "Multi-Shot",
  firstLearnable: 18,
  hasRanks: true,
  ranks: {
    1: rank1,
    2: rank2,
    3: rank3,
    4: rank4,
  },

  school: 'Marksmanship'
}
