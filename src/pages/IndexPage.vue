<template>
  <div>
    <q-layout
      container
      view="lHh lpR lFf"
      class="shadow-2 q-pa-none"
      style="height: 100vh"
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <!-- Right Drawer -->
      <q-drawer
        side="right"
        v-model="drawerRight"
        bordered
        :width="300"
        :breakpoint="500"
        class="drawer-container"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <q-select
              filled
              v-model="selectedCategory"
              label="Category"
              :options="['Tech', 'Health', 'Finance']"
              class="q-mb-sm"
            />
            <q-select
              filled
              label="Sort by"
              v-model="sortedBy"
              :options="['Newest', 'Popular', 'Alphabetical']"
              class="q-mb-sm"
            />
            <q-toggle label="Only show favorites" v-model="filterFavourites" class="q-mb-sm" />
            <q-btn label="Reset Filters" flat icon="refresh" class="q-mt-md" />
          </div>
        </q-scroll-area>
      </q-drawer>

      <!-- Main Page Content with Scroll -->
      <q-page-container class="catalogue-scroll-area">
        <q-page class="q-pa-md">
          <!-- Cards Grid -->
          <div class="card-grid">
            <q-card class="slide-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-h6 text-white">Title</div>
              </q-img>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card class="slide-card">
              <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
                <div class="absolute-bottom text-h6 text-white">Title</div>
              </q-img>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card class="slide-card">
              <q-img src="https://cdn.quasar.dev/img/parallax1.jpg">
                <div class="absolute-bottom text-h6 text-white">Title</div>
              </q-img>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card class="slide-card">
              <q-img src="https://cdn.quasar.dev/img/quasar.jpg">
                <div class="absolute-bottom text-h6 text-white">Title</div>
              </q-img>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card class="slide-card">
              <q-img src="https://cdn.quasar.dev/img/parallax1.jpg">
                <div class="absolute-bottom text-h6 text-white">Title</div>
              </q-img>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card class="slide-card">
              <q-img src="https://cdn.quasar.dev/img/quasar.jpg">
                <div class="absolute-bottom text-h6 text-white">Title</div>
              </q-img>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card class="slide-card">
              <q-img src="https://cdn.quasar.dev/img/parallax1.jpg">
                <div class="absolute-bottom text-h6 text-white">Title</div>
              </q-img>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card class="slide-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-h6 text-white">Title</div>
              </q-img>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card class="slide-card">
              <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
                <div class="absolute-bottom text-h6 text-white">Title</div>
              </q-img>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card class="slide-card">
              <q-img src="https://cdn.quasar.dev/img/parallax1.jpg">
                <div class="absolute-bottom text-h6 text-white">Title</div>
              </q-img>

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>
          </div>

          <!-- Scroll to Top -->
          <q-page-scroller position="bottom-right">
            <q-btn fab icon="keyboard_arrow_up" color="red" />
          </q-page-scroller>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const drawerRight = ref(true);
const selectedCategory = ref('');
const sortedBy = ref('');
const filterFavourites = ref(false);
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
</script>

<style scoped>
.drawer-container {
  overflow: hidden; /* prevent outer scroll on drawer */
}

.catalogue-scroll-area {
  overflow-y: auto;
  height: 100vh;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 16px;
}

.drawer-container {
  overflow: hidden;
  border-left: 1px solid #ccc;
}
</style>
