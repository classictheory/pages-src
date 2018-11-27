<template>
    <div>
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
                    <td>{{ WoWExperience[i+1] }}</td>
                    <td>{{ i+21 }}</td>
                    <td>{{ WoWExperience[i+21] }}</td>
                    <td>{{ i+41 }}</td>
                    <td>{{ (i+41 === 60) ? "-" : WoWExperience[i+41] }}</td>
                </tr>
                </tbody>
            </table>
        </table>
    </div>

</template>

<script>
  import { WoWExperience } from '../../data/xp'
  import { TwentyArray } from '../../data/xp'

  export default {
    name: 'Experience',
    data() {
      return {
        xp: {},
        twenty: TwentyArray,
        WoWExperience
      }
    }
  }
</script>

<style scoped>

</style>