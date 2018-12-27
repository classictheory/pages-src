class VolleyRank {
  constructor (props) {
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

const rank1 = new VolleyRank({
  level: 40,
  cost: 18000,
  manaCost: 350,
  duration: 6,
  damageAmountPerSecond: 50
})

const rank2 = new VolleyRank({
  level: 50,
  cost: 36000,
  manaCost: 420,
  duration: 6,
  damageAmountPerSecond: 65
})

const rank3 = new VolleyRank({
  level: 58,
  cost: 48000,
  manaCost: 490,
  duration: 6,
  damageAmountPerSecond: 80
})

export const Volley = {
  type: 'AoE Damage',
  name: "Volley",
  firstLearnable: 40,
  hasRanks: true,
  ranks: {
    1: rank1,
    2: rank2,
    3: rank3,
  },
  tooltip: "Continuously fires a volley of ammo at the target area, causing {damageAmountPerSecond} Arcane damage to enemy targets within 8 yards every second for {duration} sec.",
  school: 'Marksmanship'
}
