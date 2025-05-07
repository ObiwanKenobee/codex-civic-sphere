
import { createApiClient } from "../api-utils";
import { supabase } from "@/integrations/supabase/client";

export type RiskAssessment = {
  id: string;
  user_id: string;
  impact_score: number;
  probability_score: number;
  due_date?: string;
  created_at: string;
  updated_at: string;
  title: string;
  description?: string;
  risk_level: string;
  mitigation_plan?: string;
  status: string;
  category: string;
};

// Create an API client for the risk_assessments table
export const riskAssessmentsApi = createApiClient<RiskAssessment>("risk_assessments");

// Add any risk assessment specific methods here
export const getRisksByCategory = async (category: string) => {
  const { data, error } = await supabase
    .from("risk_assessments")
    .select("*")
    .eq("category", category);
  
  if (error) {
    throw new Error(`Failed to get risks for category ${category}`);
  }
  
  return data as RiskAssessment[];
};
