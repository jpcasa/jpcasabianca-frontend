<template lang="html">
  <div id="main-jpc">

    <nuxt-link class="icon-arrow-left" id="jp-back" to="/case-studies"></nuxt-link>

    <section id="jp-section-1">
      <div class="cont">
        <TitleWithCta
          title="Presenting: The new JP Casabianca Website"
          subtitle="Time For a Change!"
          copy='Winter is coming and it was time for a change. I decided to update my website and use it as an experiment to use Django Rest Framework with Nuxt.js.'
          cta="Discover It"
          ctaUrl="jp-section-2"
          action="scroll"
          theme="dark" />
        <img src="~/static/img/computer.png" alt="Computer" id="comp">
      </div>
    </section>

    <section id="jp-section-2">
      <div class="cont text-center">
        <ImgTitleWithCta
          title="The Creative Process in Action"
          subtitle="Very Quick Intro"
          img=""
          copy='Hi there stranger. I’m JP, a remote Full Stack Developer and UI / UX Designer. I love Vue, React, Python, and Node! Here is a short summary of my creative process, enjoy!'
          cta="See Full Profile"
          ctaUrl="/"
          action="push"
          className="dark" />
      </div>
    </section>

    <section id="jp-section-3">
      <div class="cont text-center upper">
        <SimpleTitle
          title="Empathizing is Key"
          subtitle="Post-it Time = Happy Time"
          copy='The first reason to redesign my website was to give people a better idea of me. I had to communicate better who I am, my vibe, skills, experience, etc.. So first things first: Empathize.'
          theme="light" />
        <div class="post-it-board">
          <div class="board-title">
            What do people
            <span class="dropdown-title" :style="dropdown ? 'border-bottom: 2px solid #1a2a40' : 'border-bottom: 2px solid #3eec82'">
              <span @click="dropdown = !dropdown">{{ dropdown_title }}</span>
              <i :class="dropdown ? 'icon-arrow-up' : 'icon-arrow-down'"></i>
              <div class="dropdown" v-show="dropdown">
                <span @click="toggleDropdown('Absolutely', 0)" class="is-active">Absolutely</span>
                <span @click="toggleDropdown('Definitely', 1)">Definitely</span>
                <span @click="toggleDropdown('Need', 2)">Need</span>
              </div>
            </span>
            need to know?
          </div>
          <div class="board">
            <div class="post-it" v-for="(postit, index) in postits" :key="index">
              <span>{{ postit }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cont text-center lower">
        <SimpleTitle
          title="Define Buyer Personas"
          subtitle="I love This Part"
          copy='Creating characters has always been a passion for me! There is something about empathy that has always interested me so much. After a couple of interviews and investigating I was able to define 3 buyer personas:'
          theme="light" />
        <div class="buyer-personas">
          <div class="buyer-persona">
            <img src="~/static/img/product-owner.svg" alt="">
            <p class="job">Recruiter</p>
            <span class="name">Zach</span>
            <p class="description">Zach is always busy and needs a fast and deep understanding of a candidate in seconds. The better he knows the candidates, better his decision.</p>
          </div>
          <div class="buyer-persona">
            <img src="~/static/img/scrum-master.svg" alt="">
            <p class="job">Recruiter</p>
            <span class="name">Zach</span>
            <p class="description">Zach is always busy and needs a fast and deep understanding of a candidate in seconds. The better he knows the candidates, better his decision.</p>
          </div>
          <div class="buyer-persona">
            <img src="~/static/img/dev-team.svg" alt="">
            <p class="job">Recruiter</p>
            <span class="name">Zach</span>
            <p class="description">Zach is always busy and needs a fast and deep understanding of a candidate in seconds. The better he knows the candidates, better his decision.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- INFO NAV -->
    <nav id="jp-info-nav">
      <a class="back-hover-blue" href="tel:+573507015800">
        <i class="icon-phone" />
        <span>Call Me</span>
      </a>
      <a class="back-hover-red" href="mailto:hola@jpcasabianca.com">
        <i class="icon-mail" />
        <span>Email Me</span>
      </a>
      <a class="back-hover-yellow" href="https://wa.me/573507015800">
        <i class="icon-message-circle" />
        <span>Whatsapp</span>
      </a>
    </nav>

  </div>
</template>

<script>
import ImgTitleWithCta from '~/components/Elements/Titles/ImgTitleWithCta.vue'
import TitleWithCta from '~/components/Elements/Titles/TitleWithCta.vue'
import SimpleTitle from '~/components/Elements/Titles/SimpleTitle.vue'
import IconSection from '~/components/Sections/IconSection.vue'

import data from '~/assets/data/jpc.json'

export default {
  layout: 'case-study',
  data() {
    return {
      dropdown: false,
      dropdown_title: 'Absolutely',
      dropdown_id: 0,
      buyer_persona_section: data.buyer_persona_section
    }
  },
  computed: {
    postits() {
      return data.dropdown[this.dropdown_id].postits
    }
  },
  components: {
    ImgTitleWithCta,
    TitleWithCta,
    SimpleTitle,
    IconSection
  },
  methods: {
    toggleDropdown(title, id) {
      this.dropdown_title = title
      this.dropdown = false
      this.dropdown_id = id
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/helpers/_variables.scss';
@import '~/assets/css/helpers/_mixins.scss';

.cont {
  width: 90%;
  margin: auto;
  max-width: 1200px;
}

img {
  width: 100%;
  height: auto;
}

#jp-section-1 {
  background-image: url('~/static/img/section-first-fold.png');
  background-size: cover;
  background-position: bottom;
  padding: 70px 0 100px 0;
  .cont {
    display: flex;
    .title-with-cta {
      flex: 3;
    }
    #comp {
      flex: 2;
    }
  }
}

#jp-section-2 {
  margin: 70px 0 100px 0;
}

#jp-section-3 {
  background-image: url('~/static/img/jpc/back1.png');
  background-size: cover;
  background-position: top;
  padding-bottom: 100px;
  .upper {
    margin-bottom: 70px;
    .simple-title {
      margin-bottom: 70px;
    }
    .post-it-board {
      width: 100%;
      max-width: 800px;
      margin: auto;
      display: inline-block;
      background-color: #fff;
      -webkit-box-shadow: 0px 0px 18px -1px rgba(0,0,0,0.2);
      -moz-box-shadow: 0px 0px 18px -1px rgba(0,0,0,0.2);
      box-shadow: 0px 0px 18px -1px rgba(0,0,0,0.2);
      .board-title {
        margin-top: 30px;
        font-size: 20px;
        position: relative;
        color: $color-blue-heavy;
        font-family: $gotham-rounded-medium;
        .dropdown-title {
          position: relative;
          display: inline-block;
          padding: 6px 30px 6px 12px;
          position: relative;
          cursor: pointer;
          &:hover {
            border-bottom: 2px solid $color-blue-heavy;
          }
          i {
            position: absolute;
            right: 6px;
          }
          .dropdown {
            position: absolute;
            left: 0;
            top: 37px;
            background-color: $color-blue-heavy;
            text-align: center;
            span {
              display: block;
              color: #fff;
              border-bottom: 0;
              padding: 10px 21px 10px 21px;
              &:hover {
                color: $color-green-light;
              }
            }
            span.is-active {
              color: $color-green-light;
            }
          }
        }
      }
      .board {
        width: 90%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 5px 0 20px 0;
        .post-it {
          display: flex;
          width: 100px;
          height: 100px;
          background-image: url('~/static/img/jpc/postit.png');
          background-size: cover;
          margin: 15px;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-family: $gotham-rounded-medium;
          color: $color-green-dark;
        }
      }
    }
  }
  .lower {
    padding-bottom: 70px;
    .simple-title {
      margin-bottom: 70px;
    }
    .buyer-personas {
      width: 100%;
      max-width: 800px;
      margin: auto;
      display: flex;
      .buyer-persona {
        flex: 1;
        margin: 0 30px;
        img {
          width: 100px;
        }
        .job {
          color: $color-blue-black;
          font-family: $gotham-rounded-medium;
          font-size: 15px;
          margin-bottom: 8px;
        }
        .name {
          font-family: $proxima-nova;
          color: $color-green;
        }
        .description {
          color: $color-gray-heavy;
        }
      }
    }
  }
}

