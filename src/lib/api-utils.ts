
import { supabase } from "@/integrations/supabase/client";

/**
 * Generic CRUD API utility for Supabase tables
 * @param tableName - The name of the table to operate on
 */
export const createApiClient = <T extends Record<string, any>>(tableName: string) => {
  return {
    /**
     * Get all records from the table with optional filtering
     * @param filters - Optional query filters
     */
    getAll: async (filters?: Record<string, any>) => {
      let query = supabase.from(tableName).select('*');
      
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          query = query.eq(key, value);
        });
      }
      
      const { data, error } = await query;
      
      if (error) {
        console.error(`Error fetching ${tableName}:`, error);
        throw new Error(`Failed to fetch ${tableName}`);
      }
      
      return data as T[];
    },

    /**
     * Get a single record by ID
     * @param id - The ID of the record to fetch
     */
    getById: async (id: string | number) => {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error(`Error fetching ${tableName} with id ${id}:`, error);
        throw new Error(`Failed to fetch ${tableName} with id ${id}`);
      }
      
      return data as T;
    },

    /**
     * Create a new record
     * @param record - The record data to insert
     */
    create: async (record: Partial<T>) => {
      const { data, error } = await supabase
        .from(tableName)
        .insert(record)
        .select()
        .single();
      
      if (error) {
        console.error(`Error creating ${tableName}:`, error);
        throw new Error(`Failed to create ${tableName}`);
      }
      
      return data as T;
    },

    /**
     * Update an existing record by ID
     * @param id - The ID of the record to update
     * @param updates - The fields to update
     */
    update: async (id: string | number, updates: Partial<T>) => {
      const { data, error } = await supabase
        .from(tableName)
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) {
        console.error(`Error updating ${tableName} with id ${id}:`, error);
        throw new Error(`Failed to update ${tableName} with id ${id}`);
      }
      
      return data as T;
    },

    /**
     * Delete a record by ID
     * @param id - The ID of the record to delete
     */
    delete: async (id: string | number) => {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error(`Error deleting ${tableName} with id ${id}:`, error);
        throw new Error(`Failed to delete ${tableName} with id ${id}`);
      }
      
      return true;
    },

    /**
     * Custom query with pagination
     * @param options - Query options including page, limit, and filters
     */
    query: async (options: {
      page?: number;
      limit?: number;
      filters?: Record<string, any>;
      orderBy?: { column: string; ascending?: boolean };
    }) => {
      const { 
        page = 1, 
        limit = 10, 
        filters = {}, 
        orderBy 
      } = options;
      
      const offset = (page - 1) * limit;
      
      let query = supabase
        .from(tableName)
        .select('*', { count: 'exact' })
        .range(offset, offset + limit - 1);
      
      Object.entries(filters).forEach(([key, value]) => {
        query = query.eq(key, value);
      });
      
      if (orderBy) {
        query = query.order(orderBy.column, { 
          ascending: orderBy.ascending !== false 
        });
      }
      
      const { data, error, count } = await query;
      
      if (error) {
        console.error(`Error querying ${tableName}:`, error);
        throw new Error(`Failed to query ${tableName}`);
      }
      
      return {
        data: data as T[],
        pagination: {
          page,
          limit,
          total: count || 0,
          totalPages: count ? Math.ceil(count / limit) : 0
        }
      };
    }
  };
};

/**
 * Hook for handling loading, error states, and data fetching
 */
export const useApiRequest = <T>(
  requestFn: () => Promise<T>,
  initialData: T,
  dependencies: React.DependencyList = []
) => {
  const [data, setData] = React.useState<T>(initialData);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  const execute = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await requestFn();
      setData(result);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [requestFn]);

  React.useEffect(() => {
    execute().catch(console.error);
  }, dependencies);

  return { data, isLoading, error, refetch: execute };
};
