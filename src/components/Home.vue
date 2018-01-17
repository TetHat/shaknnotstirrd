<template>
  <section class="index">
    <div class="hero">
      <h1 class="hero__headline">Welcome</h1>
      <h2 class="hero__subhead">to shakn not stirrd, a creative place to showcase paintings, photography &amp;&nbsp;shirts.</h2>
    </div> <!--/.hero-->
  </section> <!--/.index-->
</template> <!--/script-->

<script>
export default {
  name: 'Home'
}
</script> <!--/script-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $color-white: #ffffff;

  .index {
    background-image: url('../assets/img/welcome-background.jpg');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    color: $color-white;
    height: 100vh;
    position: relative;
    text-align: center;
    width: 100vw;

    .hero {
      padding: 0 20px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);

      &__headline {
        font-family: 'Freestyle Script';
        font-size: calc(36px + 5vw);
        font-weight: 400;
        line-height: .75;

        &::after {
          background-color: $color-white;
          border-radius: 3px;
          content: '';
          display: block;
          height: .4vh;
          left: 50%;
          max-height: 3px;
          position: relative;
          top: -.6vh;
          transform: translateX(-50%);
          width: calc(35vw + 100px);
        }
      } // &__headline

      &__subhead {
        font-family: 'Nexa Bold';
        font-size: calc(14px + .65vw);
      } // &__headline
    } // .hero
  } // .index
</style> <!--/style-->
