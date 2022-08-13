<template>
  <div class="hero-background">
    <header-landing> </header-landing>
    <hero-landing> </hero-landing>
  </div>
  <partner-landing> </partner-landing>
  <how-working-landing></how-working-landing>
  <div class="footer-background">
    <footer-landing></footer-landing>
  </div>
</template>
<script>
import HeaderLanding from "@/./components/HeaderLanding.vue";
import HeroLanding from "@/./components/HeroLanding.vue";
import PartnerLanding from "@/components/FriendsLanding.vue";
import HowWorkingLanding from "@/components/HowWorkingLanding.vue";
import FooterLanding from "@/components/FooterLanding.vue";

export default {
  data() {
    return {};
  },
  components: {
    HeaderLanding,
    HeroLanding,
    PartnerLanding,
    HowWorkingLanding,
    FooterLanding,
  },
};
</script>
<style>
.hero-background {
  background-image: url("@/./assets/img/hero/backgroudHeader.png");
  background-repeat: no-repeat;
  background-position: center;
  background-position: top left;
  background-size: 100% 100%;
}
.footer-background {
  background-image: url("@/./assets/img/Footer/Footer.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
@media screen and (max-width: 1220px) {
  .hero-background {
    background-size: 85% 100%;
  }
  .footer-background {
  }
}
@media screen and (max-width: 920px) {
  .hero-background {
    background-size: 85% 100%;
  }
  .footer-background {
    background-size: cover;
  }
}
@media screen and (max-width: 700px) {
  .hero-background {
    background-size: 120% 100%;
  }
}
</style>
