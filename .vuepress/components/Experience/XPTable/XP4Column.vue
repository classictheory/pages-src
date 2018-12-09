<template>
    <table class="table is-striped">
        <thead>
        <tr>
            <th class="currentlevel">Level</th>
            <th class="experience">XP</th>
            <th class="currentlevel">Level</th>
            <th class="experience">XP</th>
            <th class="currentlevel">Level</th>
            <th class="experience">XP</th>
            <th class="currentlevel">Level</th>
            <th class="experience">XP</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in fifteen">
            <td class="currentlevel">{{ i+1 }}</td>
            <td class="experience">{{ xp[i+1] | number }}</td>
            <td class="currentlevel">{{ i+16 }}</td>
            <td class="experience">{{ xp[i+16] | number }}</td>
            <td class="currentlevel">{{ i+31 }}</td>
            <td class="experience">{{ xp[i+31] | number }}</td>
            <td class="currentlevel">{{ i+46 }}</td>
            <td class="experience">{{ (i+46 === 60) ? "-" : xp[i+46] | number }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
  import { FifteenArray } from '../../../../data/xp'

  export default {
    name: 'XP4Column',
    props: {
      xp: Object
    },
    data() {
      return {
        fifteen: FifteenArray,
      }
    }
  }
</script>

<style scoped>
.currentlevel { width: 4em; }
.experience { width: 8em; }
</style>