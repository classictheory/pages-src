/**
 * Mend Pet Spell Rank
 */
class MendPetRank {
  constructor (props) {
    this.type = 'Self Buff',
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

const rank1 = new MendPetRank({
  level: 12,
  cost: 600,
  petHealPerSecond: 20,
  tickRate: 1,
  duration: 5,
  manaCost: 20,
})

const rank2 = new MendPetRank({
  level: 20,
  cost: 2200,
  petHealPerSecond: 38,
  tickRate: 1,
  duration: 5,
  manaCost: 90,
})

const rank3 = new MendPetRank({
  level: 28,
  cost: 8000,
  petHealPerSecond: 68,
  tickRate: 1,
  duration: 5,
  manaCost: 155,
})

const rank4 = new MendPetRank({
  level: 36,
  cost: 14000,
  petHealPerSecond: 103,
  tickRate: 1,
  duration: 5,
  manaCost: 255,
})

const rank5 = new MendPetRank({
  level: 44,
  cost: 26000,
  petHealPerSecond: 142,
  tickRate: 1,
  duration: 5,
  manaCost: 300,
})

const rank6 = new MendPetRank({
  level: 52,
  cost: 40000,
  petHealPerSecond: 189,
  tickRate: 1,
  duration: 5,
  manaCost: 385,
})

const rank7 = new MendPetRank({
  level: 60,
  cost: 50000,
  petHealPerSecond: 245,
  tickRate: 1,
  duration: 5,
  manaCost: 480,
})

export const MendPet = {
  name: 'Mend Pet',
  firstLearnable: 10,
  hasRanks: true,
  ranks: {
    1: rank1,
    2: rank2,
    3: rank3,
    4: rank4,
    5: rank5,
    6: rank6,
    7: rank7,
  },
  school: 'Beast Mastery',
  description: "Heals your pet {petHealPerSecond} health every second while you focus. Lasts 5 sec.",
}