
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
  // Modified to use a compatible approach for grouping
  const { data, error } = await supabase
    .from("esg_metrics")
    .select('metric_type, metric_value');
  
  if (error) {
    throw new Error("Failed to get metric summary");
  }
  
  // Process the data client-side to calculate averages and counts
  const summary = data.reduce((acc: Record<string, { count: number, sum: number }>, curr) => {
    if (!acc[curr.metric_type]) {
      acc[curr.metric_type] = { count: 0, sum: 0 };
    }
    acc[curr.metric_type].count++;
    acc[curr.metric_type].sum += curr.metric_value;
    return acc;
  }, {});
  
  return Object.entries(summary).map(([metric_type, { count, sum }]) => ({
    metric_type,
    count,
    avg: sum / count
  }));
};
