<script setup lang="ts">
import { Database } from '@/models/supabase.types'

const advantages = [
  {
    id: 1,
    icon: 'mdi-truck-fast-outline',
    title: 'Бесплатная доставка',
    text: 'При заказе от 2000 рублей доставим бесплатно',
  },
  {
    id: 2,
    icon: 'mdi-percent-outline',
    title: 'Рассрочка без процентов',
    text: 'Выберите, что хочется сейчас, а платите частями',
  },
  {
    id: 3,
    icon: 'mdi-gift-outline',
    title: 'Лучшие предложения',
    text: 'Регулярно проводим акции и делаем подарки',
  },
  {
    id: 4,
    icon: 'mdi-shield-outline',
    title: 'Безопасная сделка',
    text: 'Используем только надёжные методы оплаты',
  },
]

const supabase = useSupabaseClient<Database>()
const { data: categories } = await supabase
  .from('categories')
  .select()
  .order('index')
</script>

<template>
  <!-- Banner -->
  <TheBanner/>
  <!-- Catalog -->
  <v-container>
    <v-row>
      <v-col v-for="category in categories" :cols="category.name == 'Ноутбуки' ? 8 : 4" :key="category.id">
        <v-card border to="/">
          <v-img height="300" :src="category.img"/>
          <v-card-text>
            <v-chip rounded="lg" class="bg-black">{{ category.name }}</v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- Advantages -->
  <v-sheet color="black">
    <v-container>
      <v-row>
        <v-col v-for="advantage in advantages" :key="advantage.id">
          <v-banner
            class="bg-black pa-4"
            :icon="advantage.icon"
            color="white"
          >
            <v-banner-text class="pa-0">
              <div class="text-subtitle-2">{{ advantage.title }}</div>
              <p class="text-caption">{{ advantage.text }}</p>
            </v-banner-text>
          </v-banner>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>