import { defineStore } from "pinia";

export const useCartStore = defineStore('cartStore', function() {
  const open = ref(false)
  const count = ref(20000)

  return { open, count }
})