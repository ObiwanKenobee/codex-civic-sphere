
import { createApiClient } from "../api-utils";

export type UserProfile = {
  id: string;
  name: string;
  role: string;
  organization?: string;
  created_at?: string;
  updated_at?: string;
};

// Create an API client for the user_profiles table
export const userProfilesApi = createApiClient<UserProfile>("user_profiles");

// Additional user-specific methods
export const getCurrentUserProfile = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error || !user) {
    throw new Error("Failed to get current user");
  }
  
  const { data, error: profileError } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("id", user.id)
    .single();
  
  if (profileError) {
    throw new Error("Failed to get user profile");
  }
  
  return data as UserProfile;
};

// Include any specific methods for the user profiles here
