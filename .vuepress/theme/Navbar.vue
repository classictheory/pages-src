<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                ClassicTheory – A theorycrafting and wiki resource for Warcraft Classic
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'ct-navbar'
  }
</script>

<style>
.navbar {
    box-shadow: 1px 1px 1px #ececec;
}
</style>