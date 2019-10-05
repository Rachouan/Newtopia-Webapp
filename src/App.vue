<template>
<div id="app">
  <Navbar/>
  <router-view />
  <Footer/>
</div>
</template>

<script>
// @ is an alias to /src
import newtopia from '@/data/newtopia'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  TweenMax,
  Power2,
  TimelineLite
} from "gsap/TweenMax";
import $ from 'jquery';
//import db from '@/firebase/init'

export default {
  components: {
    Navbar,
    Footer
  },
  created() {

    this.newtopia = newtopia

    $(document)
      .on("mousemove", ".dynamic", function(event) {

        var halfW = (this.clientWidth / 2);

        var halfH = (this.clientHeight / 2);

        var coorX = (halfW - (event.pageX - $(this).offset().left));

        var coorY = (halfH - (event.pageY - $(this).offset().top));

        var degX = ((coorY / halfH) * 10) + 'deg'; // max. degree = 10

        var degY = ((coorX / halfW) * -10) + 'deg'; // max. degree = 10

        $(this).css('transform', function() {

            return 'perspective( 2000px ) translate3d( 0, -2px, 0 ) scale(1.1) rotateX(' + degX + ') rotateY(' + degY + ')';
          })
          .children('.dynamic__attribute')
          .css('transform', function() {
            return 'perspective( 2000px ) translate3d( 0, 0, 0 ) rotateX(' + degX + ') rotateY(' + degY + ')';
          });
      })
      .on("mouseout", ".dynamic", function() {

        $(this).removeAttr('style')
          .children('.dynamic__attribute')
          .removeAttr('style');
      });

  }
}
</script>

<style lang="scss">
$black: #0B1202;

button:focus,
input:focus,
textarea:focus {
    outline: none;
}

input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
}
@mixin transform($transforms) {
    -webkit-transform: $transforms;
    -moz-transform: $transforms;
    -ms-transform: $transforms;
    transform: $transforms;
}
@mixin transform-origin ($origin) {
    -webkit-transform-origin: $origin;
    -moz-transform-origin: $origin;
    -ms-transform-origin: $origin;
    transform-origin: $origin;
}
@mixin delay($delay) {
    -moz-transition-delay: $delay;
    -o-transition-delay: $delay;
    -webkit-transition-delay: $delay;
    transition-delay: $delay;
}
@mixin box-shadow($size) {
    -webkit-box-shadow: 0 0 $size -10px rgba(0,0,0,.3);
    box-shadow: 0 0 $size -10px rgba(0,0,0,.3);
}
//$bezier
@mixin ease-bezier($sec,$bezier) {
    -webkit-transition: all $sec $bezier;
    -moz-transition: all $sec $bezier;
    -o-transition: all $sec $bezier;
    transition: all $sec $bezier;
    /* custom */
    -webkit-transition-timing-function: $bezier;
    -moz-transition-timing-function: $bezier;
    -o-transition-timing-function: $bezier;
    transition-timing-function: $bezier;
    /* custom */
}

@font-face {
    font-family: 'Noe Display';
    src: url("/assets/fonts/NoeDisplay-Bold.woff2") format('woff2'), url("/assets/fonts/NoeDisplay-Bold.woff2") format('woff');
    font-weight: bold;
    font-style: normal;
}
* {
    margin: 0;
    padding: 0;
}
li {
    display: inline-block;
}
body {
    background: $black;
    font-size: 62%;
}
h1,h2,h3,h4,h5{
  font-family: 'Noe Display';
}
.container{
  margin: 0 auto;
  width: 1100px;
}
.dynamic{
  transition: transform 0.5s cubic-bezier(.215, .61, .355, 1), box-shadow 0.5s cubic-bezier(.215, .61, .355, 1);
  transform: perspective(600px) translate3d(0, 0, 0);
  opacity: 1;
}
.position-center{
  position: absolute;
  left: 50%;
  top: 50%;
  @include transform(translate(-50%,-50%));
}
.link{
  color: #ffffff;
  opacity: .5;
  text-decoration: none;
  margin: 0 10px;
  &:hover{
    opacity: 1;
    @include ease-bezier(.6,cubic-bezier(.215, .61, .355, 1));
  }
}
.btn{
  padding: 35px 50px;
  cursor: pointer;
  background-color: $black;
  color: #ffffff;
  mask-image: url("/assets/mask-image.png");
  mask-size: 1600% 100%;
  mask-repeat: no-repeat;
  mask-position: right 0 !important;
  font-family: 'Maison Neue';
  font-weight: bold;
  font-size: 16px;
}
#app {
    font-family: 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #FFFFFF;
}
</style>
