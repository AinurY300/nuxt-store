export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          description: string | null
          id: number
          img: string | null
          is_active: boolean
          name: string
          parent_id: number | null
          slug: string
          sort_order: number | null
        }
        Insert: {
          description?: string | null
          id?: number
          img?: string | null
          is_active?: boolean
          name: string
          parent_id?: number | null
          slug: string
          sort_order?: number | null
        }
        Update: {
          description?: string | null
          id?: number
          img?: string | null
          is_active?: boolean
          name?: string
          parent_id?: number | null
          slug?: string
          sort_order?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
