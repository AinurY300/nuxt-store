<script setup lang="ts">
import { getImageEdgeColor } from '~~/utils/getImageEdgeColor';

const props = defineProps<{
  src: string,
  title: string,
  scale?: number
}>()

const cardColor = await getImageEdgeColor(props.src)
</script>

<template>
  <v-card border to="/" :color="cardColor">
    <v-img height="300" :src="src" :style="`transform: scale(${scale})`"/>
    <v-card-text>
      <v-chip rounded="lg" class="bg-black">{{ props.title }}</v-chip>
    </v-card-text>
  </v-card>
</template>