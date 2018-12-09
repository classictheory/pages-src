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
                <tr>
                    <td>Warlock</td>
                    <td>n g</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  export default {
    name: 'SpellCostsByClass',
    computed: {
      costsByClass () {
        return [
          {
            wowClass: 'Hunter',
            cost: 1000,
          },
          {
            wowClass: 'Mage',
            cost: 10000,
          },
          {
            wowClass: 'Paladin',
            cost: 100,
          },
          {
            wowClass: 'Priest',
            cost: 10,
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
            cost: 0,
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>