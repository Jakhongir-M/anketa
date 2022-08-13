<template>
  <div class="footer">
    <div class="container">
      <div class="footer__box">
        <div class="footer__box-left">
          <h3 class="box__left-title">О нас.</h3>
          <p class="box__left-desc">
            Сервис «Мастер подбора кредита» осуществляет бесплатный поиск
            выгодных предложений с учетом кредитной истории заемщика.
          </p>
        </div>
        <div class="footer__box-right">
          <h3 class="footer__right-title">Связь</h3>
          <ul class="footer__list">
            <li class="footer__item">
              <a href="" class="footer__link">Адрес</a>
            </li>
            <li class="footer__item">
              <a href="" class="footer__link">Контакные данные</a>
            </li>
            <li class="footer__item">
              <a href="" class="footer__link">Подробнее</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__bottom-desc">
          © 2022 ООО «1anketa.uz Искусственный интеллект». ОГРН: 12122
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 20px;
}
.footer {
  padding-top: 300px;
}
.footer__box {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footer__box-left {
  max-width: 300px;
  margin-bottom: 40px;
}
.box__left-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
  margin-bottom: 20px;
  color: #ffffff;
}
.box__left-desc {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;
}
.footer__box-right {
}
.footer__box-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
}
.footer__list {
}
.footer__item {
  margin-bottom: 15px;
}
.footer__right-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  margin-bottom: 35px;

  color: #ffffff;
}
.footer__link {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  opacity: 0.75;
}
.footer__link:hover {
  opacity: 0.5;
}
.footer__bottom-desc {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 35px;
  letter-spacing: 0.04em;
  color: #ffffff;
}
@media screen and (max-width: 800px) {
  .hero__left {
    max-width: 300px;
  }
  .box__left-desc {
    font-weight: 600;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
  }
  .box__left-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 44px;
    text-align: center;
  }
  .footer__box {
    flex-direction: column;
  }
  .footer__item {
    text-align: center;
  }
  .footer__right-title {
    text-align: center;
  }
}
</style>
