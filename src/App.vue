<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
          <a href="/"><img src="https://i.imgur.com/xc6HSSE.png" height="60" width="120" to="/"/></a>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Concept</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/post" @click.native="hideMenu">Post a picture</router-link>
        <router-link class="mdl-navigation__link" to="/questions" @click.native="hideMenu">Take a Quiz</router-link>
        <router-link class="mdl-navigation__link" to="/test" @click.native="hideMenu">Test</router-link>

      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
        <button class="safe-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"@click="handleClick">StaySafe</button>
      </div>
    </main>
  </div>
</template>

<script>
  require('material-design-lite')

  export default {
    name: 'app',
    methods: {
      handleClick () { // handleClick aangeroepen > op het moment dat de gebruiker op de StaySafe button drukt, wordt zij naar google.com verwezen
        location.href = 'https://www.google.com/'
      },
      hideMenu: function () {
        document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
        document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
      }
    }
  }
</script>
<style scoped>
  .safe-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
</style>
