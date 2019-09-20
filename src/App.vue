<template>
<div id="app">
  <router-view />
</div>
</template>

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
.position-center{
  position: fixed;
  left: 50%;
  top: 50%;
  @include transform(translate(-50%,-50%));
}
#app {
    font-family: 'Noe Display', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #FFFFFF;
}
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
