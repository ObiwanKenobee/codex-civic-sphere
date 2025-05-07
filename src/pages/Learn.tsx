
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Book, BookOpen, School, Brain, Check, PlayCircle, Lock } from "lucide-react";
import Navigation from '@/components/layout/Navigation';

const Learn = () => {
  const [activeTab, setActiveTab] = useState('courses');
  
  const courses = [
    {
      id: "course-ethics",
      title: "Foundations of Ethical Reasoning",
      description: "Learn systematic approaches to ethical dilemmas and moral decision-making.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
      progress: 65,
      modules: 8,
      completed: 5,
      category: "Ethics"
    },
    {
      id: "course-governance",
      title: "Principles of Democratic Governance",
      description: "Explore the core concepts behind effective democratic systems and civic participation.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      progress: 30,
      modules: 10,
      completed: 3,
      category: "Governance"
    },
    {
      id: "course-resolution",
      title: "Conflict Resolution in Communities",
      description: "Practical frameworks for resolving disputes and finding common ground among diverse stakeholders.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      progress: 10,
      modules: 6,
      completed: 1,
      category: "Community"
    },
  ];
  
  const featuredModules = [
    {
      id: "module-001",
      title: "The Veil of Ignorance",
      description: "Rawls' thought experiment for creating just societies through impartial reasoning.",
      duration: "25 minutes",
      category: "Philosophy",
      difficulty: "Beginner"
    },
    {
      id: "module-002",
      title: "Tragedy of the Commons",
      description: "Understanding how shared resources can be depleted through individual self-interest.",
      duration: "40 minutes",
      category: "Economics",
      difficulty: "Intermediate"
    },
    {
      id: "module-003",
      title: "AI Ethics Case Studies",
      description: "Real-world examples of ethical challenges in AI systems and governance.",
      duration: "1 hour",
      category: "Technology",
      difficulty: "Advanced"
    }
  ];
  
  const achievements = [
    {
      id: "achievement-001",
      title: "Critical Thinker",
      description: "Completed all modules in logical reasoning and bias identification.",
      icon: Brain,
      date: "Awarded April 15, 2025",
      rarity: "Uncommon"
    },
    {
      id: "achievement-002",
      title: "Consensus Builder",
      description: "Successfully participated in 5 community deliberation exercises.",
      icon: Check,
      date: "Awarded March 27, 2025",
      rarity: "Rare"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <School className="mr-3 text-codex-gold" size={24} />
          <h1 className="text-3xl font-serif font-bold">Codex School</h1>
        </div>
        <p className="text-lg mb-6">Learn civic virtues and ethical reasoning through structured modules and interactive lessons.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Tabs defaultValue="courses" onValueChange={setActiveTab} value={activeTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="courses">
                  <BookOpen className="mr-2" size={16} />
                  Courses
                </TabsTrigger>
                <TabsTrigger value="modules">
                  <Book className="mr-2" size={16} />
                  Learning Modules
                </TabsTrigger>
                <TabsTrigger value="achievements">
                  <Brain className="mr-2" size={16} />
                  Achievements
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="courses">
                <div className="space-y-6">
                  {courses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 h-48 md:h-auto">
                          <img 
                            src={course.image} 
                            alt={course.title}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold">{course.title}</h3>
                            <Badge>{course.category}</Badge>
                          </div>
                          <p className="text-gray-600 mb-4">{course.description}</p>
                          
                          <div className="mb-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{course.completed} of {course.modules} modules</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">
                              Last accessed: 2 days ago
                            </span>
                            <Button className="bg-codex-gold hover:bg-yellow-600">
                              Continue Learning
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="modules">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredModules.map((module) => (
                    <Card key={module.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{module.title}</CardTitle>
                          <Badge variant="outline">{module.category}</Badge>
                        </div>
                        <CardDescription>{module.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex justify-between text-sm">
                          <span className="flex items-center">
                            <PlayCircle className="mr-1" size={14} />
                            {module.duration}
                          </span>
                          <span className="text-gray-500">
                            Difficulty: {module.difficulty}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">Start Module</Button>
                      </CardFooter>
                    </Card>
                  ))}
                  
                  {/* Locked module example */}
                  <Card key="locked-module" className="hover:shadow-md transition-shadow bg-gray-50 border-dashed">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-gray-500">Advanced Deliberation</CardTitle>
                        <Lock size={16} className="text-gray-400" />
                      </div>
                      <CardDescription className="text-gray-400">
                        Complete "Principles of Democratic Governance" to unlock.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex justify-between text-sm text-gray-400">
                        <span className="flex items-center">
                          <PlayCircle className="mr-1" size={14} />
                          55 minutes
                        </span>
                        <span>
                          Difficulty: Advanced
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" disabled className="w-full">Locked</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="achievements">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement) => (
                    <Card key={achievement.id} className="border-l-4 border-codex-gold">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="bg-amber-100 p-3 rounded-full">
                            <achievement.icon className="text-amber-600" size={24} />
                          </div>
                          <div>
                            <CardTitle>{achievement.title}</CardTitle>
                            <CardDescription>{achievement.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardFooter className="flex justify-between text-sm text-gray-500">
                        <span>{achievement.date}</span>
                        <span>Rarity: {achievement.rarity}</span>
                      </CardFooter>
                    </Card>
                  ))}
                  
                  {/* Achievement progress card */}
                  <Card className="bg-gray-50 border-dashed">
                    <CardHeader>
                      <CardTitle className="text-center">Next Achievement</CardTitle>
                      <CardDescription className="text-center">
                        Complete 2 more governance modules to earn "Policy Architect"
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center py-6">
                      <div className="w-32 h-32 rounded-full border-4 border-gray-200 relative flex items-center justify-center">
                        <div className="absolute inset-0">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle 
                              className="text-gray-200 stroke-current" 
                              strokeWidth="8" 
                              cx="50" 
                              cy="50" 
                              r="40" 
                              fill="transparent" 
                            />
                            <circle 
                              className="text-codex-gold stroke-current" 
                              strokeWidth="8" 
                              cx="50" 
                              cy="50" 
                              r="40" 
                              fill="transparent"
                              strokeDasharray="251.2"
                              strokeDashoffset="87.92"
                              strokeLinecap="round"
                              transform="rotate(-90 50 50)"
                            />
                          </svg>
                        </div>
                        <div className="text-2xl font-bold text-codex-gold">65%</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Learning Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-green-500 pl-4 py-2">
                    <h4 className="font-medium text-green-700">Module Completed</h4>
                    <p className="text-sm text-gray-600">You finished "The Veil of Ignorance"</p>
                    <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                  </div>
                  
                  <div className="border-l-2 border-blue-500 pl-4 py-2">
                    <h4 className="font-medium text-blue-700">Quiz Result</h4>
                    <p className="text-sm text-gray-600">85% on "Commons Dilemmas"</p>
                    <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                  </div>
                  
                  <div className="border-l-2 border-purple-500 pl-4 py-2">
                    <h4 className="font-medium text-purple-700">Discussion Contribution</h4>
                    <p className="text-sm text-gray-600">Your post received 12 responses</p>
                    <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50">
                <Button variant="link" className="w-full text-gray-700">View All Activity</Button>
              </CardFooter>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recommended Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-gray-100 rounded-md p-2">
                      <Book size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">Water Rights Case Study</h4>
                      <p className="text-sm text-gray-600">Based on your interest in resource management</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-gray-100 rounded-md p-2">
                      <PlayCircle size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">AI in Society: Simulations</h4>
                      <p className="text-sm text-gray-600">Popular among users with your learning path</p>
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

export default Learn;
