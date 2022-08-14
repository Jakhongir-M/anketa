<template>
  <div class="container">
    <div class="hero">
      <div class="hero__left">
        <h1
          data-wow-duration="1.60s"
          class="hero__title wow animated animate__backInUp"
        >
          Мастер подбора кредитов
        </h1>
        <p
          data-wow-duration="1.80s"
          class="hero__desc wow animated animate__backInUp"
        >
          Персональный подбор кредита на любые цели и отправка заявки в банк
        </p>
      </div>
      <div class="hero__right">
        <img
          data-wow-duration="2s"
          class="hero__img wow animated animate__backInUp"
          src="@/./assets/img/hero/hero-img.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  data() {
    return {
      mounted() {
        new WOW().init();
      },
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1400x;
  margin: 0 auto;
  padding: 0 20px;
}
.hero {
  padding-top: 170px;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 200px;
}
.hero__left {
  max-width: 800px;
}
.hero__title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 75px;
  line-height: 91px;
  margin: 0px;
  padding: 0px;
  margin-bottom: 30px;
  margin-top: 20px;

  color: #ffffff;
}
.hero__desc {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  color: #ffffff;
  margin: 0px;
  padding: 0px;
}

.hero__right {
}
.hero__img {
  max-width: 500px;
  max-height: 500px;
}
@media screen and (max-width: 1220px) {
  .hero {
    padding-top: 100px;
    padding-bottom: 70px;
  }
  .hero__left {
    max-width: 500px;
  }
  .hero__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    margin-top: 20px;
  }
  .hero__img {
    max-width: 300px;
    max-height: 300px;
  }
  .hero__desc {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
}
@media screen and (max-width: 850px) {
  .hero {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  .hero__left {
    max-width: 400px;
  }
  .hero__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    margin: 0px;
    margin-top: 20px;
  }
  .hero__img {
    max-width: 300px;
    max-height: 300px;
  }
}
@media screen and (max-width: 700px) {
  .hero__left {
    max-width: 300px;
  }
  .hero__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    margin-top: 20px;
  }
  .hero__img {
    max-width: 250px;
    max-height: 250px;
  }
}
@media screen and (max-width: 570px) {
  .hero {
    flex-direction: column;
    align-items: center;
  }
  .hero__left {
    max-width: 300px;
  }
  .hero__title {
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    margin: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .hero__img {
    max-width: 300px;
    max-height: 300px;
  }
  .hero__desc {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 500px) {
  .hero__left {
    max-width: 300px;
  }
  .hero__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    margin: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .hero__img {
    max-width: 250px;
    max-height: 250px;
  }
  .hero__desc {
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
  }
}
@media screen and (max-width: 400px) {
  .hero__left {
    max-width: 300px;
  }
  .hero__title {
    font-weight: 700;
    font-size: 30px;
    line-height: 25px;
    margin: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .hero__img {
    max-width: 250px;
    max-height: 250px;
  }
  .hero__desc {
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
  }
  @media screen and (max-width: 350px) {
    .hero__left {
      max-width: 300px;
    }
    .hero__title {
      font-weight: 700;
      font-size: 30px;
      line-height: 35px;
      margin: 0px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .hero__img {
      max-width: 250px;
      max-height: 250px;
    }
    .hero__desc {
      font-weight: 600;
      font-size: 20px;
      line-height: 20px;
    }
  }
}
</style>
