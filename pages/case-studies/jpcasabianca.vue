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
        <div class="comp-cont">
          <img src="~/static/img/computer.png" alt="Computer" id="comp">
        </div>
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
            <img src="~/static/img/jpc/recruiter.svg" alt="">
            <p class="job">Recruiter</p>
            <span class="name">Zach</span>
            <p class="description">Zach is always busy and needs a fast and deep understanding of a candidate in seconds. The better he knows the candidates, better his decision.</p>
          </div>
          <div class="buyer-persona">
            <img src="~/static/img/jpc/pro.svg" alt="">
            <p class="job">Professional</p>
            <span class="name">Lauren</span>
            <p class="description">Lauren is a professional looking for design or coding services. Lauren does a lot of digging and has a great eye for detail.</p>
          </div>
          <div class="buyer-persona">
            <img src="~/static/img/jpc/geek.svg" alt="">
            <p class="job">Fellow Geek</p>
            <span class="name">Patrick</span>
            <p class="description">Patrick is a fellow developer that downloads assets, forks repos, or is just curious to know and connect with fellow developers.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="jp-section-4">
      <div class="cont text-center">
        <SimpleTitle
          title="Empathizing is Key"
          subtitle="Post-it Time = Happy Time"
          copy='The first reason to redesign my website was to give people a better idea of me. I had to communicate better who I am, my vibe, skills, experience, etc.. So first things first: Empathize.'
          theme="light" />
      </div>
      <div class="fonts-light">
        <div class="fonts">
          <div class="lines line-1" />
          <div class="lines line-2" />
          <div class="lines line-3" />
          <div class="cont">
            <div class="font-left">
              <h1>JP Casabianca</h1>
            </div>
            <div class="font-right">
              <h1>Gotham Rounded Medium</h1>
            </div>
          </div>
        </div>
        <div class="fonts">
          <div class="lines line-1" />
          <div class="lines line-2" />
          <div class="lines line-3" />
          <div class="cont">
            <div class="font-left">
              <h1 class="gotham-rounded-light"><i>Developer</i></h1>
            </div>
            <div class="font-right">
              <h1 class="gotham-rounded-light"><i>Gotham Rounded Light Italic</i></h1>
            </div>
          </div>
        </div>
        <div class="fonts">
          <div class="lines line-1" />
          <div class="lines line-2" />
          <div class="lines line-3" />
          <div class="cont">
            <div class="font-left">
              <p class="gotham-rounded-medium">Button CTA</p>
            </div>
            <div class="font-right">
              <p class="gotham-rounded-medium">Gotham Rounded Medium</p>
            </div>
          </div>
        </div>
        <div class="fonts">
          <div class="lines line-1" />
          <div class="lines line-2" />
          <div class="lines line-3" />
          <div class="cont">
            <div class="font-left">
              <p class="gray proxima-nova">Rick &amp; Morty</p>
            </div>
            <div class="font-right">
              <p class="gray proxima-nova">Proxima Nova Alt</p>
            </div>
          </div>
        </div>
        <div class="fonts">
          <div class="lines line-1" />
          <div class="lines line-2" />
          <div class="lines line-3" />
          <div class="cont">
            <div class="font-left">
              <p class="gray"><i>Django</i></p>
            </div>
            <div class="font-right">
              <p class="gray"><i>Proxima Nova Alt Italic</i></p>
            </div>
          </div>
        </div>
      </div>
      <div class="fonts-dark">
        <div class="fonts">
          <div class="lines line-1" />
          <div class="lines line-2" />
          <div class="lines line-3" />
          <div class="cont">
            <div class="font-left">
              <h1>JP Casabianca</h1>
            </div>
            <div class="font-right">
              <h1>Gotham Rounded Medium</h1>
            </div>
          </div>
        </div>
        <div class="fonts">
          <div class="lines line-1" />
          <div class="lines line-2" />
          <div class="lines line-3" />
          <div class="cont">
            <div class="font-left">
              <h1 class="gotham-rounded-light"><i>Developer</i></h1>
            </div>
            <div class="font-right">
              <h1 class="gotham-rounded-light"><i>Gotham Rounded Light Italic</i></h1>
            </div>
          </div>
        </div>
        <div class="fonts">
          <div class="lines line-1" />
          <div class="lines line-2" />
          <div class="lines line-3" />
          <div class="cont">
            <div class="font-left">
              <p class="gotham-rounded-medium">Button CTA</p>
            </div>
            <div class="font-right">
              <p class="gotham-rounded-medium">Gotham Rounded Medium</p>
            </div>
          </div>
        </div>
        <div class="fonts">
          <div class="lines line-1" />
          <div class="lines line-2" />
          <div class="lines line-3" />
          <div class="cont">
            <div class="font-left">
              <p class="proxima-nova">Rick &amp; Morty is my favorite TV Show</p>
            </div>
            <div class="font-right">
              <p class="proxima-nova">Proxima Nova Alt Regular</p>
            </div>
          </div>
        </div>
        <div class="fonts">
          <div class="lines line-1" />
          <div class="lines line-2" />
          <div class="lines line-3" />
          <div class="cont">
            <div class="font-left">
              <p class=""><i>Tus entregas a domicilio</i></p>
            </div>
            <div class="font-right">
              <p class=""><i>Proxima Nova Alt Italic</i></p>
            </div>
          </div>
        </div>
      </div>
      <div class="cont colors">
        <ColorPalette :colors="colors" />
      </div>
      <div class="cont cards">
        <img src="~/static/img/jpc/card2.png" alt="Card JP Casabianca" class="card">
        <img src="~/static/img/jpc/card1.png" alt="Card JP Casabianca" class="card">
      </div>
      <div class="cont cards">
        <img src="~/static/img/jpc/card3.png" alt="Card JP Casabianca" class="card">
        <img src="~/static/img/jpc/card4.png" alt="Card JP Casabianca" class="card">
      </div>
    </section>

    <section id="jp-section-5">
      <div class="cont text-center">
        <SimpleTitle
          title="Empathizing is Key"
          subtitle="Post-it Time = Happy Time"
          copy='The first reason to redesign my website was to give people a better idea of me. I had to communicate better who I am, my vibe, skills, experience, etc.. So first things first: Empathize.'
          theme="light" />
        <img src="~/static/img/jpc/phones.png" class="tablet" alt="Phones JP">
      </div>
      <img src="~/static/img/jpc/phones_mobile.png" class="mobile-small" alt="JP Casabianca Mobile">
    </section>

    <section id="jp-section-6">
      <div class="cont text-center">
        <SimpleTitle
          title="Testing Devices"
          subtitle="Any More Invision Fans Out There?"
          copy='After creating the mobile version, I had to move on into tablets and desktops. With the help of Invision I tested the site in all of the devices to make the UX as best as possible.'
          theme="dark" />
        <img src="~/static/img/jpc/computer.png" class="mobile-small" alt="Computer JP Casabianca">
        <img src="~/static/img/jpc/computers.png" class="tablet" alt="Computers JP Casabianca">
      </div>
    </section>

    <section id="jp-section-7">
      <div class="cont text-center">
        <SimpleTitle
          title="Happy Coding!"
          subtitle="The Matrix"
          copy='Time to code! After testing the prototype and tweaking the last UI / UX details I went ahead and started to code.'
          theme="light" />
      </div>
      <img src="~/static/img/jpc/coding.png" class="mobile-small" alt="Coding JP Casabianca">
      <img src="~/static/img/jpc/coding-desktop.png" class="tablet" alt="Coding JP Casabianca">
    </section>

    <section id="jp-section-8">
      <div class="cont text-center">
        <SimpleTitle
          title="Testing Devices"
          subtitle="Any More Invision Fans Out There?"
          copy='After creating the mobile version, I had to move on into tablets and desktops. With the help of Invision I tested the site in all of the devices to make the UX as best as possible.'
          theme="dark" />
        <div class="buyer-personas">
          <div class="buyer-persona">
            <img src="~/static/img/jpc/frontend.svg" alt="">
            <p class="job">Frontend</p>
            <span class="name">Vue.js + Nuxt.js</span>
            <p class="description">I absolutely love Vue.js and our friends the Chopin Brothers have made a great job with Nuxt.js. One of the best dev experiences by far!</p>
          </div>
          <div class="buyer-persona">
            <img src="~/static/img/jpc/backend.svg" alt="">
            <p class="job">Backend</p>
            <span class="name">Python + Django + Django Rest Framework</span>
            <p class="description">Python is my favorite backend language. With APIs getting more important, I wanted to create one and what better language than Python, right?</p>
          </div>
          <div class="buyer-persona">
            <img src="~/static/img/jpc/deployment.svg" alt="">
            <p class="job">Deployment</p>
            <span class="name">Ubuntu + Nginx + Digitalocean + Docker</span>
            <p class="description">Digital Ocean has made a great job with its droplets. I normally setup an Ubuntu - Nginx configuration and automate deployment with Docker.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="jp-section-9">
      <div class="cont">
        <img src="~/static/img/jpc/stack-mobile.png" class="mobile-small" alt="JP Casabianca Stack">
        <img src="~/static/img/jpc/stack.png" class="tablet" alt="JP Casabianca Stack">
      </div>
      <img src="~/static/img/jpc/bugs.png" id="bugs" class="mobile-small" alt="Bugs JP Casabianca">
      <img src="~/static/img/jpc/bugs-desktop.png" id="bugs" class="tablet" alt="Bugs JP Casabianca">
      <div class="bugs-message">
        <h2>A Couple of Bugs Later...</h2>
      </div>
    </section>

    <section id="jp-section-10">
      <div class="cont text-center">
        <SimpleTitle
          title="Delivering the MVP"
          subtitle="Version 1.0.0"
          copy='With the minimal viable product in hand, I added Hotjar to track user interactions and to help gather feedback. Time to start inbound marketing!'
          theme="dark" />
      </div>
    </section>

    <section id="jp-section-11">
      <div class="cont text-center">
        <SimpleTitle
          title="Inbound Marketing"
          subtitle="Creativity Doesn’t Sleep"
          copy='I always keep in mind Inbound Marketing when designing and coding. Where to put a form to optimize conversions and provide a good user experience? That’s the type of questions I ask during my process. After delivering the MVP here are some of the stuff I use to track leads and optimize conversions:'
          theme="light" />
        <img src="~/static/img/jpc/inbound.png" class="mobile-small" alt="Inbound JP Casabianca">
        <img src="~/static/img/jpc/inbound-desktop.png" class="tablet" alt="Inbound JP Casabianca">
      </div>
    </section>

    <section id="jp-section-12">
      <div class="cont text-center">
        <SimpleTitle
          title="Continuous Integration"
          subtitle="Automating is Key"
          copy='With continuous integration you can really optimize and speeden up the deployment process. When I push the changes, Docker helps me automate the production build and keeps everything nice and tidy.'
          theme="light" />
        <img src="~/static/img/jpc/programs.png" class="mobile-small" alt="">
        <img src="~/static/img/jpc/programs-desktop.png" class="tablet" alt="">
      </div>
    </section>

    <footer id="jp-footer">
      <div class="cont text-center">
        <SimpleTitle
          title="Liking What You See?"
          subtitle="Don’t Be Shy! "
          copy="Please don't hesitate to contact me if you liked this case study!"
          theme="dark" />
        <div class="ctas">
          <a href="#">Call Me</a>
          <a href="#">Email Me</a>
          <a href="#">Whatsapp</a>
        </div>
      </div>
    </footer>

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

    <div id="bottom-spacer" />

  </div>
