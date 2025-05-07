
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { User, Globe, Book, FileText, Award, MessageCircle, Vote } from "lucide-react";

const Profile = () => {
  // Sample user data
  const userData = {
    name: "Alex Johnson",
    region: "Pacific Northwest",
    joinDate: "March 2025",
    bio: "Working to improve water rights legislation and digital ethics frameworks.",
    impactScore: 78,
    participation: {
      votes: 24,
      proposals: 3,
      comments: 47,
      learningModules: 8
    },
    badges: [
      { id: "ethics-expert", name: "Ethics Expert", category: "Learning", description: "Completed all ethics modules" },
      { id: "active-voter", name: "Active Voter", category: "Participation", description: "Voted in 20+ proposals" },
      { id: "community-voice", name: "Community Voice", category: "Engagement", description: "Comments received 100+ upvotes" }
    ],
    expertise: ["Water Rights", "Digital Ethics", "Community Governance"]
  };

  // Sample activity data
  const recentActivity = [
    { id: "act-001", type: "vote", title: "Voted on Water Distribution Algorithm", date: "2 days ago", link: "/vote" },
    { id: "act-002", type: "comment", title: "Commented on AI Ethics Committee Formation", date: "4 days ago", link: "/laws" },
    { id: "act-003", type: "learn", title: "Completed Ethics of Scarcity module", date: "1 week ago", link: "/learn" }
  ];

  // Sample proposals data
  const userProposals = [
    { id: "prop-001", title: "Community Gardens Water Rights", status: "Under Review", votes: { yes: 87, no: 23 }, link: "/laws" },
    { id: "prop-002", title: "Youth Digital Privacy Framework", status: "Draft", votes: { yes: 0, no: 0 }, link: "/laws" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Summary */}
          <div className="md:w-1/3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-serif">Civic Profile</CardTitle>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
                <CardDescription>Your identity in the Codex Novum ecosystem</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 bg-codex-blue rounded-full flex items-center justify-center text-white mb-4">
                    <User size={36} />
                  </div>
                  <h2 className="text-xl font-medium">{userData.name}</h2>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Globe className="mr-1" size={14} />
                    <span>{userData.region}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Member since {userData.joinDate}</p>
                </div>

                <Separator className="my-4" />

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">About</h3>
                    <p className="text-sm">{userData.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Areas of Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {userData.expertise.map((item) => (
                        <Badge key={item} variant="outline" className="bg-blue-50">{item}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Civic Impact Score</h3>
                    <div className="flex items-center">
                      <Progress value={userData.impactScore} className="h-2 flex-1" />
                      <span className="ml-2 text-sm font-medium">{userData.impactScore}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Based on participation, proposal quality, and community feedback</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Export Data
                </Button>
                <Button variant="outline" size="sm">
                  <Globe className="mr-2 h-4 w-4" />
                  Privacy Settings
                </Button>
              </CardFooter>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2" size={18} />
                  Earned Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userData.badges.map((badge) => (
                    <div key={badge.id} className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-codex-gold flex items-center justify-center text-white mr-3">
                        <Award size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">{badge.name}</h4>
                        <p className="text-xs text-gray-500">{badge.category}</p>
                        <p className="text-sm text-gray-600 mt-1">{badge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="w-full text-gray-700">View All Badges</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Tabs Section */}
          <div className="md:w-2/3">
            <Tabs defaultValue="activity">
              <TabsList className="mb-6">
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="proposals">My Proposals</TabsTrigger>
                <TabsTrigger value="participation">Participation</TabsTrigger>
                <TabsTrigger value="learning">Learning</TabsTrigger>
              </TabsList>
              
              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your recent actions across the Codex platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 
                            ${activity.type === 'vote' ? 'bg-green-100 text-green-600' : 
                            activity.type === 'comment' ? 'bg-blue-100 text-blue-600' : 
                            'bg-amber-100 text-amber-600'}`}>
                            {activity.type === 'vote' ? <Vote size={14} /> : 
                            activity.type === 'comment' ? <MessageCircle size={14} /> : 
                            <Book size={14} />}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-medium">{activity.title}</h4>
                              <span className="text-sm text-gray-500">{activity.date}</span>
                            </div>
                            <div className="mt-1 flex justify-end">
                              <Button variant="link" size="sm" className="h-auto p-0" asChild>
                                <a href={activity.link}>View Details</a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Load More Activity</Button>
                  </CardFooter>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Participation Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Vote className="mx-auto text-codex-blue mb-2" size={24} />
                        <h3 className="text-2xl font-semibold">{userData.participation.votes}</h3>
                        <p className="text-sm text-gray-600">Votes Cast</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <FileText className="mx-auto text-codex-blue mb-2" size={24} />
                        <h3 className="text-2xl font-semibold">{userData.participation.proposals}</h3>
                        <p className="text-sm text-gray-600">Proposals</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <MessageCircle className="mx-auto text-codex-blue mb-2" size={24} />
                        <h3 className="text-2xl font-semibold">{userData.participation.comments}</h3>
                        <p className="text-sm text-gray-600">Comments</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Book className="mx-auto text-codex-blue mb-2" size={24} />
                        <h3 className="text-2xl font-semibold">{userData.participation.learningModules}</h3>
                        <p className="text-sm text-gray-600">Modules</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="proposals">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>My Proposals</CardTitle>
                      <Button className="bg-codex-blue hover:bg-blue-700">New Proposal</Button>
                    </div>
                    <CardDescription>Laws and amendments you've proposed to the Codex</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {userProposals.length > 0 ? (
                      <div className="space-y-4">
                        {userProposals.map((proposal) => (
                          <div key={proposal.id} className="border rounded-md p-4">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium">{proposal.title}</h4>
                              <Badge 
                                variant="outline"
                                className={proposal.status === "Under Review" ? "bg-amber-50 text-amber-800" : "bg-blue-50 text-blue-800"}
                              >
                                {proposal.status}
                              </Badge>
                            </div>
                            {proposal.status !== "Draft" && (
                              <div className="mt-2">
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Current votes:</span>
                                  <span className="text-gray-500">
                                    {proposal.votes.yes + proposal.votes.no} votes cast
                                  </span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                  <div className="flex h-full">
                                    <div 
                                      className="bg-green-500 h-full" 
                                      style={{ width: `${(proposal.votes.yes / (proposal.votes.yes + proposal.votes.no || 1)) * 100}%` }}
                                    />
                                    <div 
                                      className="bg-red-500 h-full" 
                                      style={{ width: `${(proposal.votes.no / (proposal.votes.yes + proposal.votes.no || 1)) * 100}%` }}
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                            <div className="mt-3 flex justify-end">
                              <Button variant="outline" size="sm" asChild>
                                <a href={proposal.link}>Edit Proposal</a>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <FileText size={48} className="mx-auto text-gray-300 mb-2" />
                        <h3 className="text-lg font-medium mb-1">No proposals yet</h3>
                        <p className="text-gray-500 text-sm mb-4">
                          You haven't created any law proposals yet.
                        </p>
                        <Button className="bg-codex-blue hover:bg-blue-700">Create Your First Proposal</Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="participation">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Voting History</CardTitle>
                    <CardDescription>Your participation in recent Codex votes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-6 text-center">
                      <h3 className="text-lg font-medium mb-2">Detailed History Coming Soon</h3>
                      <p className="text-gray-600">
                        Full voting history with filters and analytics will be available in the next update.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="learning">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Journey</CardTitle>
                    <CardDescription>Your progress through the Codex School curriculum</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-6 text-center">
                      <h3 className="text-lg font-medium mb-2">Learning Dashboard Coming Soon</h3>
                      <p className="text-gray-600">
                        Track your progress, earn badges, and access exclusive educational content.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      {/* SEO Metadata Section - Not visible but important for SEO */}
      <div className="hidden">
        <h1>Codex Novum - Citizen Profile</h1>
        <p>
          Your personal dashboard for civic engagement, law making, voting history, and ethics education
          in the Codex Novum moral operating system. Track your impact, proposals, and community contributions.
        </p>
        <ul>
          <li>Civic participation tracking</li>
          <li>Law proposal management</li>
          <li>Ethical education progress</li>
          <li>Community contribution metrics</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
