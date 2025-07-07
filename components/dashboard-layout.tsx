"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
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
      {/* Top Government Bar */}
      <div className="top-gov-bar">
        <div className="container-fluid">
          <div className="top-bar-content">
            <div className="gov-text-group">
              <div className="hindi-text">भारत सरकार</div>
              <div className="english-text">GOVERNMENT OF INDIA</div>
            </div>
            <div className="vertical-separator"></div>
            <div className="ministry-text-group">
              <div className="hindi-text">गृह मंत्रालय</div>
              <div className="english-text">MINISTRY OF HOME AFFAIRS</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Site Header */}
      <header className="site-header">
        <div className="container-fluid">
          <div className="header-content">
            <div className="logo-container logo-left">
              <Image src="/images/ministry-home-affairs-logo.svg" alt="MHA Logo" className="mha-logo" width={120} height={120} />
              <Image src="/images/i4c-logo.png" alt="I4C Logo" className="i4c-logo" width={120} height={120} />
            </div>
            <div className="title-container">
              <div className="title-hindi">भारतीय साइबर अपराध समन्वय केंद्र</div>
              <Link href="/">Indian Cybercrime Coordination Centre (I4C)</Link>
            </div>
            <div className="logo-container logo-right">
              <Image src="/images/cyberdost-logo.png" alt="Cyber Dost Logo" className="cyberdost-logo" width={100} height={100} />
              <Image src="/images/azadi-logo.png" alt="Azadi Ka Amrit Mahotsav Logo" className="azadi-logo" width={90} height={90} />
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
            {/* Mobile Menu Button */}
            <div className="lg:hidden px-2 mb-4">
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)} className="w-full justify-start">
                <X className="h-5 w-5 mr-2" />
                Close Menu
              </Button>
            </div>
            {/* Sidebar Navigation */}
            <nav className="mt-5 flex-1 px-2 space-y-1">
              <div className="space-y-1">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Investigation Tools</h3>

                <Button variant="ghost" className="w-full justify-start bg-blue-50 text-[#002366]">
                  <Search className="mr-3 h-5 w-5" />
                  Dashboard
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="mr-3 h-5 w-5" />
                  Case Files
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Database className="mr-3 h-5 w-5" />
                  Evidence Locker
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Users className="mr-3 h-5 w-5" />
                  Suspect Database
                </Button>
              </div>

              <div className="pt-6 space-y-1">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Analysis & Search
                </h3>

                <Button variant="ghost" className="w-full justify-start">
                  <Globe className="mr-3 h-5 w-5" />
                  IP/Domain Lookup
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Phone className="mr-3 h-5 w-5" />
                  Mobile Number Trace
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Mail className="mr-3 h-5 w-5" />
                  Email Headers
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="mr-3 h-5 w-5" />
                  Location Services
                </Button>
              </div>

              <div className="pt-6 space-y-1">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Digital Forensics</h3>

                <Button variant="ghost" className="w-full justify-start">
                  <Eye className="mr-3 h-5 w-5" />
                  Image Analysis
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Shield className="mr-3 h-5 w-5" />
                  Hash Verification
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Activity className="mr-3 h-5 w-5" />
                  Network Logs
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Building className="mr-3 h-5 w-5" />
                  Corporate Records
                </Button>
              </div>

              <div className="pt-6 space-y-1">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Reports
                </h3>

                <Button variant="ghost" className="w-full justify-start">
                  <AlertTriangle className="mr-3 h-5 w-5" />
                  Incident Reports
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <TrendingUp className="mr-3 h-5 w-5" />
                  Case Analytics
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                  <Download className="mr-3 h-5 w-5" />
                  Export Data
                </Button>
              </div>
            </nav>
          </div>
        </aside>

        {/* Mobile Menu Button */}
        <Button 
          variant="outline" 
          size="sm" 
          className={`lg:hidden fixed top-32 left-4 z-50 bg-white shadow-md ${sidebarOpen ? 'hidden' : 'block'}`}
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Page Header */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">Investigation Dashboard</h1>
                    <p className="mt-1 text-sm text-gray-600">Mumbai Cybercrime Branch - Shift: Morning (06:00-14:00)</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Current Date & Time</div>
                    <div className="text-lg font-semibold text-[#002366]">{new Date().toLocaleDateString('en-IN')} | {new Date().toLocaleTimeString('en-IN')}</div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Cases - This Month</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">67</div>
                    <p className="text-xs text-muted-foreground">12 pending review</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Priority Alerts</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">4</div>
                    <p className="text-xs text-muted-foreground">Requires immediate action</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Evidence Items</CardTitle>
                    <Database className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,341</div>
                    <p className="text-xs text-muted-foreground">89 awaiting analysis</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">System Status</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">Online</div>
                    <p className="text-xs text-muted-foreground">All systems operational</p>
                  </CardContent>
                </Card>
              </div>

              {/* Main Dashboard Content */}
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="cases">Active Cases</TabsTrigger>
                  <TabsTrigger value="evidence">Evidence</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Activities */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Case Activities</CardTitle>
                        <CardDescription>Latest updates from active investigations</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">FIR #2024/CR/1247 - Evidence uploaded</p>
                              <p className="text-xs text-gray-500">Digital wallet fraud case - 45 minutes ago</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">FIR #2024/CR/1203 - Chargesheet filed</p>
                              <p className="text-xs text-gray-500">Online romance scam - 2 hours ago</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">FIR #2024/CR/1089 - Suspect arrested</p>
                              <p className="text-xs text-gray-500">Credit card cloning - 3 hours ago</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">FIR #2024/CR/1256 - New complaint registered</p>
                              <p className="text-xs text-gray-500">Job portal fraud - 4 hours ago</p>
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

                <TabsContent value="cases" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Active Case Management</CardTitle>
                      <CardDescription>Current investigations and case status tracking</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                              URGENT
                            </Badge>
                            <div>
                              <p className="font-medium">FIR #2024/CR/1247 - Digital Wallet Fraud</p>
                              <p className="text-sm text-gray-500">Complainant: Rajesh Kumar | Amount: ₹85,000</p>
                              <p className="text-xs text-gray-400">Registered: 15/12/2024 | Officer: SI Verma</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">Court Date</div>
                            <div className="text-xs text-red-600">18/12/2024</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                              HIGH
                            </Badge>
                            <div>
                              <p className="font-medium">FIR #2024/CR/1234 - Credit Card Cloning</p>
                              <p className="text-sm text-gray-500">Complainant: Priya Sharma | Amount: ₹1,25,000</p>
                              <p className="text-xs text-gray-400">Registered: 12/12/2024 | Officer: ASI Patel</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">Status</div>
                            <div className="text-xs text-orange-600">Investigation</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                              MEDIUM
                            </Badge>
                            <div>
                              <p className="font-medium">FIR #2024/CR/1198 - Online Job Fraud</p>
                              <p className="text-sm text-gray-500">Complainant: Amit Singh | Amount: ₹15,000</p>
                              <p className="text-xs text-gray-400">Registered: 08/12/2024 | Officer: HC Gupta</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">Status</div>
                            <div className="text-xs text-yellow-600">Statement Pending</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              COMPLETED
                            </Badge>
                            <div>
                              <p className="font-medium">FIR #2024/CR/1089 - Romance Scam</p>
                              <p className="text-sm text-gray-500">Complainant: Sunita Devi | Amount: ₹2,50,000</p>
                              <p className="text-xs text-gray-400">Registered: 01/12/2024 | Officer: SI Rao</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">Status</div>
                            <div className="text-xs text-green-600">Chargesheet Filed</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="evidence" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Digital Evidence Locker</CardTitle>
                      <CardDescription>Secure storage and analysis of digital evidence</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Phone className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Mobile Device Dump - Samsung Galaxy S21</p>
                              <p className="text-sm text-gray-500">FIR #2024/CR/1247 | Size: 128GB | Hash: 4A7B2C...</p>
                              <p className="text-xs text-gray-400">Collected: 14/12/2024 | Officer: SI Verma</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800">Verified</Badge>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                              <Database className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                              <p className="font-medium">Banking Transaction Records</p>
                              <p className="text-sm text-gray-500">FIR #2024/CR/1234 | 247 transactions | Excel format</p>
                              <p className="text-xs text-gray-400">Received: 13/12/2024 | Source: Bank of India</p>
                            </div>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                              <Mail className="h-5 w-5 text-red-600" />
                            </div>
                            <div>
                              <p className="font-medium">Email Headers & Attachments</p>
                              <p className="text-sm text-gray-500">FIR #2024/CR/1198 | 15 emails | PST format</p>
                              <p className="text-xs text-gray-400">Submitted: 10/12/2024 | Source: Gmail Support</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800">Analyzed</Badge>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                              <Globe className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="font-medium">Website Screenshots & WHOIS Data</p>
                              <p className="text-sm text-gray-500">FIR #2024/CR/1089 | fraudjobs.net | 12 screenshots</p>
                              <p className="text-xs text-gray-400">Archived: 05/12/2024 | Method: Internet Archive</p>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800">Preserved</Badge>
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
                          <CardTitle>Investigation Reports</CardTitle>
                          <CardDescription>Case reports and forensic analysis documents</CardDescription>
                        </div>
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Generate Report
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium">Forensic Analysis Report - FIR #2024/CR/1247</p>
                              <p className="text-sm text-gray-500">Digital wallet fraud investigation</p>
                              <p className="text-xs text-gray-400">Generated: 16/12/2024 | Pages: 47</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Ready
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-orange-600" />
                            <div>
                              <p className="font-medium">Chargesheet - FIR #2024/CR/1089</p>
                              <p className="text-sm text-gray-500">Romance scam case prosecution</p>
                              <p className="text-xs text-gray-400">Filed: 10/12/2024 | Court: MM Court, Mumbai</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Filed
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-yellow-600" />
                            <div>
                              <p className="font-medium">Call Data Analysis - FIR #2024/CR/1234</p>
                              <p className="text-sm text-gray-500">Credit card cloning network mapping</p>
                              <p className="text-xs text-gray-400">In Progress: 15/12/2024 | ETA: 2 days</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            Processing
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-purple-600" />
                            <div>
                              <p className="font-medium">Weekly Crime Pattern Analysis</p>
                              <p className="text-sm text-gray-500">Cybercrime trends and modus operandi</p>
                              <p className="text-xs text-gray-400">Period: 09-15 Dec 2024 | Distribution: I4C HQ</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Sent
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
