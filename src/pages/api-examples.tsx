
import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Loader2, Check, AlertCircle, Info } from 'lucide-react';
import { userProfilesApi, UserProfile } from '@/lib/api-clients/user-profile-api';
import { riskAssessmentsApi, RiskAssessment } from '@/lib/api-clients/risk-assessment-api';
import { esgMetricsApi, ESGMetric } from '@/lib/api-clients/esg-metrics-api';
import { useToast } from "@/components/ui/use-toast";

const ApiExamples = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("users");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    // User profile fields
    name: '',
    role: '',
    organization: '',
    
    // Risk assessment fields
    title: '',
    description: '',
    impact_score: 0,
    probability_score: 0,
    risk_level: 'Low',
    category: '',
    
    // ESG metric fields
    metric_name: '',
    metric_value: 0,
    metric_type: '',
    unit: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGetAll = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      let data;
      
      switch(activeTab) {
        case "users":
          data = await userProfilesApi.getAll();
          break;
        case "risks":
          data = await riskAssessmentsApi.getAll();
          break;
        case "metrics":
          data = await esgMetricsApi.getAll();
          break;
        default:
          throw new Error("Invalid tab");
      }
      
      setResults(data);
      toast({
        title: "Success",
        description: `Retrieved ${data.length} records`,
        variant: "default",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      toast({
        title: "Error",
        description: String(err),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreate = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      let data;
      
      switch(activeTab) {
        case "users":
          data = await userProfilesApi.create({
            name: formData.name,
            role: formData.role,
            organization: formData.organization || undefined
          });
          break;
        case "risks":
          data = await riskAssessmentsApi.create({
            title: formData.title,
            description: formData.description,
            impact_score: Number(formData.impact_score),
            probability_score: Number(formData.probability_score),
            risk_level: formData.risk_level,
            category: formData.category,
            status: 'active'
          });
          break;
        case "metrics":
          data = await esgMetricsApi.create({
            metric_name: formData.metric_name,
            metric_value: Number(formData.metric_value),
            metric_type: formData.metric_type,
            unit: formData.unit
          });
          break;
        default:
          throw new Error("Invalid tab");
      }
      
      setResults([data]);
      toast({
        title: "Success",
        description: `Created new record`,
        variant: "default",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      toast({
        title: "Error",
        description: String(err),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderForm = () => {
    switch(activeTab) {
      case "users":
        return (
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" name="role" value={formData.role} onChange={handleInputChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="organization">Organization</Label>
              <Input id="organization" name="organization" value={formData.organization} onChange={handleInputChange} />
            </div>
          </div>
        );
      case "risks":
        return (
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" value={formData.title} onChange={handleInputChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" name="description" value={formData.description} onChange={handleInputChange} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="impact_score">Impact Score (1-10)</Label>
                <Input 
                  id="impact_score" 
                  name="impact_score" 
                  type="number" 
                  min="1" 
                  max="10"
                  value={formData.impact_score} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="probability_score">Probability Score (1-10)</Label>
                <Input 
                  id="probability_score" 
                  name="probability_score" 
                  type="number"
                  min="1"
                  max="10" 
                  value={formData.probability_score} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="risk_level">Risk Level</Label>
                <Input id="risk_level" name="risk_level" value={formData.risk_level} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" name="category" value={formData.category} onChange={handleInputChange} />
              </div>
            </div>
          </div>
        );
      case "metrics":
        return (
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="metric_name">Metric Name</Label>
              <Input id="metric_name" name="metric_name" value={formData.metric_name} onChange={handleInputChange} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="metric_value">Value</Label>
                <Input 
                  id="metric_value" 
                  name="metric_value" 
                  type="number" 
                  value={formData.metric_value} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="unit">Unit</Label>
                <Input id="unit" name="unit" value={formData.unit} onChange={handleInputChange} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="metric_type">Metric Type</Label>
              <Input id="metric_type" name="metric_type" value={formData.metric_type} onChange={handleInputChange} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderResults = () => {
    if (!results) return null;
    
    return (
      <div className="mt-6">
        <h3 className="text-lg font-medium">Results</h3>
        <div className="mt-2 border rounded-md p-4 overflow-auto max-h-96">
          <pre className="whitespace-pre-wrap text-sm">
            {JSON.stringify(results, null, 2)}
          </pre>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto p-6">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-semibold">API Examples</h1>
          <p className="text-gray-600">
            Test the API endpoints for different resources in the system.
          </p>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
            <TabsList className="w-full">
              <TabsTrigger value="users" className="flex-1">User Profiles</TabsTrigger>
              <TabsTrigger value="risks" className="flex-1">Risk Assessments</TabsTrigger>
              <TabsTrigger value="metrics" className="flex-1">ESG Metrics</TabsTrigger>
            </TabsList>
            
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>API Operations</CardTitle>
                    <CardDescription>Test CRUD operations on {activeTab}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-2 mb-6">
                      <Button onClick={handleGetAll} disabled={isLoading}>
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Get All
                      </Button>
                      <Button onClick={handleCreate} disabled={isLoading} variant="outline">
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Create
                      </Button>
                    </div>
                    
                    {error && (
                      <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}
                    
                    <Separator className="my-4" />
                    {renderForm()}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>API Response</CardTitle>
                    <CardDescription>View the data returned by the API</CardDescription>
                  </CardHeader>
                  <CardContent className="h-96 overflow-auto">
                    {isLoading ? (
                      <div className="flex h-full items-center justify-center">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                      </div>
                    ) : results ? (
                      renderResults()
                    ) : (
                      <div className="flex h-full items-center justify-center text-muted-foreground">
                        <Info className="h-8 w-8 mr-2" />
                        <p>Run an operation to see results</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ApiExamples;
