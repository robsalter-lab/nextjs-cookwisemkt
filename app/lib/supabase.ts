import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

/** Public client (anon key) — safe for server components */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/** Service-role client — for API routes only, never expose to client */
export function getServiceClient() {
  return createClient(supabaseUrl, supabaseServiceKey);
}
