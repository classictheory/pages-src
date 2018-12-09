<template>
    <div>
        <table class="table is-striped">
            <thead>
                <tr>
                    <th>Level</th>
                    <th>Spell</th>
                    <th>Rank</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="spell in spellsSortedByLevel">
                    <td>{{ spell.level }}</td>
                    <td>{{ spell.name }}</td>
                    <td>{{ spell.rank }}</td>
                    <td v-html="$options.filters.gold_html(spell.cost)"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import { HunterSpells } from '../../data/classes/hunter/spells'
  import { PaladinSpells } from '../../data/classes/paladin/spells'

  export default {
    name: 'ClassSpells',
    props: ['wow-class'],
    data () {
      return {
        spells: '',
      }
    },
    computed: {
      spellsSortedByLevel () {
        // first make an object
        let level = this.groupSpellsByCharacterLevel()
        let spells = []

        // Flatten object keyed arrays into one array
        Object.keys(level).forEach(key => {
          let charLevelSpells = level[key]
          charLevelSpells.forEach(spell => {
            spells.push(spell)
          })
        })

        return spells
      }
    },
    methods: {
      groupSpellsByCharacterLevel() {
        // Parse the skills into an array against their level.
        let level = {}
        let spellLevel;
        Object.keys(this.spells).forEach(key => {
          let spell = this.spells[key]
          if (spell.hasRanks) {
            Object.keys(spell.ranks).forEach(index => {
              let rank = spell.ranks[index]
              spellLevel = rank.level

              if (typeof level[spellLevel] === "undefined") {
                level[spellLevel] = []
              }

              level[spellLevel].push({
                name: spell.name,
                rank: index,
                level: rank.level,
                cost: rank.cost
              })
            })
          } else {
            spellLevel = spell.firstLearnable
            if (typeof level[spellLevel] === "undefined") {
              level[spellLevel] = []
            }
            level[spellLevel].push({
              name: spell.name,
              rank: 'N/A',
              level: spell.firstLearnable,
              cost: spell.cost
            })
          }
        })
        return level
      },
    },
    mounted () {
      switch (this.wowClass) {
        case 'hunter':  this.spells = HunterSpells;  break;
        case 'paladin': this.spells = PaladinSpells; break;
        default: break;
      }
    }
  }
</script>

<style scoped>
.content table td {
    padding: 0.25em 0.5em;
}
</style>