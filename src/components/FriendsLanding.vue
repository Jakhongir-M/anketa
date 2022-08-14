<template>
  <div class="partner">
    <div class="container">
      <div class="partner__box">
        <img
          data-wow-duration="1.25s"
          src="@/./assets/img/Partner/partner-1.svg"
          alt=""
          class="partner__img wow animated animate__backInUp"
        />
        <img
          data-wow-duration="1.50s"
          src="@/./assets/img/Partner/partner-2.svg"
          alt=""
          class="partner__img wow animated animate__backInUp"
        />
        <img
          data-wow-duration="1.70s"
          src="@/assets/img/Partner/partner-3.svg"
          alt=""
          class="partner__img wow animated animate__backInUp"
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
  max-width: 1635px;
  margin: 0 auto;
  padding: 0 20px;
}
.partner {
  &__img {
    width: 300px;
    height: 50px;
  }
  &__img:not(:first-child):not(:last-child) {
    padding: 0px 100px;
  }
  &__box {
    display: flex;
    justify-content: center;
  }
  .partner__box {
  }
}

@media screen and (max-width: 1220px) {
  .partner__img {
    width: 200px;
    height: 50px;
  }
  .partner__img:not(:first-child):not(:last-child) {
    padding: 0px 50px;
  }
}
@media screen and (max-width: 850px) {
  .partner__img {
    width: 200px;
    height: 50px;
  }
}
@media screen and (max-width: 805px) {
  .partner__img {
    width: 200px;
    height: 50px;
  }
  .partner__box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .partner__img {
  }
  .partner__img:not(:first-child):not(:last-child) {
    padding: 0px 0px;
  }
}
</style>
