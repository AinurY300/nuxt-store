<script setup lang="ts">
import { useCategoriesStore } from '~~/store/categories';
const store = useCategoriesStore()
const categories = await store.getCategories()


const hoverTabId = ref<typeof categories[number]['id']>()
</script>

<template>
  <v-hover close-delay="200">
    <template #default="{ props: hover, isHovering }">
      <v-app-bar flat>
        <v-container>
          <v-row align="center">
            <v-col cols="2">
              <nuxt-link to="/" class="text-decoration-none text-high-emphasis">
                <v-app-bar-title class="font-weight-bold">чистаяпаль.</v-app-bar-title>
              </nuxt-link>
            </v-col>

            <v-col cols="auto">
              <v-tabs v-bind="hover" hide-slider>
                <v-tab
                  v-for="category in categories"
                  
                  :title="category.name"
                  :to="{ name: 'productList', params: { productList: category.slug } }"
                  :key="category.id"
                  @mouseover="$event => hoverTabId = category.id" 
                />
              </v-tabs>
            </v-col>
            
            <v-spacer/>

            <v-col cols="auto">
              <v-btn icon="mdi-magnify"></v-btn>

              <!-- <v-btn icon="mdi-shopping-outline" @click="cart.open = !cart.open">
                <v-badge :content="5" color="error">
                  <v-icon icon="mdi-shopping-outline"/>
                </v-badge>
              </v-btn> -->

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

      <TheCatalogDrawer v-bind="hover" :category-id="hoverTabId" :open="isHovering || false"/>
    </template>
  </v-hover>
</template>