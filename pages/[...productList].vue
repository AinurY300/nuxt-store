<script setup lang="ts">

const route = useRoute('productList')

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        {{ route.params.productList }}
      </v-col>
      <v-col>
        
      </v-col>
    </v-row>
    
  </v-container>
</template>