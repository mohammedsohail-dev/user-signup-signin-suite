import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://accimeckdxnfotrlpmlv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjY2ltZWNrZHhuZm90cmxwbWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MjMyNDQsImV4cCI6MjA1OTA5OTI0NH0.PP3QW7TL77VNRtKlGyNewe_LLACLuGXR2HcYldUgKaM'
export const supabase = createClient(supabaseUrl, supabaseKey)
