<script setup lang="ts">
import { useCartStore } from '~~/store/cart';

const cart = useCartStore()
</script>

<template>
  <v-app-bar elevation="0">
    <v-container>
      <v-row align="center">
        <v-col>
          <!-- <v-btn to="/" prepend-icon="mdi-home-outline">На главную</v-btn> -->
          <nuxt-link to="/" class="text-decoration-none text-high-emphasis">
            <v-app-bar-title class="font-weight-bold">чистаяпаль.</v-app-bar-title>
          </nuxt-link>
        </v-col>
        <v-spacer/>
        <v-col cols="auto">
          <v-btn icon="mdi-magnify"></v-btn>

          <v-btn icon="mdi-shopping-outline" @click="cart.open = !cart.open"/>
            <!-- <v-badge :content="5" color="error">
              <v-icon icon="mdi-shopping-outline"/>
            </v-badge> -->
          <!-- </v-btn> -->
          <!-- <v-tooltip text="Корзина" location="bottom">
            <template v-slot:activator="{ props }">
            </template>
          </v-tooltip> -->
          
          <v-dialog max-width="373">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="mdi-account-circle-outline"></v-btn>
            </template>
            <v-auth-form/>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>