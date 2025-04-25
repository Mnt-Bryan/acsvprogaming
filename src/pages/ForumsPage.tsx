import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, MessageSquare, Flag, Users, Star, Trophy, ExternalLink, Info } from "lucide-react";
import CreateThreadDialog from "@/components/forums/CreateThreadDialog";

// Sample forums data
const popularThreads = [
  {
    id: 1,
    title: "PlayStation 6 Rumor Roundup - What We Know So Far",
    category: "Hardware & Tech",
    author: {
      name: "GamerPro99",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    replies: 134,
    views: 2865,
    lastActivity: "10 minutes ago",
    isHot: true,
    isPinned: false
  },
  {
    id: 2,
    title: "Official ACSV Valorant Tournament - Registration Now Open!",
    category: "Tournaments",
    author: {
      name: "Tournament_Admin",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    replies: 78,
    views: 1543,
    lastActivity: "2 hours ago",
    isHot: false,
    isPinned: true
  },
  {
    id: 3,
    title: "Elden Ring DLC Analysis - Shadow of the Erdtree Deep Dive",
    category: "Game Discussion",
    author: {
      name: "LoreHunter",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    replies: 92,
    views: 1874,
    lastActivity: "5 hours ago",
    isHot: true,
    isPinned: false
  },
  {
    id: 4,
    title: "Setting up your first gaming PC - Beginner's Guide",
    category: "Hardware & Tech",
    author: {
      name: "TechWizard",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    replies: 56,
    views: 1235,
    lastActivity: "Yesterday",
    isHot: false,
    isPinned: false
  },
  {
    id: 5,
    title: "FIFA 26 Wishlist - What features do you want to see?",
    category: "Game Discussion",
    author: {
      name: "SoccerFan22",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    replies: 89,
    views: 1652,
    lastActivity: "Yesterday",
    isHot: false,
    isPinned: false
  }
];

const recentThreads = [
  {
    id: 6,
    title: "First impressions of the new Logitech G Pro X Superlight 2",
    category: "Hardware & Tech",
    author: {
      name: "MouseEnthusiast",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
    },
    replies: 12,
    views: 245,
    lastActivity: "20 minutes ago",
    isHot: false,
    isPinned: false
  },
  {
    id: 7,
    title: "Game optimization tips for low-end PCs - Share your secrets!",
    category: "Hardware & Tech",
    author: {
      name: "BudgetGamer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    replies: 8,
    views: 187,
    lastActivity: "45 minutes ago",
    isHot: false,
    isPinned: false
  },
  {
    id: 8,
    title: "Looking for squad members for weekend Warzone tournament",
    category: "LFG",
    author: {
      name: "SquadLeader",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    replies: 5,
    views: 98,
    lastActivity: "1 hour ago",
    isHot: false,
    isPinned: false
  },
  {
    id: 9,
    title: "Cyberpunk 2077: Phantom Liberty - Worth the purchase?",
    category: "Game Discussion",
    author: {
      name: "NightCityFan",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    replies: 15,
    views: 321,
    lastActivity: "3 hours ago",
    isHot: false,
    isPinned: false
  },
  {
    id: 10,
    title: "Tips for improving aim in FPS games - from a coach",
    category: "Tips & Guides",
    author: {
      name: "AimCoach",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
    },
    replies: 22,
    views: 476,
    lastActivity: "4 hours ago",
    isHot: false,
    isPinned: false
  }
];

const forumCategories = [
  { name: "Game Discussion", threads: 1245, icon: MessageSquare },
  { name: "Hardware & Tech", threads: 876, icon: Info },
  { name: "Tournaments", threads: 342, icon: Trophy },
  { name: "Tips & Guides", threads: 654, icon: Flag },
  { name: "LFG", threads: 432, icon: Users },
  { name: "Off-Topic", threads: 789, icon: ExternalLink }
];

const ForumsPage = () => {
  const handleCreateThread = (threadData: { title: string; content: string; category: string }) => {
    console.log("New thread created:", threadData);
  };

  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="bg-gaming-black bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-blend-overlay bg-opacity-70 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gaming-white mb-4">Community Forums</h1>
          <p className="text-xl text-gaming-light-gray max-w-2xl mx-auto">
            Join discussions with fellow gamers, share your experiences, and become part of our thriving community.
          </p>
          <div className="mt-8">
            <CreateThreadDialog onThreadCreate={handleCreateThread} />
          </div>
        </div>
      </div>
      
      {/* Search and Quick Links */}
      <section className="py-8 bg-gaming-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search forums..." 
                className="pl-10 bg-black/30 border-gaming-black text-white" 
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-gaming-red text-gaming-red hover:bg-gaming-red hover:text-white">
                Popular Threads
              </Button>
              <Button variant="outline" className="border-gaming-red text-gaming-red hover:bg-gaming-red hover:text-white">
                Recent Discussions
              </Button>
              <Button variant="outline" className="border-gaming-red text-gaming-red hover:bg-gaming-red hover:text-white">
                Unanswered Threads
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Forum Content */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Forum Area */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="popular">
                <div className="flex justify-between items-center mb-6">
                  <TabsList className="bg-gaming-gray">
                    <TabsTrigger value="popular" className="data-[state=active]:bg-gaming-red">Popular</TabsTrigger>
                    <TabsTrigger value="recent" className="data-[state=active]:bg-gaming-red">Recent</TabsTrigger>
                    <TabsTrigger value="my-threads" className="data-[state=active]:bg-gaming-red">My Threads</TabsTrigger>
                  </TabsList>
                  <Button className="bg-gaming-red hover:bg-red-700 text-white">
                    New Thread
                  </Button>
                </div>
                
                <TabsContent value="popular" className="mt-0">
                  <div className="space-y-4">
                    {popularThreads.map((thread) => (
                      <Card key={thread.id} className="bg-gaming-gray border-none hover:bg-gray-800 transition duration-200">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <Avatar className="hidden sm:block">
                              <AvatarImage src={thread.author.avatar} alt={thread.author.name} />
                              <AvatarFallback>{thread.author.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-medium text-gaming-red">{thread.category}</span>
                                {thread.isPinned && (
                                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 text-xs">Pinned</Badge>
                                )}
                                {thread.isHot && (
                                  <Badge className="bg-gaming-red text-white text-xs">Hot</Badge>
                                )}
                              </div>
                              <h3 className="text-lg font-bold text-white mb-2">{thread.title}</h3>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gaming-light-gray">
                                <span>By <span className="text-gaming-red">{thread.author.name}</span></span>
                                <div className="flex items-center">
                                  <MessageSquare size={14} className="mr-1" />
                                  <span>{thread.replies} replies</span>
                                </div>
                                <div className="flex items-center">
                                  <Users size={14} className="mr-1" />
                                  <span>{thread.views} views</span>
                                </div>
                                <span>Last activity: {thread.lastActivity}</span>
                              </div>
                            </div>
                            <Button variant="ghost" className="text-gaming-light-gray h-auto p-2">
                              <Star size={18} />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" className="border-gaming-red text-gaming-red hover:bg-gaming-red hover:text-white">
                      Load More
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="recent" className="mt-0">
                  <div className="space-y-4">
                    {recentThreads.map((thread) => (
                      <Card key={thread.id} className="bg-gaming-gray border-none hover:bg-gray-800 transition duration-200">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <Avatar className="hidden sm:block">
                              <AvatarImage src={thread.author.avatar} alt={thread.author.name} />
                              <AvatarFallback>{thread.author.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-medium text-gaming-red">{thread.category}</span>
                                {thread.isPinned && (
                                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 text-xs">Pinned</Badge>
                                )}
                                {thread.isHot && (
                                  <Badge className="bg-gaming-red text-white text-xs">Hot</Badge>
                                )}
                              </div>
                              <h3 className="text-lg font-bold text-white mb-2">{thread.title}</h3>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gaming-light-gray">
                                <span>By <span className="text-gaming-red">{thread.author.name}</span></span>
                                <div className="flex items-center">
                                  <MessageSquare size={14} className="mr-1" />
                                  <span>{thread.replies} replies</span>
                                </div>
                                <div className="flex items-center">
                                  <Users size={14} className="mr-1" />
                                  <span>{thread.views} views</span>
                                </div>
                                <span>Last activity: {thread.lastActivity}</span>
                              </div>
                            </div>
                            <Button variant="ghost" className="text-gaming-light-gray h-auto p-2">
                              <Star size={18} />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" className="border-gaming-red text-gaming-red hover:bg-gaming-red hover:text-white">
                      Load More
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="my-threads" className="mt-0">
                  <div className="p-12 text-center bg-gaming-gray rounded-md">
                    <MessageSquare className="mx-auto text-gaming-red mb-4" size={48} />
                    <h3 className="text-xl font-bold text-white mb-2">Login to View Your Threads</h3>
                    <p className="text-gaming-light-gray mb-6">
                      You need to be logged in to view your threads and track your forum activity.
                    </p>
                    <Button className="bg-gaming-red hover:bg-red-700 text-white">
                      Sign In / Register
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Categories */}
              <Card className="bg-gaming-gray border-none mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {forumCategories.map((category) => (
                      <div 
                        key={category.name} 
                        className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-black/30 transition cursor-pointer"
                      >
                        <div className="flex items-center">
                          <category.icon className="mr-2 text-gaming-red" size={18} />
                          <span className="text-white">{category.name}</span>
                        </div>
                        <span className="text-gaming-light-gray text-sm">{category.threads}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Top Contributors */}
              <Card className="bg-gaming-gray border-none mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">Top Contributors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                        <AvatarFallback>GP</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-white">GamerPro99</div>
                        <div className="text-sm text-gaming-light-gray">2,456 posts</div>
                      </div>
                      <Trophy className="ml-auto text-yellow-400" size={18} />
                    </div>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
                        <AvatarFallback>LH</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-white">LoreHunter</div>
                        <div className="text-sm text-gaming-light-gray">1,892 posts</div>
                      </div>
                      <Trophy className="ml-auto text-gray-400" size={18} />
                    </div>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" />
                        <AvatarFallback>TW</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-white">TechWizard</div>
                        <div className="text-sm text-gaming-light-gray">1,654 posts</div>
                      </div>
                      <Trophy className="ml-auto text-amber-800" size={18} />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Forum Statistics */}
              <Card className="bg-gaming-gray border-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-lg">Forum Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gaming-light-gray">Total Threads:</span>
                      <span className="text-white font-medium">4,338</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gaming-light-gray">Total Posts:</span>
                      <span className="text-white font-medium">27,652</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gaming-light-gray">Members:</span>
                      <span className="text-white font-medium">12,845</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gaming-light-gray">Newest Member:</span>
                      <span className="text-gaming-red">GamingNewbie23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gaming-light-gray">Online Now:</span>
                      <span className="text-white font-medium">142</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Guidelines */}
      <section className="py-16 bg-gaming-black">
        <div className="container mx-auto px-4">
          <div className="bg-gaming-gray p-8 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Info className="text-gaming-red mr-2" size={24} />
              Community Guidelines
            </h2>
            <div className="text-gaming-light-gray space-y-3">
              <p>
                Our forum is dedicated to providing a friendly, respectful environment for all gamers. Please follow these guidelines:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Be respectful to other members</li>
                <li>No hate speech, discrimination, or harassment</li>
                <li>Keep discussions relevant to the thread topics</li>
                <li>No spamming or self-promotion without permission</li>
                <li>Respect intellectual property and copyright laws</li>
              </ul>
              <p className="mt-4">
                Failure to comply with these guidelines may result in warnings or account suspension. Thank you for helping maintain a positive community!
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ForumsPage;
