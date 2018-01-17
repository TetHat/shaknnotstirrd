<template>
  <main class="app">
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: 1;
  min-width: 320px;
} // .app
</style>
