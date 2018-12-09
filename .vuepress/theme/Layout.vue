<template>
    <div class="theme-container">
        <ct-navbar></ct-navbar>
        <main class="content container">
            <Content/>
        </main>
    </div>
</template>

<script>
  import ctNavbar from './Navbar'
  import { AllianceTheme } from './themes'
  import { HordeTheme } from './themes'

  export default {
    name: 'ClassicTheoryLayout',
    components: {
      'ct-navbar': ctNavbar
    },
    mounted () {
        let userTheme = 'alliance'

        if (userTheme === 'alliance') {
            AllianceTheme()
        } else {
            HordeTheme()
        }
    }
  }
</script>

<style lang="scss">
    @import "~bulma";

    @import "./scss/theme";
</style>
