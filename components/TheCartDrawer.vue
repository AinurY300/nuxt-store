<script setup lang="ts">
import { useCartStore } from '~~/store/cart';

const cart = useCartStore()

</script>

<template>
  <v-navigation-drawer width="373" v-model="cart.open" location="right" temporary>
    <v-toolbar>
      <v-spacer/>
      <v-btn @click="cart.open = false" icon="mdi-close"/>
    </v-toolbar>
  </v-navigation-drawer>
</template>