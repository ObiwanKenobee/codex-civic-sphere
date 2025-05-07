
import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Vote as VoteIcon, Clock, MessageCircle, AlertTriangle } from "lucide-react";

const Vote = () => {
  // State for active votes
  const [selectedVotes, setSelectedVotes] = useState<Record<string, string | null>>({
    "vote-001": null,
    "vote-002": null
  });

  const handleVoteChange = (voteId: string, value: string) => {
    setSelectedVotes(prev => ({
      ...prev,
      [voteId]: value
    }));
  };

  const activeVotes = [
    {
      id: "vote-001",
      title: "Water Distribution Algorithm Update",
      description: "Proposal to adjust the water distribution algorithm to account for agricultural needs during drought seasons.",
      deadline: "2 days remaining",
      votes: { yes: 1456, no: 423, abstain: 128 },
      category: "Resource Management",
      impact: "High",
      options: ["Support", "Oppose", "Abstain"]
    },
    {
      id: "vote-002",
      title: "AI Ethics Committee Formation",
      description: "Vote to establish a citizen-led ethics committee to oversee AI systems involved in civic decision making.",
      deadline: "5 days remaining",
      votes: { yes: 891, no: 302, abstain: 76 },
      category: "Governance",
      impact: "Medium",
      options: ["Support", "Oppose", "Abstain"]
    }
  ];

  const upcomingVotes = [
    {
      id: "vote-003",
      title: "Community Space Allocation",
      description: "Determining how to allocate new community space between recreational, educational, and commercial uses.",
      startDate: "Starts in 3 days",
      category: "Urban Planning"
    },
    {
      id: "vote-004",
      title: "Education Curriculum Update",
      description: "Proposed updates to the Codex School curriculum focusing on expanding ethical reasoning modules.",
      startDate: "Starts in 5 days",
      category: "Education"
    }
  ];

  const pastVotes = [
    {
      id: "vote-past-001",
      title: "Digital Privacy Amendment",
      result: "Passed",
      votes: { yes: 2341, no: 892, abstain: 156 },
      date: "Closed on May 1, 2025",
      implementationDate: "Takes effect June 1, 2025"
    },
    {
      id: "vote-past-002",
      title: "Resource Sharing Agreement with Region 4",
      result: "Failed",
      votes: { yes: 1243, no: 1876, abstain: 203 },
      date: "Closed on April 20, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <VoteIcon className="mr-3 text-codex-blue" size={24} />
          <h1 className="text-3xl font-serif font-bold">Codex Vote</h1>
        </div>
        <p className="text-lg mb-6">Participate directly in governance by voting on proposals and laws that affect your community.</p>

        <Tabs defaultValue="active">
          <TabsList className="mb-6">
            <TabsTrigger value="active">Active Votes</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Votes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            <div className="space-y-6">
              {activeVotes.map((vote) => (
                <Card key={vote.id} className="border-l-4 border-codex-blue">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{vote.title}</CardTitle>
                        <CardDescription className="mt-2">{vote.description}</CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-blue-50">{vote.category}</Badge>
                        <Badge variant={vote.impact === "High" ? "destructive" : "secondary"}>
                          {vote.impact} Impact
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Current results (live):</span>
                        <span className="text-gray-500">
                          {vote.votes.yes + vote.votes.no + vote.votes.abstain} votes cast
                        </span>
                      </div>
                      <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div className="flex h-full">
                          <div 
                            className="bg-green-500 h-full" 
                            style={{ width: `${(vote.votes.yes / (vote.votes.yes + vote.votes.no + vote.votes.abstain)) * 100}%` }}
                          />
                          <div 
                            className="bg-red-500 h-full" 
                            style={{ width: `${(vote.votes.no / (vote.votes.yes + vote.votes.no + vote.votes.abstain)) * 100}%` }}
                          />
                          <div 
                            className="bg-gray-300 h-full" 
                            style={{ width: `${(vote.votes.abstain / (vote.votes.yes + vote.votes.no + vote.votes.abstain)) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between text-xs mt-1 text-gray-600">
                        <span>Support: {vote.votes.yes}</span>
                        <span>Oppose: {vote.votes.no}</span>
                        <span>Abstain: {vote.votes.abstain}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Cast your vote:</h4>
                      <RadioGroup 
                        value={selectedVotes[vote.id] || ""} 
                        onValueChange={(value) => handleVoteChange(vote.id, value)}
                        className="flex space-x-4"
                      >
                        {vote.options.map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <RadioGroupItem value={option} id={`${vote.id}-${option}`} />
                            <label 
                              htmlFor={`${vote.id}-${option}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {option}
                            </label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1" size={16} />
                      <span>{vote.deadline}</span>
                    </div>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="mr-1" size={14} />
                        Discussion
                      </Button>
                      <Button 
                        disabled={!selectedVotes[vote.id]}
                        className="bg-codex-blue hover:bg-blue-700"
                      >
                        Submit Vote
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming">
            <div className="space-y-4">
              {upcomingVotes.map((vote) => (
                <Card key={vote.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{vote.title}</CardTitle>
                        <CardDescription className="mt-2">{vote.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{vote.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1" size={16} />
                      <span>{vote.startDate}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="mr-1" size={14} />
                      Preview Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="past">
            <div className="space-y-4">
              {pastVotes.map((vote) => (
                <Card key={vote.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{vote.title}</CardTitle>
                      <Badge 
                        variant={vote.result === "Passed" ? "default" : "secondary"}
                        className={vote.result === "Passed" ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-red-100 text-red-800 hover:bg-red-100"}
                      >
                        {vote.result}
                      </Badge>
                    </div>
                    <CardDescription className="mt-2">{vote.date}</CardDescription>
                    {vote.implementationDate && (
                      <div className="mt-2 flex items-center text-sm">
                        <AlertTriangle className="mr-1 text-amber-500" size={14} />
                        <span className="text-amber-600">{vote.implementationDate}</span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className="flex h-full">
                        <div 
                          className="bg-green-500 h-full" 
                          style={{ width: `${(vote.votes.yes / (vote.votes.yes + vote.votes.no + vote.votes.abstain)) * 100}%` }}
                        />
                        <div 
                          className="bg-red-500 h-full" 
                          style={{ width: `${(vote.votes.no / (vote.votes.yes + vote.votes.no + vote.votes.abstain)) * 100}%` }}
                        />
                        <div 
                          className="bg-gray-300 h-full" 
                          style={{ width: `${(vote.votes.abstain / (vote.votes.yes + vote.votes.no + vote.votes.abstain)) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-xs mt-1 text-gray-600">
                      <span>Support: {vote.votes.yes}</span>
                      <span>Oppose: {vote.votes.no}</span>
                      <span>Abstain: {vote.votes.abstain}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      View Complete Results
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Vote;
