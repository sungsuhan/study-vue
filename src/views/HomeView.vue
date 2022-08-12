<template>
  <div className="home">
    <div><img alt="Vue logo" src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/6BgY/image/Ih6O-LkDt6xonJc22cWDMPx3KvY.JPG"></div>
    <span style="color: blue; font-size: 35px">우주패스 all,</span>
    <span style="font-size: 35px">이 모든 혜택이 </span>
    <span style="color: blue; font-size: 35px">첫달 1,000원! </span>
    <span style="font-size: 35px">(이후 월 9,900원)</span><br /><br /><br /><br />
    <div><img class="float" alt="num1" src="https://funissu.com/wp-content/uploads/2021/08/T%EC%9A%B0%EC%A3%BC%EC%9A%B0%EC%A3%BC%ED%8C%A8%EC%8A%A4-1.jpg"></div><br /><br /><br />
    <button type="button" class="btn btn-outline-secondary" @click="allPass" style="font-size: 15px">우주패스 all 보러가기 ></button><br /><br /><br /><br />
    <hr width="1400px" style="margin-left: 250px"><br /><br /><br />
    <div style="font-size: 35px">지금 HOT한 구독! 가장 인기있는 구독 상품</div><br /><br /><br /><br />
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
      <label class="btn btn-outline-primary" style="font-weight: bold; height: 80px; width: 250px; line-height: 65px" for="btnradio1"><img src="https://www.shinhancard.com/pconts/images/dx/contents/logo_wavve_rd.png" style="width: 30px"> wavve 구독</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
      <label class="btn btn-outline-primary" style="font-weight: bold; height: 80px; width: 250px; line-height: 65px" for="btnradio2"><img src="https://obj-kr.thewiki.kr/data/696d672d666c6f2d6c6f676f2e706e67.png" style="width: 30px"> FLO 구독</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
      <label class="btn btn-outline-primary" style="font-weight: bold; height: 80px; width: 250px; line-height: 65px" for="btnradio3"><img src="https://play-lh.googleusercontent.com/WcrqQ9atNdC7dp4vG4fWue0kRdMxiDSTKu9E1Zj7EmGcgdQ8j3u9_2Tt8vw-zPvKCkg" style="width: 30px"> TMAP 플러스 베이직 구독</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
      <label class="btn btn-outline-primary" style="font-weight: bold; height: 80px; width: 250px; line-height: 65px" for="btnradio4"><img src="https://play-lh.googleusercontent.com/_wpxnQ1w05P6VUwD22sr_tEaXuukvGZ3UCySdamRKS1N8g-u44CnDkDVOPmPdiv9Fgs" style="width: 30px"> 원스토리 패스 구독</label>
    </div><br /><br /><br />
    <img src="https://scm-cdn.tworld.co.kr/img/brandRnk/1638428781004/%EC%9B%A8%EC%9D%B4%EB%B8%8C-%EC%9D%B8%EA%B8%B0-PC.jpg"><br /><br /><br /><br /><br />
    <hr width="1400px" style="margin-left: 250px"><br /><br /><br />
    <div style="font-size: 35px">SKT 고객이라면 요금제로 할인은 기본!</div><br /><br /><br /><br />
    <img src="https://scm-cdn.tworld.co.kr/img/pcDpImg/1659625180383/img-skt-sale-01-220805-v1.jpg">
    <img src="https://scm-cdn.tworld.co.kr/img/pcDpImg/1659625201447/img-skt-sale-02-220805-v1.jpg">
    <img src="https://scm-cdn.tworld.co.kr/img/pcDpImg/1659675309913/pc-banner-wavve.png">
    <img src="https://scm-cdn.tworld.co.kr/img/pcDpImg/1659675338750/pc-banner-flo.png">
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>

</style>
