"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import {
  Search,
  Shield,
  Database,
  Globe,
  Users,
  Activity,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Clock,
  Filter,
  Download,
  Settings,
  Bell,
  User,
  LogOut,
  Menu,
  X,
  Mail,
  Phone,
  Wifi,
  Eye,
  Building,
  UserCheck,
  FileText,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Government Header */}
      <div className="bg-[#1e3a8a] text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span>भारत सरकार | GOVERNMENT OF INDIA</span>
            <span className="text-gray-300">|</span>
            <span>गृह मंत्रालय | MINISTRY OF HOME AFFAIRS</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-white hover:text-gray-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11a1 1 0 001 1h3v-6h6v6h3a1 1 0 001-1V7l-7-5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* I4C Header */}
      <div className="bg-white border-b-2 border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* MHA Logo */}
              <div className="h-12 w-12 relative">
                <Image
                  src="/images/ministry-home-affairs-logo.svg"
                  alt="Ministry of Home Affairs"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* I4C Logo */}
              <div className="h-12 w-32 relative">
                <Image
                  src="/images/i4c-logo.png"
                  alt="Indian Cybercrime Coordination Centre"
                  width={128}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="text-center flex-1">
              <h1 className="text-lg md:text-xl font-bold text-blue-800">भारतीय साइबर अपराध समन्वय केंद्र</h1>
              <h2 className="text-md md:text-lg font-semibold text-gray-700">
                Indian Cybercrime Coordination Centre (I4C)
              </h2>
              <p className="text-xs text-gray-600">सुरक्षित साइबरस्पेस • Working Together With Vigour</p>
            </div>

            {/* Right side logos */}
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 relative">
                <Image
                  src="/images/azadi-logo.png"
                  alt="Azadi Ka Amrit Mahotsav"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="h-12 w-12 relative">
                <Image
                  src="/images/cyberdost-logo.png"
                  alt="Cyber Dost"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>

              <div className="flex items-center space-x-3 ml-4 lg:ml-0">
                <div>
                  <h1 className="text-lg font-semibold text-[#1a237e]">OSINT Dashboard</h1>
                  <p className="text-xs text-gray-500 hidden sm:block">Operations Center</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  System Online
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Secure Connection
                </Badge>
              </div>

              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Officer Dashboard</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Secure Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out lg:transition-none`}
        >
          <div className="flex flex-col h-full pt-5 pb-4 overflow-y-auto">
            {/* Sidebar Navigation */}
            <nav className="mt-5 flex-1 px-2 space-y-1">
              <div className="space-y-1">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Core OSINT Tools</h3>

                <Button variant="ghost" className="w-full justify-start bg-blue-50 text-[#1a237e]">
                  <Search className="mr-3 h-5 w-5" />
                  OSINT Dashboard
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Globe className="mr-3 h-5 w-5" />
                  Website Investigation
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Database className="mr-3 h-5 w-5" />
                  Domain Scan
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="mr-3 h-5 w-5" />
                  Vehicle Search
                </Button>
              </div>

              <div className="pt-6 space-y-1">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Digital Investigation
                </h3>

                <Button variant="ghost" className="w-full justify-start">
                  <Users className="mr-3 h-5 w-5" />
                  Social Media Analysis
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Mail className="mr-3 h-5 w-5" />
                  Email Investigation
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Phone className="mr-3 h-5 w-5" />
                  Phone Number Lookup
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Wifi className="mr-3 h-5 w-5" />
                  IP Address Tracking
                </Button>
              </div>

              <div className="pt-6 space-y-1">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Advanced Analysis</h3>

                <Button variant="ghost" className="w-full justify-start">
                  <Eye className="mr-3 h-5 w-5" />
                  Image Investigation
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Building className="mr-3 h-5 w-5" />
                  Company Investigation
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <UserCheck className="mr-3 h-5 w-5" />
                  Person Search
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Shield className="mr-3 h-5 w-5" />
                  Dark Web Monitoring
                </Button>
              </div>

              <div className="pt-6 space-y-1">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Reports & Intelligence
                </h3>

                <Button variant="ghost" className="w-full justify-start">
                  <AlertTriangle className="mr-3 h-5 w-5" />
                  Threat Intelligence
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="mr-3 h-5 w-5" />
                  Report Generation
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <TrendingUp className="mr-3 h-5 w-5" />
                  Data Analytics
                </Button>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Intelligence Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500">Real-time OSINT operations and threat monitoring</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Investigations</CardTitle>
                    <Search className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+3 from yesterday</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Threat Alerts</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-600">7</div>
                    <p className="text-xs text-muted-foreground">High priority</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Data Sources</CardTitle>
                    <Database className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">156</div>
                    <p className="text-xs text-muted-foreground">Online & active</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">System Status</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                  </CardContent>
                </Card>
              </div>

              {/* Main Dashboard Content */}
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="search">Search</TabsTrigger>
                  <TabsTrigger value="analysis">Analysis</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Activities */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Activities</CardTitle>
                        <CardDescription>Latest intelligence operations and updates</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#1a237e] rounded-full mt-2"></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">New threat intelligence received</p>
                              <p className="text-xs text-gray-500">Cybercrime unit - 2 hours ago</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">Investigation case closed</p>
                              <p className="text-xs text-gray-500">Financial crimes - 4 hours ago</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">High priority alert triggered</p>
                              <p className="text-xs text-gray-500">Social media monitoring - 6 hours ago</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Threat Map */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Threat Intelligence Map</CardTitle>
                        <CardDescription>Geographic distribution of current threats</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-500">Interactive threat map</p>
                            <p className="text-xs text-gray-400">Real-time threat locations</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Active Investigations Table */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Active Investigations</CardTitle>
                      <CardDescription>Current ongoing intelligence operations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                              HIGH
                            </Badge>
                            <div>
                              <p className="font-medium">Cybercrime Investigation #2024-001</p>
                              <p className="text-sm text-gray-500">Financial fraud network analysis</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-500">Active for 5 days</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                              MEDIUM
                            </Badge>
                            <div>
                              <p className="font-medium">Social Media Monitoring #2024-002</p>
                              <p className="text-sm text-gray-500">Extremist content tracking</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-500">Active for 12 days</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                              LOW
                            </Badge>
                            <div>
                              <p className="font-medium">Data Breach Investigation #2024-003</p>
                              <p className="text-sm text-gray-500">Corporate security incident</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-500">Active for 2 days</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="search" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Advanced OSINT Search</CardTitle>
                      <CardDescription>Multi-source intelligence gathering and analysis</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex space-x-2">
                        <Input placeholder="Enter search query, email, phone, or identifier..." className="flex-1" />
                        <Button>
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                        <Button variant="outline">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card className="p-4">
                          <div className="text-center">
                            <Globe className="h-8 w-8 text-[#1a237e] mx-auto mb-2" />
                            <p className="text-sm font-medium">Web Search</p>
                            <p className="text-xs text-gray-500">Public websites</p>
                          </div>
                        </Card>

                        <Card className="p-4">
                          <div className="text-center">
                            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                            <p className="text-sm font-medium">Social Media</p>
                            <p className="text-xs text-gray-500">Platform analysis</p>
                          </div>
                        </Card>

                        <Card className="p-4">
                          <div className="text-center">
                            <Database className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                            <p className="text-sm font-medium">Databases</p>
                            <p className="text-xs text-gray-500">Public records</p>
                          </div>
                        </Card>

                        <Card className="p-4">
                          <div className="text-center">
                            <MapPin className="h-8 w-8 text-red-600 mx-auto mb-2" />
                            <p className="text-sm font-medium">Geolocation</p>
                            <p className="text-xs text-gray-500">Location data</p>
                          </div>
                        </Card>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <p className="text-center text-gray-500">
                          Enter a search query to begin intelligence gathering
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="analysis" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Intelligence Analysis Tools</CardTitle>
                      <CardDescription>Advanced analytics and pattern recognition</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Network Analysis</h3>
                          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <Users className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-500">Social network graph</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Timeline Analysis</h3>
                          <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <Clock className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-500">Event timeline</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reports" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Intelligence Reports</CardTitle>
                          <CardDescription>Generated analysis and investigation reports</CardDescription>
                        </div>
                        <Button>
                          <Download className="h-4 w-4 mr-2" />
                          Export
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">Cybercrime Threat Assessment Report</p>
                            <p className="text-sm text-gray-500">Generated on Dec 6, 2024</p>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Complete
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">Social Media Intelligence Summary</p>
                            <p className="text-sm text-gray-500">Generated on Dec 5, 2024</p>
                          </div>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Processing
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">Financial Crime Network Analysis</p>
                            <p className="text-sm text-gray-500">Generated on Dec 4, 2024</p>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Complete
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
