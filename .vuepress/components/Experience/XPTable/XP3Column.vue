<template>
    <table class="table">
        <table>
            <thead>
            <tr>
                <th>Level</th>
                <th>XP</th>
                <th>Level</th>
                <th>XP</th>
                <th>Level</th>
                <th>XP</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="i in twenty">
                <td>{{ i+1 }}</td>
                <td>{{ xp[i+1] | number }}</td>
                <td>{{ i+21 }}</td>
                <td>{{ xp[i+21] | number }}</td>
                <td>{{ i+41 }}</td>
                <td>{{ (i+41 === 60) ? "-" : xp[i+41] | number }}</td>
            </tr>
            </tbody>
        </table>
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

</style>