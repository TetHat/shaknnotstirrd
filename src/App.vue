<template>
  <main class="app">
    <router-view name="masthead" v-bind:cart="cart" v-bind:excludeRoutes="excludeRoutes"></router-view>
    <router-view name="default"></router-view>
    <router-view name="about"></router-view>
  </main>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      cart: {
        items: 0
      },
      excludeRoutes: [
        'home',
        'masthead'
      ]
    }
  }
}
</script>

<style lang="scss">
$hamburger-hover-opacity: 1;
$hamburger-layer-border-radius: 0;
$hamburger-layer-color: #d1a12a;
$hamburger-layer-height: 5px;
$hamburger-layer-spacing: 9px;
$hamburger-layer-width: 40px;
$hamburger-padding-x  : 0;
$hamburger-padding-y  : 0;
@import '../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss';

@font-face {
  font-family: 'Nexa Bold';
  src: url('./assets/font/NexaBold.otf');
} // @font-face

@font-face {
  font-family: 'Nexa Light';
  src: url('./assets/font/NexaLight.otf');
} // @font-face

@font-face {
  font-family: 'Freestyle Script';
  src: url('./assets/font/FreestyleScriptStd.otf');
} // @font-face

* {
  margin: 0;
  padding: 0;
} // *

.app {
  font-family: 'Nexa Bold', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: 1;
  min-width: 320px;

  section {
    padding-top: 100px;
  } // section
} // .app
</style>
