<template>
    <div class="q-pa-none hero-carousel">
      <div class="carousel-wrapper">
        <q-carousel
          animated
          v-model="slide"
          infinite
          :autoplay="autoplay"
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        </q-carousel>
  
        <!-- Centered Overlay Text -->
        <div class="hero-layer">
          Quasar App
        </div>
      </div>
    </div>
    
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        
        <q-card-section>
          {{ lorem }}
        </q-card-section>

        
      </q-card-section>
    </q-card>
    <div class = "q-pa-md row items-start q-gutter-md justify-center">
    <q-card class="slide-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-h6">
          Title
        </div>
      </q-img>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
    <q-card class="slide-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-h6">
          Title
        </div>
      </q-img>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card class="slide-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-h6">
          Title
        </div>
      </q-img>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card class="slide-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-h6">
          Title
        </div>
      </q-img>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card class="slide-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-h6">
          Title
        </div>
      </q-img>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card class="slide-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-h6">
          Title
        </div>
      </q-img>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card class="slide-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-h6">
          Title
        </div>
      </q-img>

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
  </div>

  <q-footer elevated class="bg-grey-8 absolute text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  const slide = ref(1)
  const autoplay = ref(true)
  const lorem=  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  </script>
  
  <style>
  .hero-carousel {
    width: 100vw;
    margin: 0;
    padding: 0;
  }
  
  .carousel-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .hero-layer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 1rem 2rem;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: clamp(1.2rem, 2vw, 2.5rem);
    border-radius: 8px;
    max-width: 90%;
    z-index: 2;
  }

  .slide-card {
    width: 100%;
    max-width: 350px;
  }
  </style>
  