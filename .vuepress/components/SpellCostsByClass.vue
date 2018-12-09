<template>
    <div class="card">
        <table class="table is-striped">
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="wClass in costsByClass" :class="`${wClass.cssClass}-fg`">
                    <td><a href="#">{{ wClass.wowClass }}</a></td>
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
            cssClass: 'hunter',
            cost: this.calculateClassSpellCost('hunter'),
          },
          {
            wowClass: 'Mage',
            cssClass: 'mage',
            cost: 0,
          },
          {
            wowClass: 'Paladin',
            cssClass: 'paladin',
            cost: 0,
          },
          {
            wowClass: 'Priest',
            cssClass: 'priest',
            cost: 0,
          },
          {
            wowClass: 'Rogue',
            cssClass: 'rogue',
            cost: 0,
          },
          {
            wowClass: 'Shaman',
            cssClass: 'shaman',
            cost: 0,
          },
          {
            wowClass: 'Warlock',
            cssClass: 'warlock',
            cost: 0,
          },
          {
            wowClass: 'Warrior',
            cssClass: 'warrior',
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