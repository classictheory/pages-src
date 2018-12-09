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
        let w = window.innerWidth
        
        if (w > 1024) {
          return 'Experience-XPTable-XP4Column'
        }
        return 'Experience-XPTable-XP3Column'
      }
    }
  }
</script>

<style scoped>

</style>