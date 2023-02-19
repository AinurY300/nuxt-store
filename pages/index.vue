<script setup lang="ts">
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



const catalog = [
  {
    id: 1,
    title: 'Смартфоны',
    src: 'https://assets-global.website-files.com/625816a3416990dd61391b9b/6337d8dee8d182bbe1780835_iPhone-14-Pro-Mockups-SpaceBlack-15-p-2000.jpeg'
  },
  {
    id: 2,
    title: 'Ноутбуки',
    src: 'https://assets-global.website-files.com/625816a3416990dd61391b9b/62e00f31ce5170e1888ad08b_MacBook%20Air%20M2%20Mockup%20Midnight%20-%2015-p-2000.jpeg'
  },
  {
    id: 3,
    title: 'Планшеты',
    src: 'https://assets-global.website-files.com/625816a3416990dd61391b9b/625ea977c7fef0c433ea0271_617ffa5306530c73ba5912e7_iPad%2520Mini%2520Mockup%2520-%2520Purple%2520-%252015.jpeg'
  },
  {
    id: 4,
    title: 'Смарт часы',
    src: 'https://assets-global.website-files.com/625816a3416990dd61391b9b/625ea9ef89623628f29d7044_622b1e51ede7816ca5d019da_Apple-Watch-7-Blue-4.jpeg'
  },
  {
    id: 5,
    title: 'Наушники',
    src: 'https://rmumvzehdoeteomoitcr.supabase.co/storage/v1/object/public/images/catalog/Headphones'
  },
]
</script>

<template>
  <!-- Banner -->
  <TheBanner/>
  <!-- Catalog -->
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-catalog-card :scale="0.7" :src="catalog[0].src" :title="catalog[0].title" />
      </v-col>
      <v-col cols="8">
        <v-catalog-card :scale="1.2" :src="catalog[1].src" :title="catalog[1].title" />
      </v-col>
      <v-col cols="4">
        <v-catalog-card :scale="0.8" :src="catalog[2].src" :title="catalog[2].title" />
      </v-col>
      <v-col cols="4">
        <v-catalog-card :scale="0.8" :src="catalog[3].src" :title="catalog[3].title" />
      </v-col>
      <v-col cols="4">
        <v-catalog-card :scale="0.7" :src="catalog[4].src" :title="catalog[4].title" />
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