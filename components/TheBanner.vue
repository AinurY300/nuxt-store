<script setup lang="ts">

</script>

<template>
  <Swiper :loop="true" class="the-banner">
    <SwiperSlide v-for="slide in 10" :key="slide">
      <v-sheet color="black">
        <v-container>
          <v-row>
            <v-col>
              <h2 class="mb-2 text-h3">MacBook Pro</h2>
              <p>
                MacBook Pro достигает невероятной мощности и эффективности. 
                Кроме того, он оснащен потрясающим дисплеем Liquid Retina XDR - 
                это профессиональный ноутбук без равных.
              </p>
              <v-btn class="mt-4">Узнать подробнее</v-btn>
            </v-col>
            <v-col>
              <v-img src=""/>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss">
.the-banner {
  border-bottom: 1px solid;
}
</style>