import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export interface LeadData {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
  source: string;
}

export async function saveLead(data: LeadData) {
  const { error } = await supabase.from("versa_leads").insert([data]);
  if (error) throw error;
}
