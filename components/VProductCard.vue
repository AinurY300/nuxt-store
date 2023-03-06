<script setup lang="ts">



// function formattedPrice(price: number) {
//   return price.toLocaleString('ru-RU', {
//     style: 'currency',
//     currency: 'RUB',
//     minimumFractionDigits: 0,
//   })
// }


</script>

<template>
  
  <!-- <v-hover> -->
    <!-- <template v-slot:default="{ isHovering, props }"> -->
      <v-card color="background" to="/" class="text-center">
        <!-- <v-img
          :src="product.offers[defaultOfferIndex].images[0]"
          style="aspect-ratio: 1 / 1"
        /> -->
        <!-- :src="product.offers[defaultOfferIndex].images[0]" -->
        <!-- <v-card-text class="pa-2 pb-0 font-weight-medium">{{ product.manufacturer }}</v-card-text> -->
        <!-- <v-card-text class="px-2 py-2">{{ product.name }}</v-card-text> -->
        <!-- <v-card-text class="pa-2 pt-0 text-no-wrap font-weight-medium">от {{ formattedPrice(product.minPrice || 0) }}</v-card-text> -->
      </v-card>
    <!-- </template> -->
  <!-- </v-hover> -->
</template>

<!-- const productCards = document.querySelectorAll('.product-page__img')
productCards.forEach(product => {
    const img = product.querySelector('img').getAttribute('src')
    console.log(img)
}) -->