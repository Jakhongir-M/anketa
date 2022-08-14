<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <a
          data-wow-duration="1s"
          class="header__logo-link wow animated animate__fadeInTopLeft"
          href=""
        >
          <img class="header__logo-img" src="@/./assets/img/Logo.svg" alt=""
        /></a>
        <button
          data-wow-duration="1.25s"
          class="header__btn wow animated animate__fadeInTopRight"
        >
          Login
          <img
            class="header__btn-arrow"
            src="@/./assets/img/btn-arrow.svg"
            alt=""
          />
        </button>
      </nav>
    </div>
  </header>
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
.header {
  .header__logo-img {
    width: 200px;
    height: 45px;
  }
  .header__nav {
    padding-top: 50px;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .header__btn {
    background: linear-gradient(262.04deg, #568cf5 13.45%, #4d70ef 84.44%);
    box-shadow: 0px 0px 35px 3px rgba(98, 95, 239, 0.5);
    border-radius: 25px;
    padding-left: 50px;
    padding-right: 60px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 20px;
    font-size: 32px;
    color: #ffffff;
    border: none;
  }
  &__btn:hover {
    opacity: 0.7;
  }
  &__btn:active {
    opacity: 0.6;
  }
  &__btn-arrow {
    margin: -3px;
  }

  .container {
    max-width: 1635px;
    margin: 0 auto;
    padding: 0 20px;
  }

  @media screen and (max-width: 900px) {
    .header__logo-img {
      width: 150px;
      height: 45px;
    }
    .header__btn {
      padding-left: 35px;
      padding-right: 40px;
      padding-top: 15px;
      padding-bottom: 15px;
      font-size: 20px;
    }
    .header__btn-arrow {
      width: 30px;
    }
  }
  @media screen and (max-width: 550px) {
    .header__btn {
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 15px;
      padding-bottom: 15px;
      font-size: 20px;
    }
    .header__btn-arrow {
      margin: 0px;
      width: 20px;
    }
  }
  @media screen and (max-width: 400px) {
    .header__btn {
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 20px;
    }
    .header__btn-arrow {
      width: 20px;
    }
    .header__logo-img {
      width: 100px;
      height: 45px;
    }
  }
}
</style>
