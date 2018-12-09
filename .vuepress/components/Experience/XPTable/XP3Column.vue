<template>
    <table class="table">
        <thead>
        <tr>
            <th class="currentlevel">Level</th>
            <th class="experience">XP</th>
            <th class="currentlevel">Level</th>
            <th class="experience">XP</th>
            <th class="currentlevel">Level</th>
            <th class="experience">XP</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in twenty">
            <td class="currentlevel">{{ i+1 }}</td>
            <td class="experience">{{ xp[i+1] | number }}</td>
            <td class="currentlevel">{{ i+21 }}</td>
            <td class="experience">{{ xp[i+21] | number }}</td>
            <td class="currentlevel">{{ i+41 }}</td>
            <td class="experience">{{ (i+41 === 60) ? "-" : xp[i+41] | number }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
  import { TwentyArray } from '../../../../data/xp'

  export default {
    name: 'XP3Column',
    props: {
      xp: Object
    },
    data() {
      return {
        twenty: TwentyArray,
      }
    }
  }
</script>

<style scoped>
.currentlevel { width: 4em; }
.experience { width: 8em; }
</style>