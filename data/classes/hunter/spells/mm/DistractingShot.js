/**
 * Arcane Shot Spell Rank
 */
class DistractingShotRank {
  constructor (props) {
    Object.keys(props).forEach(key => {
      this[key] = props[key]
    })
  }
}

const rank1 = new DistractingShotRank({
  level: 12,
  cost: 600,
  manaCost: 20,
  description: 'Distract the target, causing threat.',
})

const rank2 = new DistractingShotRank({
  level: 20,
  cost: 2200,
  manaCost: 30,
  description: 'Distract the target, causing threat. More effective than Distracting Shot (Rank 1).',
})

const rank3 = new DistractingShotRank({
  level: 30,
  cost: 8000,
  manaCost: 50,
  description: 'Distract the target, causing threat. More effective than Distracting Shot (Rank 2).',
})

const rank4 = new DistractingShotRank({
  level: 40,
  cost: 18000,
  manaCost: 70,
  description: 'Distract the target, causing threat. More effective than Distracting Shot (Rank 3).',
})

const rank5 = new DistractingShotRank({
  level: 50,
  cost: 36000,
  manaCost: 90,
  description: 'Distract the target, causing threat. More effective than Distracting Shot (Rank 4).',
})

const rank6 = new DistractingShotRank({
  level: 60,
  cost: 50000,
  manaCost: 110,
  description: 'Distract the target, causing threat. More effective than Distracting Shot (Rank 4).'
})

export const DistractingShot = {
  name: "Distracting Shot",
  firstLearnable: 12,
  hasRanks: true,
  ranks: {
    1: rank1,
    2: rank2,
    3: rank3,
    4: rank4,
    5: rank5,
    6: rank6,
  },
  school: 'Marksmanship',
}
