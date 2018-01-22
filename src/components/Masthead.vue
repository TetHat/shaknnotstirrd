<template>
  <header class="masthead  js-masthead">
    <div class="masthead-links">
      <div>
        <a class="masthead__nav-toggle  hamburger hamburger--spin  js-nav-toggle" href="javascript:void(0);" v-on:click="toggleNav"><span class="hamburger-box"><span class="hamburger-inner"></span></span></a>
      </div>
      <router-link :to="'/#'" class="masthead__logo" v-scroll-to="{
        el: '#index',
        duration: 750
      }" v-on:click="closeNav">
        <img src="../assets/img/logo.svg">
      </router-link> <!--router-link-->
      <div class="masthead__cart">
        <a class="masthead__cart-link" href="javascript:void(0);">{{cart.items}}</a>
      </div> <!--/.masthead__cart-->
    </div> <!--/.masthead__cart-link-->

    <nav class="nav  js-main-nav">
      <ul class="nav__list">
        <router-link v-for="route in this.$router.options.routes[0].components" tag="li" :key="route.key" :to="'#' + route.name.toLowerCase()">
          <a v-if="!excludeRoutes.includes(route.name.toLowerCase())" class="nav__link" v-scroll-to="{
            el: '#' + route.name.toLowerCase(),
            duration: 750
          }" v-on:click="closeNav">{{ route.name }}</a>
        </router-link> <!--router-link-->
      </ul> <!--/.nav__list-->
    </nav> <!--/.nav-->
  </header> <!--/.index-->
</template> <!--/script-->

<script>
export default {
  name: 'Masthead',
  methods: {
    closeNav: function () {
      console.log('testing')
      document.querySelector('.js-nav-toggle').classList.remove('is-active')
      document.querySelector('.js-masthead').classList.remove('is-open')
    },
    toggleNav: function () {
      document.querySelector('.js-nav-toggle').classList.toggle('is-active')
      document.querySelector('.js-masthead').classList.toggle('is-open')
    }
  },
  props: ['cart', 'excludeRoutes']
}
</script> <!--/script-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $color-gold: #d1a12a;
  $color-white: #ffffff;

  .masthead {
    background-color: $color-white;
    position: fixed;
    width: 100vw;
    z-index: 100;

    &-links {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 26px 36px 38px;
      position: relative;
    } // &-links

    &__cart-link {
      background-color: $color-gold;
      border-radius: 4px 4px 2px 2px;
      box-sizing: border-box;
      color: $color-white;
      display: block;
      font-size: 20px;
      font-weight: 500;
      float: right;
      height: 36px;
      padding-top: 10px;
      position: relative;
      text-align: center;
      text-decoration: none;
      width: 36px;

      &::after{
        border: 2px solid $color-gold;
        border-radius: 5px 5px 0 0;
        display: block;
        content: '';
        height: 6px;
        left: 50%;
        position: absolute;
        top: -8px;
        transform: translateX(-50%);
        width: 50%;
      } // &::after
    } // &__cart-link

    &__logo {
      position: absolute;
      left: 50%;
      top: 18px;
      transform: translateX(-50%);
      transition: top .5s ease;
      z-index: 999;

      img {
        max-width: 200px;
        width: 30vw;
      } // img
    } // &__logo

    &__nav-toggle {
      line-height: 0;
    } // &__nav-toggle

    &.is-open {

      .masthead__logo {
        top: calc(18px + 200px);
      } // .masthead__logo

      .nav, .nav__list {
        height: 200px;
      } // .nav
    } // &.is-open

    .nav {
      height: 0;
      overflow: hidden;
      padding: 0 36px;
      transition: height .5s ease;

      &__list {
        height: 0;
        list-style: none;
        transition: height .5s ease;
      } // &__list
    } // .nav
  } // .masthead
</style> <!--/style-->
