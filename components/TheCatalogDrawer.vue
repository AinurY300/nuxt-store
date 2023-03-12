<script setup lang="ts">
import { useCategoriesStore } from '~~/store/categories.js';

const store = useCategoriesStore()
const categories = await store.getCategories()

const props = defineProps<{
  open: boolean,
  categoryId: typeof categories[number]['id']
}>()
</script>

<template>
  <v-navigation-drawer style="height: auto" :model-value="props.open" location="top" temporary elevation="0">
    <v-container>
      <v-row v-for="category in categories.filter(c => c.id === props.categoryId)" :key="category.id">
        <v-col cols="4" v-for="child_category in category.children" :key="child_category.id">
          <v-list density="compact">
            <v-list-item
              class="text-disabled text-uppercase font-weight-bold"
              :title="child_category.name" 
              :to="`/${category.slug}/${child_category.slug}`"
            />

            <v-divider/>

            <v-row no-gutters>
              <v-col cols="6" v-for="child in child_category.children">
                <v-list-item   
                  :title="child.name" 
                  :key="child.id"
                  :to="`/${category.slug}/${child_category.slug}/${child.slug}`"
                />
              </v-col>
            </v-row>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>