<template>
    <div>
        <component v-bind:is="xpComponent" :xp="xp"></component>

        <!-- XP Calculations -->
        <Experience-Breakpoints :xp="xp" />
    </div>
</template>

<script>
  import { WoWExperience } from '../../../data/xp'

  export default {
    name: 'Experience',
    data () {
      return {
        xp: WoWExperience,
      }
    },
    computed: {
      xpComponent () {
        return 'Experience-XPTable-XP3Column'
      }
    }
  }
</script>

<style scoped>

</style>