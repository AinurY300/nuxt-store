<script setup lang="ts">


// const advantages = [
//   {
//     id: 1,
//     icon: 'mdi-truck-fast-outline',
//     title: 'Бесплатная доставка',
//     text: 'При заказе от 2000 рублей доставим бесплатно',
//   },
//   {
//     id: 2,
//     icon: 'mdi-percent-outline',
//     title: 'Рассрочка без процентов',
//     text: 'Выберите, что хочется сейчас, а платите частями',
//   },
//   {
//     id: 3,
//     icon: 'mdi-gift-outline',
//     title: 'Лучшие предложения',
//     text: 'Регулярно проводим акции и делаем подарки',
//   },
//   {
//     id: 4,
//     icon: 'mdi-shield-outline',
//     title: 'Безопасная сделка',
//     text: 'Используем только надёжные методы оплаты',
//   },
// ]




</script>

<template>
  <!-- Banner -->
  <TheBanner/>

  <!-- Catalog -->
  <v-container>

    <!-- {{ products }} -->
    <v-row>


      <!-- <template v-for="group in productGroup"> -->

        <!-- <v-col cols="4">
          <v-card border :to="{ name: 'productGroup', params: { productGroup: 'smartphones' }, query: { groupId: group.id } }">
            <v-img height="300" src="https://rmumvzehdoeteomoitcr.supabase.co/storage/v1/object/public/images/catalog/Smartphones.png"/>
            <v-card-text>
              <v-chip rounded="lg" class="bg-black">{{ group.name }}</v-chip>
            </v-card-text>
          </v-card>
        </v-col> -->
      <!-- </template> -->

      <!-- <template v-for="group in productGroup"> -->
        <!-- Смартфоны -->
        <!-- <v-col v-if="group.name == 'Смартфоны'" :cols="4">
          <v-card border :to="{ name: 'productGroup', params: { productGroup: 'smartphones' }, query: { groupId: group.id } }">
            <v-img height="300" src="https://rmumvzehdoeteomoitcr.supabase.co/storage/v1/object/public/images/catalog/Smartphones.png"/>
            <v-card-text>
              <v-chip rounded="lg" class="bg-black">{{ group.name }}</v-chip>
            </v-card-text>
          </v-card>
        </v-col> -->
        <!-- Ноутбуки -->
        <!-- <v-col v-if="group.name == 'Ноутбуки'" :cols="8">
          <v-card border :to="{ name: 'productGroup', params: { productGroup: 'notebooks' }, query: { groupId: group.id } }">
            <v-img height="300" src="https://rmumvzehdoeteomoitcr.supabase.co/storage/v1/object/public/images/catalog/Notebooks.png"/>
            <v-card-text>
              <v-chip rounded="lg" class="bg-black">{{ group.name }}</v-chip>
            </v-card-text>
          </v-card>
        </v-col> -->
      <!-- </template> -->
    </v-row>
  </v-container>

  <!-- Advantages -->
  <!-- <v-sheet color="black">
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
  </v-sheet> -->
</template>