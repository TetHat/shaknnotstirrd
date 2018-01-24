<template>
  <header class="masthead  js-masthead">
    <div class="masthead-links">
      <div>
        <a class="masthead__nav-toggle  hamburger hamburger--spin  js-nav-toggle" href="javascript:void(0);" v-on:click="toggleNav"><span class="hamburger-box"><span class="hamburger-inner"></span></span></a>
      </div>
      <router-link :to="'/#'" class="masthead__logo" v-scroll-to="{
        el: '#index',
        duration: 750
      }" v-on:click.native="closeNav">
        <img src="../assets/img/logo.svg">
      </router-link> <!--router-link-->
      <div class="masthead__cart">
        <a class="masthead__cart-link" href="javascript:void(0);">{{cart.items}}</a>
      </div> <!--/.masthead__cart-->
    </div> <!--/.masthead__cart-link-->

    <nav class="nav  js-main-nav">
      <ul class="nav__list">
        <router-link v-for="route in this.$router.options.routes[0].components" v-on:click.native="closeNav" tag="li" :key="route.key" :to="'#' + route.name.toLowerCase()">
          <a v-if="!excludeRoutes.includes(route.name.toLowerCase())" class="nav__link" v-scroll-to="{
            el: '#' + route.name.toLowerCase(),
            duration: 750
          }">{{ route.name }}</a> <!--/.nav__link-->
        </router-link> <!--router-link-->
      </ul> <!--/.nav__list-->
    </nav> <!--/.nav-->
  </header> <!--/.index-->
</template> <!--/template-->

<script>
export default {
  name: 'Masthead',
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    condenseMasthead: function () {
      if (this.scrollTop > 0) {
        this.masthead.classList.add('is-condensed')
      } else {
        this.masthead.classList.remove('is-condensed')
      }
    },
    closeNav: function () {
      this.navToggle.classList.remove('is-active')
      this.masthead.classList.remove('is-open')
    },
    handleScroll: function () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop
      this.condenseMasthead()
    },
    toggleNav: function () {
      this.navToggle.classList.toggle('is-active')
      this.masthead.classList.toggle('is-open')
    }
  },
  mounted () {
    this.masthead = document.querySelector('.js-masthead')
    this.navToggle = document.querySelector('.js-nav-toggle')
    this.scrollTop = 0
  },
  props: ['cart', 'excludeRoutes']
}
</script> <!--/script-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/scss/_mixins.scss';
  $color-gold: #d1a12a;
  $color-white: #ffffff;

  .masthead {
    @include hamburger(
      $hamburger-hover-opacity: 1,
      $hamburger-layer-border-radius: 0,
      $hamburger-layer-color: $color-gold,
      $hamburger-layer-height: 5px,
      $hamburger-layer-spacing: 5px,
      $hamburger-layer-width: 40px,
      $hamburger-padding-x  : 0,
      $hamburger-padding-y  : 0
    );
    @include spin();
    background-color: $color-white;
    position: fixed;
    width: 100vw;
    z-index: 100;

    &-links {
      box-sizing: border-box;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      max-height: 80px;
      min-height: 50px;
      padding: 26px 36px;
      position: relative;
      transition: max-height .5s ease, padding .5s ease;

      @media only screen and (min-width: 320px) and (max-width: 736px) {
        max-height: 50px;
        padding: 12px 20px;
      } // @media
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
      transition: height .5s ease, width .5s ease, padding-top .5s ease, font-size .5s ease;
      width: 36px;

      &::after {
        border: 2px solid $color-gold;
        border-radius: 5px 5px 0 0;
        display: block;
        content: '';
        height: 6px;
        left: 50%;
        position: absolute;
        top: -8px;
        transform: translateX(-50%);
        transition: top .5s ease;
        width: 50%;
      } // &::after

      @media only screen and (min-width: 320px) and (max-width: 812px) {
        font-size: 16px;
        height: 24px;
        padding-top: 6px;
        top: 4px;
        width: 24px;

        &::after {
          top: -6px;
        } // &::after
      } // @media
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
        transition: max-width .5s ease, width .5s ease;
        width: 30vw;

        @media only screen and (max-width: 812px) and (orientation: landscape) {
          max-width: 150px;
          width: 15vw;
        } // @media
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
        height: 30vh;
      } // .nav, .nav__list
    } // &.is-open

    .nav {
      height: 0;
      max-height: 200px;
      overflow: hidden;
      padding: 0 36px;
      transition: height .7s ease;

      &__list {
        height: 0;
        list-style: none;
        transition: height .7s ease;
      } // &__list
    } // .nav
  } // .masthead

  .masthead.is-condensed {

    .masthead__cart-link {
      font-size: 16px;
      height: 24px;
      padding-top: 6px;
      top: 4px;
      width: 24px;

      &::after {
        top: -6px;
      } // &::after
    } // .masthead__cart-link

    .masthead-links {
      max-height: 50px;
      padding: 12px 36px;

      @media only screen and (min-width: 320px) and (max-width: 812px) {
          padding: 12px 20px;
      } // @media
    } // .masthead-links

    .masthead__logo {

      img {
        max-width: 75px;
        width: 15vw;
      } // img
    } // .masthead__logo
  } // .masthead.is-condensed
</style> <!--/style-->
