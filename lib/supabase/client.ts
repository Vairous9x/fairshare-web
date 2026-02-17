import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  // If env variables are not set, return a minimal client that won't work
  // but won't crash during build
  if (!supabaseUrl || !supabaseKey) {
    return createBrowserClient('https://placeholder.supabase.co', 'placeholder-key')
  }
  
  return createBrowserClient(supabaseUrl, supabaseKey)
}
