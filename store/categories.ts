import { defineStore } from 'pinia'
import { Database } from '~~/models/supabase.types'

export const useCategoriesStore = defineStore('categoriesStore', () => {
  const supabase = useSupabaseClient<Database>()

  const categories = ref<Awaited<ReturnType<typeof fetchCategories>>>([])

  async function fetchCategories() {
    const { data } = await supabase.from('categories').select().is('is_active', true)

    return data ? createTree({ array: data, idKey: 'id', parentKey: 'parent_id', sortKey: 'sort_order' }) : []
  }

  async function getCategories() {
    if (categories.value.length) return categories.value
    else {
      categories.value = await fetchCategories()
      return categories.value
    }
  }
  
  return { getCategories }
})