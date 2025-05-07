
import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Book, Search, FilePlus, ArrowUpDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Laws = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample law data
  const laws = [
    {
      id: "law-001",
      title: "Water Rights Distribution",
      status: "Active",
      dateEnacted: "2025-01-15",
      summary: "Establishes fair distribution of water resources based on population needs and sustainability metrics.",
      category: "Resource Management"
    },
    {
      id: "law-002",
      title: "Digital Identity Protection",
      status: "Active", 
      dateEnacted: "2024-11-03",
      summary: "Guarantees citizen rights to data privacy while establishing ethical AI oversight.",
      category: "Digital Rights"
    },
    {
      id: "law-003", 
      title: "Community Decision Framework",
      status: "Pending Review",
      dateEnacted: "Voting closes in 2 days",
      summary: "Creates a transparent process for community-level decision making with proportional representation.",
      category: "Governance"
    }
  ];
  
  const proposals = [
    {
      id: "prop-001",
      title: "Universal Resource Sharing",
      author: "Maria Chen",
      dateProposed: "2025-04-28",
      votes: { support: 1245, against: 421 },
      summary: "Proposes a framework for equitable sharing of scarce resources across communities."
    },
    {
      id: "prop-002", 
      title: "AI Ethics in Governance",
      author: "Jamal Washington",
      dateProposed: "2025-04-25",
      votes: { support: 893, against: 219 },
      summary: "Sets boundaries for AI systems involved in civic decision making and resource allocation."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold mb-6">Codex Laws</h1>
        <p className="text-lg mb-6">
          Browse, propose and amend laws in the Codex Novum system. All laws are transparent, 
          traceable to their origins, and open to citizen input.
        </p>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search laws or proposals..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-codex-blue hover:bg-blue-700">
              <FilePlus className="mr-2 h-4 w-4" />
              New Proposal
            </Button>
          </div>
        </div>

        <Tabs defaultValue="active">
          <TabsList className="mb-4">
            <TabsTrigger value="active">Active Laws</TabsTrigger>
            <TabsTrigger value="proposals">Proposals</TabsTrigger>
            <TabsTrigger value="amendments">Amendments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm font-medium text-gray-500 px-4 py-2">
                <span className="flex items-center">
                  <Book className="mr-2 h-4 w-4" />
                  Title
                </span>
                <span className="hidden md:block">Category</span>
                <span className="hidden md:block">Date Enacted</span>
                <span className="flex items-center">
                  Status
                  <ArrowUpDown className="ml-2 h-3 w-3" />
                </span>
              </div>
              
              <Separator />
              
              {laws.map((law) => (
                <div key={law.id} className="codex-card hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">{law.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{law.summary}</p>
                    </div>
                    <div className="hidden md:block text-sm text-gray-600 px-4">
                      {law.category}
                    </div>
                    <div className="hidden md:block text-sm text-gray-600 px-4">
                      {law.dateEnacted}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      law.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {law.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="proposals">
            <div className="space-y-4">
              {proposals.map((proposal) => (
                <div key={proposal.id} className="codex-card hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">{proposal.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{proposal.summary}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        Proposed by {proposal.author} on {proposal.dateProposed}
                      </p>
                    </div>
                    <div className="text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600">{proposal.votes.support}</span>
                        <span>/</span>
                        <span className="text-red-600">{proposal.votes.against}</span>
                      </div>
                      <Button size="sm" variant="outline" className="mt-2">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="amendments">
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-6 text-center">
              <h3 className="text-lg font-medium mb-2">Amendment System Coming Soon</h3>
              <p className="text-gray-600">
                The amendment submission and review system is currently being developed.
                Check back soon for updates.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Laws;
