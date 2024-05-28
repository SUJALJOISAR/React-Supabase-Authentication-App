
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cpvyciipracyckreyjqo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwdnljaWlwcmFjeWNrcmV5anFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4MDc2MTIsImV4cCI6MjAzMjM4MzYxMn0.s03eggx85W3-jIQgYBkSuMy4mLcOq4cDA_h8q7ezEMU'
export const supabase = createClient(supabaseUrl, supabaseKey);