</template>

<script>
import ImgTitleWithCta from '~/components/Elements/Titles/ImgTitleWithCta.vue'
import TitleWithCta from '~/components/Elements/Titles/TitleWithCta.vue'
import SimpleTitle from '~/components/Elements/Titles/SimpleTitle.vue'
import IconSection from '~/components/Sections/IconSection.vue'
import ColorPalette from '~/components/CaseStudies/Printa/ColorPalette.vue'

import data from '~/assets/data/jpc.json'

export default {
  layout: 'case-study',
  data() {
    return {
      dropdown: false,
      dropdown_title: 'Absolutely',
      dropdown_id: 0,
      buyer_persona_section: data.buyer_persona_section,
      colors: data.colors
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
    IconSection,
    ColorPalette
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

@mixin m600 {
    @media (min-width: 600px) {
        @content;
    }
}
@mixin m768 {
    @media (min-width: 768px) {
        @content;
    }
}
@mixin m992 {
    @media (min-width: 992px) {
        @content;
    }
}
@include m600 {}
@include m768 {}
@include m992 {}

.cont {
  width: 80%;
  margin: auto;
  max-width: 1200px;
}

img {
  width: 100%;
  height: auto;
}

.mobile-small {
  @include m768 {
    display: none;
  }
}

.tablet {
  display: none;
  @include m768 {
    display: block;
  }
}

.tablet-inline {
  display: none;
  @include m768 {
    display: inline-block;
  }
}

.tablet-flex {
  display: none;
  @include m768 {
    display: flex;
  }
}

.gotham-rounded-light {
  font-family: $gotham-rounded-light;
}

.gotham-rounded-medium {
  font-family: $gotham-rounded-medium;
}

.buyer-personas {
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  @include m768 {
      flex-direction: row;
  }
  .buyer-persona {
    flex: 1;
    margin: 0 30px 30px 30px;
    img {
      width: 100px;
    }
    .job {
      color: $color-blue-black;
      font-family: $gotham-rounded-medium;
      font-size: 16px;
      margin-bottom: 4px;
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

#jp-section-1 {
  background-image: url('~/static/img/section-first-fold.png');
  background-size: cover;
  background-position: bottom;
  padding: 70px 0 100px 0;
  .cont {
    display: flex;
    text-align: center;
    flex-direction: column;
    @include m768 {
      flex-direction: row;
    }
    .title-with-cta {
      flex: 1;
      margin-bottom: 30px;
      @include m768 {
        text-align: left;
        flex: 2;
      }
    }
    .comp-cont {
      flex: 1;
      @include m768 {
        flex: 2;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

#jp-section-2 {
  margin: 70px 0 180px 0;
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
          display: block;
          width: 60%;
          margin: auto;
          padding: 6px 30px 6px 12px;
          margin-bottom: 5px;
          position: relative;
          cursor: pointer;
          @include m768 {
            display: inline-block;
            width: auto;
          }
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
            width: 100%;
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
  }
}

#jp-section-4 {
  margin-bottom: 70px;
  .simple-title {
    margin-bottom: 30px;
  }
  .fonts {
    position: relative;
    margin-bottom: 25px;
    .lines {
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #e2e2e2;
      left: 0;
    }
    .line-1 {
      top: 0;
    }
    .line-2 {
      top: 50%;
    }
    .line-3 {
      bottom: 0;
    }
    .cont {
      display: flex;
      .font-left,
      .font-right {
        z-index: 5;
        h1,
        p {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-size: 14px;
          @include m768 {
            font-size: 20px;
          }
          @include m992 {
            font-size: 28px;
          }
        }
        p {
          font-size: 12px;
          @include m768 {
            font-size: 14px;
          }
          @include m992 {
            font-size: 16px;
          }
        }
        .gray {
          color: $color-gray-heavy;
        }
      }
      .font-left {
        flex: 2;
        text-align: right;
        margin-right: 80px;
      }
      .font-right {
        flex: 3;
      }
    }
  }
  .fonts-light,
  .fonts-dark {
    padding: 50px 0 25px 0;
  }
  .fonts-dark {
    background-color: $color-blue;
    .fonts {
      .lines {
        background-color: #263a4f;
      }
      h1 {
        color: #fff;
      }
      p.gotham-rounded-medium {
        color: $color-green-light;
      }
      p {
        color: $color-gray;
      }
    }
  }
  .colors {
    margin-top: 60px;
    .color-palette-cont {
      p {
        font-family: $gotham-rounded-medium;
        font-size: 13px;
      }
      ul {
        li {
          font-family: $proxima-nova;
        }
      }
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .card {
      width: 340px;
      margin: 15px;
      height: auto;
      border: 1px solid #d3e3ed;
      @include m768 {
        width: 270px;
      }
      @include m992 {
        width: 320px;
      }
    }
  }
}

#jp-section-5 {
  background-image: url('~/static/img/jpc/phones_back.png');
  background-size: cover;
  background-position: top;
  padding-top: 150px;
}

#jp-section-6 {
  background-image: url('~/static/img/jpc/blue-back.png');
  background-size: cover;
  background-position: left;
  padding-top: 70px;
  padding-bottom: 120px;
  position: relative;
  bottom: 50px;
  z-index: 5;
  @include m768 {
    bottom: 70px;
  }
}

#jp-section-7 {
  background-image: url('~/static/img/jpc/coding-back.png');
  background-size: cover;
  background-position: top;
  @include m768 {
    background-image: url('~/static/img/jpc/coding-back-desktop.png');
  }
}

#jp-section-8 {
  background-image: url('~/static/img/jpc/challenges-back.png');
  background-size: cover;
  background-position: top;
  padding-top: 70px;
  padding-bottom: 180px;
  .simple-title {
    margin-bottom: 50px;
    .subtitle {
      margin-top: 0;
    }
  }
  .description {
    color: $color-gray;
  }
  .job {
    color: #fff;
  }
}

#jp-section-9 {
  .bugs-message {
    background-color: $color-green-light;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 15px;
    z-index: 6;
    h2 {
      color: $color-blue-black;
    }
  }
  #bugs {
    z-index: 1;
  }
}

#jp-section-10 {
  background-image: url('~/static/img/jpc/surface.png');
  background-size: cover;
  background-position: bottom;
  padding-bottom: 650px;
  position: relative;
  bottom: 15px;
  padding-top: 50px;
  @include m600 {
    background-image: url('~/static/img/jpc/surface2.png');
    padding-bottom: 550px;
  }
  @include m768 {
    background-image: url('~/static/img/jpc/surface3.png');
    padding-bottom: 600px;
  }
  @include m992 {
    display: none;
  }
  .simple-title {
    .subtitle {
      margin-top: 0;
    }
  }
}

#jp-section-11 {
  @include m992 {
    margin-top: 50px;
    margin-bottom: 70px;
  }
}

#jp-section-12 {
  background-image: url('~/static/img/jpc/automation.png');
  background-size: cover;
  background-position: top;
  padding-top: 150px;
  @include m768 {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  @include m992 {
    padding-top: 130px;
  }
}

#jp-footer {
  background-color: $color-blue;
  padding: 70px 0;
  .simple-title {
    .subtitle {
      margin-top: 0;
    }
  }
  .ctas {
    a {
      display: inline-block;
      padding: 10px 25px;
      background-color: $color-green-light;
      color: $color-green-dark;
      margin: 0 5px;
      text-decoration: none;
      @include border-radius(8px);
      &:hover {
        background-color: $color-green;
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
  z-index: 99;
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

#bottom-spacer {
  display: block;
  height: 45px;
}
</style>