#info-nav {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  text-align: center;
  a {
    flex: 1;
    text-decoration: none;
    background-color: #000;
    padding: 5px 0;
    i, span {
      display: block;
      color: #fff;
    }
    span {
      font-size: 13px;
    }
    i {
      margin-bottom: 4px;
    }
  }
  .back-hover-blue {
    &:hover {
      background-color: $color-blue;
    }
  }
  .back-hover-red {
    &:hover {
      background-color: $color-red;
    }
  }
  .back-hover-yellow {
    &:hover {
      background-color: $color-yellow;
    }
  }
}

#jp-info-nav {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  text-align: center;
  a {
    flex: 1;
    text-decoration: none;
    background-color: $color-blue-black;
    padding: 5px 0;
    i, span {
      display: block;
      color: #fff;
    }
    span {
      font-size: 13px;
    }
    i {
      margin-bottom: 4px;
    }
    &:hover {
      background-color: $color-green-light;
      i, span {
        color: $color-blue-black;
      }
    }
  }
}

#jp-back {
  position: fixed;
  left: 15px;
  top: 15px;
  background-color: #000;
  color: #fff;
  padding: 6px 6px 7px 7px;
  font-size: 24px;
  z-index: 999;
  text-decoration: none;
  @include border-radius(50%);
  @include animation(jpcolors 5s infinite);
}

@keyframes jpcolors {
    0% {background-color: $color-green-light;}
    50% {background-color: $color-blue-heavy;}
    100% {background-color: $color-green-light;}
}
</style>
