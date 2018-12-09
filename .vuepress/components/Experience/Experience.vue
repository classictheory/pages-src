<template>
    <div>
        <Experience-XPTable-XP3Column :xp="xp" />

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

  }
</script>

<style scoped>

</style>