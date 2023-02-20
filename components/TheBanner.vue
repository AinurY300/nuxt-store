<script setup lang="ts">


</script>

<template>
  <Swiper :loop="true" class="the-banner">
    <SwiperSlide v-for="slide in 2" :key="slide">
      <v-sheet color="black">
        <v-container class="fill-height">
          <v-row align="center">
            <v-col>
              <h4 class="mb-2 text-h4 font-weight-bold">MacBook Pro</h4>
              <p>
                MacBook Pro достигает невероятной мощности и эффективности. 
                Кроме того, он оснащен потрясающим дисплеем Liquid Retina XDR - 
                это профессиональный ноутбук без равных.
              </p>
              <v-btn flat class="mt-4 bg-white">Узнать подробнее</v-btn>
            </v-col>
            <v-col>
              <v-img height="400" src=""/>
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