
import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import CivicAIAssistant from '@/components/CivicAIAssistant';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, BarChart, Brain, AlertTriangle, CheckCircle, Info, Clock } from "lucide-react";

const AI = () => {
  const [historyTab, setHistoryTab] = useState('recent');
  
  const recentQueries = [
    {
      id: "query-001",
      query: "What are the ethical implications of water restrictions during drought?",
      timestamp: "2 hours ago",
      topics: ["Ethics", "Resource Management"]
    },
    {
      id: "query-002",
      query: "How can we balance individual privacy with community safety?",
      timestamp: "Yesterday",
      topics: ["Privacy", "Security"]
    },
    {
      id: "query-003",
      query: "What precedents exist for AI participation in governance?",
      timestamp: "3 days ago",
      topics: ["AI Ethics", "Governance"]
    }
  ];
  
  const insights = [
    {
      id: "insight-001",
      title: "Potential Bias Detected",
      description: "Your recent queries show a potential regional bias in resource allocation discussions.",
      type: "warning",
      icon: AlertTriangle,
      timestamp: "Based on last 7 days of interaction"
    },
    {
      id: "insight-002",
      title: "Reasoning Pattern",
      description: "You tend to approach ethical dilemmas using utilitarian frameworks more than rights-based frameworks.",
      type: "info",
      icon: Info,
      timestamp: "Based on 25+ interactions"
    },
    {
      id: "insight-003",
      title: "Balanced Viewpoint",
      description: "Your discussions on AI governance show consideration of multiple stakeholder perspectives.",
      type: "success",
      icon: CheckCircle,
      timestamp: "Based on recent discussions"
    }
  ];
  
  const ethicalFrameworks = [
    {
      id: "framework-001",
      name: "Utilitarianism",
      description: "Evaluates actions based on their outcomes and overall well-being produced.",
      relevance: "High relevance to your queries",
    },
    {
      id: "framework-002",
      name: "Rights-Based Ethics",
      description: "Focuses on inherent rights that should be protected regardless of outcomes.",
      relevance: "Medium relevance to your queries",
    },
    {
      id: "framework-003",
      name: "Virtue Ethics",
      description: "Considers the character and virtues that should guide decision making.",
      relevance: "Low relevance to your queries",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <MessageSquare className="mr-3 text-codex-blue" size={24} />
          <h1 className="text-3xl font-serif font-bold">Codex GPT — Civic AI Dialog</h1>
        </div>
        <p className="text-lg mb-6">
          A Socratic assistant for moral reasoning and civic understanding. Consult the AI on ethical
          dilemmas, legal questions, and civic challenges.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="mb-8">
              <CivicAIAssistant />
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Query History</CardTitle>
                <CardDescription>Your recent interactions with Codex GPT</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="recent" onValueChange={setHistoryTab} value={historyTab}>
                  <TabsList className="mb-4">
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                    <TabsTrigger value="saved">Saved</TabsTrigger>
                    <TabsTrigger value="insights">AI Insights</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="recent">
                    <div className="space-y-4">
                      {recentQueries.map((query) => (
                        <div key={query.id} className="p-4 border rounded-md hover:bg-gray-50 transition-colors">
                          <div className="flex justify-between">
                            <h4 className="font-medium">{query.query}</h4>
                            <span className="text-sm text-gray-500">{query.timestamp}</span>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {query.topics.map((topic) => (
                              <Badge key={topic} variant="outline" className="text-xs">{topic}</Badge>
                            ))}
                          </div>
                          <div className="mt-3 flex justify-end">
                            <Button variant="ghost" size="sm" className="text-xs">View Conversation</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="saved">
                    <div className="text-center py-8">
                      <Brain size={48} className="mx-auto text-gray-300 mb-2" />
                      <h3 className="text-lg font-medium mb-1">No saved conversations yet</h3>
                      <p className="text-gray-500 text-sm">
                        When you save important conversations, they'll appear here for easy reference.
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="insights">
                    <div className="space-y-4">
                      {insights.map((insight) => (
                        <div 
                          key={insight.id} 
                          className={`p-4 border rounded-md 
                            ${insight.type === 'warning' ? 'border-amber-200 bg-amber-50' : 
                              insight.type === 'success' ? 'border-green-200 bg-green-50' : 
                              'border-blue-200 bg-blue-50'}`}
                        >
                          <div className="flex items-start">
                            <div className={`p-2 rounded-full 
                              ${insight.type === 'warning' ? 'bg-amber-100 text-amber-600' : 
                                insight.type === 'success' ? 'bg-green-100 text-green-600' : 
                                'bg-blue-100 text-blue-600'} mr-3`}>
                              <insight.icon size={18} />
                            </div>
                            <div>
                              <h4 className="font-medium">{insight.title}</h4>
                              <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                              <p className="text-xs text-gray-500 mt-2 italic">{insight.timestamp}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2" size={18} />
                  About Civic AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Codex GPT is designed to help citizens reason through complex moral and civic issues.
                  Unlike standard AI assistants, it focuses specifically on:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Identifying ethical dimensions of problems</li>
                  <li>Surfacing relevant legal and historical precedents</li>
                  <li>Highlighting potential biases in reasoning</li>
                  <li>Providing multiple perspectives on divisive issues</li>
                </ul>
                <Separator className="my-4" />
                <h4 className="font-medium mb-2">Ethical Frameworks Used</h4>
                <div className="space-y-3">
                  {ethicalFrameworks.map((framework) => (
                    <div key={framework.id}>
                      <div className="flex justify-between items-center">
                        <h5 className="font-medium">{framework.name}</h5>
                        <Badge 
                          variant="outline" 
                          className={
                            framework.relevance.startsWith("High") ? "border-green-200 bg-green-50 text-green-700" :
                            framework.relevance.startsWith("Medium") ? "border-blue-200 bg-blue-50 text-blue-700" :
                            "border-gray-200 bg-gray-50 text-gray-700"
                          }
                        >
                          {framework.relevance}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{framework.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50">
                <Button variant="link" className="w-full text-gray-700">Learn More About AI Ethics</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">AI Model Version</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">v4.2.1 (Latest)</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Ethics Module</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Active</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Response Time</span>
                    <span className="text-sm text-gray-600">1.2s avg.</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Civic Data Update</span>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-600">12 hours ago</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
