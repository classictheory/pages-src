/**
 * Arcane Shot Spell Rank
 */
class AimedShotRank {
  constructor (props) {
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

const rank1 = new AimedShotRank({
  level: 20,
  cost: 0, // Assumption: level 20 quest reward?
  // damageAmount: 125,
  // manaCost: 115,
})

const rank2 = new AimedShotRank({
  level: 28,
  cost: 400,
  damageAmount: 125,
  manaCost: 115,
})

const rank3 = new AimedShotRank({
  level: 36,
  cost: 700,
  damageAmount: 200,
  manaCost: 160,
})

const rank4 = new AimedShotRank({
  level: 44,
  cost: 1300,
  damageAmount: 330,
  manaCost: 210,
})

const rank5 = new AimedShotRank({
  level: 52,
  cost: 2000,
  damageAmount: 460,
  manaCost: 260,
})

const rank6 = new AimedShotRank({
  level: 60,
  cost: 2500,
  damageAmount: 600,
  manaCost: 310,
})

export const AimedShot = {
  name: "Aimed Shot",
  firstLearnable: 20,// Method of learning unknown, quest?
  hasRanks: true,
  ranks: {
    1: rank1,
    2: rank2,
    3: rank3,
    4: rank4,
    5: rank5,
    6: rank6,
  },
  school: 'Marksmanship'
}
