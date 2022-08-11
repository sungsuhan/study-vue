<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/">
        <img class="navbar-brand" src="https://img.etnews.com/photonews/0804/200804180153_18050505_1914353948_l.jpg" />
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="fw-bolder">
              <a class="nav-link" href="/board/list">상품서비스</a>
            </li>
            <li class="fw-bolder">
              <a class="nav-link" href="#">T다이렉트샵</a>
            </li>
            <li class="fw-bolder">
              <a class="nav-link" href="/">T우주</a>
            </li>
            <li class="fw-bolder">
              <a class="nav-link" href="#">T멤버십</a>
            </li>
            <li class="fw-bolder">
              <a class="nav-link" href="#">T로밍</a>
            </li>
            <li class="fw-bolder">
              <a class="nav-link" href="#">혜택/이벤트</a>
            </li>
            <li class="fw-bolder">
              <a class="nav-link" href="#">고객지원</a>
            </li>
            <li class="nfw-bolder">
              <a class="nav-link" href="#">SKT 5GX</a>
            </li>
            <li class="fw-bolder">
              <a class="nav-link" href="#">TworldBiz</a>
            </li>
            <li>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style="color: red">
                myT
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">로그인</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">회원가입</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
img{width: 50px}
</style>
