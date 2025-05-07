
import { createApiClient } from "../api-utils";
import { supabase } from "@/integrations/supabase/client";

export type ESGMetric = {
  id: string;
  user_id: string;
  metric_value: number;
  timestamp: string;
  metric_type: string;
  metric_name: string;
  unit: string;
  source?: string;
};

// Create an API client for the esg_metrics table
export const esgMetricsApi = createApiClient<ESGMetric>("esg_metrics");

// Add ESG metrics specific methods
export const getMetricsByType = async (metricType: string) => {
  const { data, error } = await supabase
    .from("esg_metrics")
    .select("*")
    .eq("metric_type", metricType);
  
  if (error) {
    throw new Error(`Failed to get metrics for type ${metricType}`);
  }
  
  return data as ESGMetric[];
};

export const getMetricSummary = async () => {
  const { data, error } = await supabase
    .from("esg_metrics")
    .select(`
      metric_type,
      count(*),
      avg(metric_value)
    `)
    .group("metric_type");
  
  if (error) {
    throw new Error("Failed to get metric summary");
  }
  
  return data;
};
