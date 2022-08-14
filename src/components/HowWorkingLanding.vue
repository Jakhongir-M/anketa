<template>
  <div class="HowWorking">
    <div class="container">
      <h2
        data-wow-duration="2.50s"
        class="HowWorking__title wow animate__backInUp"
      >
        Как работает Сервис?
      </h2>
      <div class="HowWorking__box">
        <div class="HowWorking__left">
          <div class="HowWorking__box-item">
            <img
              data-wow-duration="1s"
              class="HowWorking__box-img wow animated animate__fadeInTopLeft"
              src="@/./assets/img/HowWorking/HowWorking-1.svg"
              alt=""
            />
            <p class="HowWorking__desc">
              Заполните анкету <br />
              на 1anketa.uz
            </p>
          </div>
          <div class="HowWorking__box-item">
            <img
              data-wow-duration="1s"
              class="HowWorking__box-img wow animated animate__fadeInTopLeft"
              src="@/./assets/img/HowWorking/HowWorking-2.svg"
              alt=""
            />
            <p class="HowWorking__desc">
              Выберите лучшее <br />
              предложение
            </p>
          </div>
        </div>
        <div class="HowWorking__right">
          <div class="HowWorking__box-item">
            <img
              data-wow-duration="1s"
              class="HowWorking__box-img wow animate__fadeInTopLeft"
              src="@/./assets/img/HowWorking/HowWorking-3.svg "
              alt=""
            />
            <p class="HowWorking__desc">
              Заявка в <br />
              один клик
            </p>
          </div>
          <div class="HowWorking__box-item">
            <img
              data-wow-duration="1s"
              class="HowWorking__box-img wow animate__fadeInTopLeft"
              src="@/./assets/img/HowWorking/HowWorking-4.svg"
              alt=""
            />
            <p class="HowWorking__desc">
              Решение в <br />
              течение 15 минут
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  mounted() {
    new WOW().init();
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 20px;
}
.HowWorking {
  padding-top: 250px;
  background-image: url("@/./assets/img/backgroun-How-Working.png");
  background-repeat: no-repeat;
  background-position: 100% 0%;
  background-size: 15% 50%;

  &__title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    margin-bottom: 150px;
  }
  &__desc {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    padding: 0;
    margin: 0;
  }
  &__box {
    display: flex;
    justify-content: space-between;
  }
  &__box-item {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  }
  &__box-img {
    width: 150px;
    height: 150px;
  }
}
@media screen and (max-width: 1220px) {
  .HowWorking__title {
    font-size: 50px;
  }
  .HowWorking {
    padding-top: 150px;
    background-size: 15% 50%;
  }
  .HowWorking__desc {
    text-align: center;
  }
  @media screen and (max-width: 850px) {
    .HowWorking__title {
      font-size: 50px;
    }
    .HowWorking {
      padding-top: 60px;
      background-size: 25% 50%;
    }
    .HowWorking__title {
      text-align: center;
    }
    .HowWorking__desc {
    }
  }
  @media screen and (max-width: 720px) {
    .HowWorking__title {
      font-size: 30px;
    }
    .HowWorking {
      padding-top: 70px;
      background-size: 35% 40%;
    }
    .HowWorking__title {
      margin-bottom: 80px;
    }
    .HowWorking__box {
      display: flex;
      flex-direction: column;
    }
    .HowWorking__box-item {
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
    }
    .HowWorking__box-img {
      width: 150px;
      height: 150px;
    }
    .HowWorking__desc {
      font-weight: 600;
      font-size: 25px;
      line-height: 30px;
    }
    @media screen and (max-width: 550px) {
      .HowWorking {
        background-size: 35% 30%;
      }
    }
  }
}
</style>
