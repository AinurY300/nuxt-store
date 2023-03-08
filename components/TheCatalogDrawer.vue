<script setup lang="ts">
import { Database } from '~~/models/supabase.types';

const props = defineProps<{
  open: boolean,
  categoryId: Database['public']['Tables']['categories']['Row']['id']
}>()

const createTree = function<T extends {
  id: number | string,
  parent_id: number | string | null 
}[]>(arr: T) {
  type Tree = typeof arr[0] & { children: Tree[] }
  const tree = Object.fromEntries(arr.map((n: typeof arr[0]) => [ n.id, { ...n, ['children']: [] as Tree[] } ]))
  return Object.values(tree).filter(n => !tree[String(n.parent_id)]?.children.push(n))
}

const supabase = useSupabaseClient<Database>()
const { data } = await supabase.from('categories').select('*')
const categories = createTree(data || [])
</script>

<template>
  <v-navigation-drawer style="height: auto;" :model-value="props.open" location="top" temporary elevation="0">
    <v-container>
      <v-row>
        <v-col v-for="category in categories.find(c => c.id === props.categoryId)?.children">
          {{ category }}
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>