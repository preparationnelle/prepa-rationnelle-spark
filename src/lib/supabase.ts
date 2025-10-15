// Minimal Supabase stub to avoid build errors when Supabase isn't configured
// Replace with a real client initialization if/when Supabase is enabled.
export const supabase = {
  functions: {
    invoke: async (_name: string, _opts?: any): Promise<{ data: any; error: any }> => {
      return { data: { content: null }, error: { message: 'Supabase not configured in this environment' } };
    },
  },
};