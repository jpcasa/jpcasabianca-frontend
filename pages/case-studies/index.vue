<template>
  <section id="cases">

    <section id="case-studies-top">
      <div class="container mobile">
        <SimpleTitle
          id="simple-title-case-top"
          class="text-center"
          title="I Love Creating and Building Cool Stuff"
          subtitle="Creative process in action"
          copy=""
          theme="light" />
      </div>
      <img src="img/case-studies-top.png" alt="Case Studies Top" class="mobile">
      <div class="container text-center mobile">
        <p class="copy">Nothing is cooler than the real thing. You can check out my <a href="https://www.behance.net/holae2af" target="_blank">Behance</a> account if you want to see my design work. To check out some public stuff I’ve made go to <a href="https://github.com/jpcasa" target="_blank">Github</a> or <a href="https://bitbucket.org/jpcasabianca/" target="_blank">Bitbucket</a>. If you’re looking for the complete story scroll down.</p>
      </div>
      <div class="case-studies-desktop">
        <SimpleTitle
          id="simple-title-case-top-desktop"
          class="text-center"
          title="I Love Creating and Building Cool Stuff"
          subtitle="Creative process in action"
          copy='Nothing is cooler than the real thing. You can check out my <a href="https://www.behance.net/holae2af" target="_blank">Behance</a> account if you want to see my design work. To check out some public stuff I’ve made go to <a href="https://github.com/jpcasa" target="_blank">Github</a> or <a href="https://bitbucket.org/jpcasabianca/" target="_blank">Bitbucket</a>. If you’re looking for the complete story scroll down.'
          theme="light" />
        <div class="case-studies-desktop-img">
          <img src="img/case-studies-top-desktop.png" alt="Case Studies JP Casabianca" class="desktop" id="simple-title-case-img">
        </div>
      </div>
    </section>

    <section id="printa-delivery">
      <div class="container">
        <PortfolioCard class="mobile"
          :title="case_studies.printa_delivery.title"
          :subtitle="case_studies.printa_delivery.subtitle"
          :copy='case_studies.printa_delivery.summary'
          :cta="case_studies.printa_delivery.cta"
          :ctaUrl="case_studies.printa_delivery.url"
          :comingSoon="case_studies.printa_delivery.coming_soon" />
      </div>
      <div class="portfolio-flex desktop" id="printa-desktop">
        <div class="portfolio-card-flex" id="printa-back">
          <PortfolioCardSimple
            :url="case_studies.printa_delivery.url"
            :title="case_studies.printa_delivery.title"
            :tags="case_studies.printa_delivery.tags"
            :comingSoon="case_studies.printa_delivery.coming_soon" />
        </div>
        <TitleWithCta
          id="portfolio-printa"
          class="padding-right"
          :title="case_studies.printa_delivery.title"
          :subtitle="case_studies.printa_delivery.subtitle"
          :copy='case_studies.printa_delivery.summary'
          :cta="case_studies.printa_delivery.cta"
          :ctaUrl="'/case-studies/' + case_studies.printa_delivery.url"
          :comingSoon="case_studies.printa_delivery.coming_soon"
          action="push"
          theme="light" />
      </div>
    </section>

    <section id="mapps360">
      <div class="container">
        <PortfolioCard class="mobile"
          :title="case_studies.mapps.title"
          :subtitle="case_studies.mapps.subtitle"
          :copy='case_studies.mapps.summary'
          :cta="case_studies.mapps.cta"
          :ctaUrl="case_studies.mapps.url"
          :comingSoon="case_studies.mapps.coming_soon" />
      </div>
      <div class="portfolio-flex desktop" id="mapps360-desktop">
        <TitleWithCta
          id="portfolio-printa"
          class="padding-left"
          :title="case_studies.mapps.title"
          :subtitle="case_studies.mapps.subtitle"
          :copy='case_studies.mapps.summary'
          :cta="case_studies.mapps.cta"
          :ctaUrl="'/case-studies/' + case_studies.mapps.url"
          :comingSoon="case_studies.mapps.coming_soon"
          action="push"
          theme="light" />
        <div class="portfolio-card-flex" id="codesign-back">
          <PortfolioCardSimple
            :url="case_studies.mapps.url"
            :title="case_studies.mapps.title"
            :tags="case_studies.mapps.tags"
            :comingSoon="case_studies.mapps.coming_soon" />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import SimpleTitle from '~/components/Elements/Titles/SimpleTitle.vue'
import TitleWithCta from '~/components/Elements/Titles/TitleWithCta.vue'
import PortfolioCard from '~/components/Elements/Cards/PortfolioCard.vue'
import PortfolioCardSimple from '~/components/Elements/Cards/PortfolioCardSimple.vue'

import data from '~/assets/data/simple.json'

export default {
  data() {
    return {
      case_studies: data.case_studies
    }
  },
  components: {
    SimpleTitle,
    TitleWithCta,
    PortfolioCard,
    PortfolioCardSimple
  }
}
</script>

<style lang="scss">
@import '~/assets/css/helpers/_variables.scss';

#printa-desktop,
#mapps360-desktop {
  display: none;
}

#cases {
  padding-bottom: 50px;
}

#case-studies-top {
  padding: 70px 0 30px 0;
  #simple-title-case-top {
    .subtitle {
      margin: 0 0 6px 0;
    }
  }
  .copy {
    color: $color-gray-heavy;
    a {
      color: $color-green;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.portfolio-flex {
  display: flex;
  align-items: center;
  .simple-title,
  .title-with-cta {
    flex: 2;
  }
  .portfolio-card-flex {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .padding-right {
    padding-right: 50px;
  }
  .padding-left {
    padding-left: 50px;
  }
}

#printa-back {
  background-image: url('~/static/img/printa-back.png');
  background-size: cover;
  background-position: left;
  min-height: 600px;
}

#codesign-back {
  background-image: url('~/static/img/codesign-back.png');
  background-size: cover;
  background-position: right;
  min-height: 600px;
}

#mapps360-back {
  background-image: url('~/static/img/mapps360-back.png');
  background-size: cover;
  background-position: left;
  min-height: 600px;
}

.case-studies-desktop {
  align-items: center;
  display: none;
  #simple-title-case-top-desktop {
    flex: 2;
    margin-left: 50px;
    text-align: left;
  }
  .case-studies-desktop-img {
    flex: 3;
  }
}

@media (min-width: 992px) {
  #case-studies-top {
    display: flex;
    padding-top: 0;
    align-items: center;
  }
  .case-studies-desktop {
    display: flex;
  }
  #printa-desktop,
  #mapps360-desktop {
    display: flex;
  }
}
</style>
