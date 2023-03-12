<script setup lang="ts">
const phone = ref('+7')
</script>

<template>
  <v-card class="pa-6" border>
    <v-form @submit.prevent="">
      <v-card-title>Вход</v-card-title>
      <v-card-text class="text-capiton">Введите номер телефона и мы отправим СМС с кодом подтверждения.</v-card-text>
      <v-card-text class="py-0">
        <v-text-field
          variant="outlined"
          autofocus
          type="email" 
          label="Номер телефона"
          v-model="phone"
        />
      </v-card-text>
      <v-card-actions class="pa-4 pt-0">
        <v-btn type="submit" border class="bg-primary py-5" block>Продолжить</v-btn> 
      </v-card-actions>
    </v-form>
  </v-card>
</template>