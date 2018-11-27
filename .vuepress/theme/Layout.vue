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

  export default {
    name: 'ClassicTheoryLayout',
    components: {
      'ct-navbar': ctNavbar
    },
  }
</script>

<style lang="scss">
    @import "~bulma";
    main {
        padding-top: 40px;
    }
</style>
