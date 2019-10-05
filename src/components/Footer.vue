<template lang="html">
  <footer class="footer-bar">
    <div class="content">
      <div class="container">
          <nav class="sponsors">
              <ul>
                  <li>Unisco</li>
              </ul>
          </nav>

          <nav class="policies">
              <ul>
                  <li><a href="" class="link">Privacy Policy</a></li>
                  <li><a href="" class="link">Terms &amp; Conditions</a></li>
              </ul>
          </nav>

          <nav class="sound">
              <ul>
                  <li>Sound <span>{{sound}}</span></li>
              </ul>
          </nav>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  data(){
    return {
      sound: 'on'
    }
  },
}
</script>

<style lang="scss">
.footer-bar{
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 160px;
  z-index: 9999;
  background-image: url('/assets/header/footer-bar.png');
  background-size: 110%;
  background-position: center top;
  .content{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 30px;
    font-size: 14px;
    font-family: 'Helvetica Neue';
    .container{
      display: flex;
      align-items: center;
      justify-content: space-between;
      nav{
        display: block;
      }
    }
  }
}
</style>
