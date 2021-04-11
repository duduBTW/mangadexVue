<template>
  <div class="card">
    <img src="" alt="" />
    <div class="top">
      <div class="views">10.000</div>
      <div class="fav">4.3</div>
    </div>
    <div class="bottom">Kemono Jihen</div>
  </div>
</template>

<script>
export default {
  name: "MangaCard",
};
</script>

<style scoped>
.card {
  scroll-snap-align: start;
  cursor: pointer;
  height: 200px;
  min-width: 150px;
  width: 150px;
  /* background: green; */
  border: 2px solid var(--main);
  border-radius: 10px;
  background-image: url("https://img.supermangas.site/img/animes/11737-large.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
}

.views {
  color: var(--second);
}

.fav {
  color: #edd908;
}

.top {
  position: absolute;
  top: 0px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  height: 55px;
  left: 0px;
  right: 0px;
  border-radius: 6px 6px 0px 0px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;

  font-size: 12px;
  font-weight: 600;
}

.bottom {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.85) 100%
  );
  border-radius: 0px 0px 6px 6px;
  height: 55px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;

  display: flex;
  align-items: flex-end;
  padding: 10px;

  font-family: "Rubik", sans-serif;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s;
}
</style>
