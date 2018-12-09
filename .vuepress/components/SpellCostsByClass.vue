<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="wClass in costsByClass">
                    <td>{{ wClass.wowClass }}</td>
                    <td v-html="$options.filters.gold_html(wClass.cost)"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import { HunterSpells } from '../../data/classes/hunter/spells'

  export default {
    name: 'SpellCostsByClass',
    computed: {
      costsByClass () {
        return [
          {
            wowClass: 'Hunter',
            cost: this.calculateClassSpellCost('hunter'),
          },
          {
            wowClass: 'Mage',
            cost: 0,
          },
          {
            wowClass: 'Paladin',
            cost: 0,
          },
          {
            wowClass: 'Priest',
            cost: 0,
          },
          {
            wowClass: 'Rogue',
            cost: 0,
          },
          {
            wowClass: 'Shaman',
            cost: 0,
          },
          {
            wowClass: 'Warlock',
            cost: 0,
          },
          {
            wowClass: 'Warrior',
            cost: this.calculateClassSpellCost('warrior'),
          }
        ]
      }
    },
    methods: {
      calculateClassSpellCost(wowClass) {
        let spells = []
        let cost = 0
        // Load the appropriate spells
        switch (wowClass) {
          case 'hunter': spells = HunterSpells; break;

        }
        spells.forEach(spell => {
            if (spell.hasRanks) {
              let ranks = Object.keys(spell.ranks)
              ranks.forEach(rank => {
                console.log(spell.ranks)
                console.log(spell.ranks[rank])
                cost += spell.ranks[rank].cost
              })
            } else {
              cost += spell.cost
            }
        })

        return cost
      }
    }
  }
</script>

<style scoped>

</style>