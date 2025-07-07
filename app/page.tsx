import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Search, Database, Globe, Users, Lock, ArrowRight, CheckCircle, MapPin, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Main Navigation */}
      <header className="bg-gray-100 border-b border-gray-300">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-700 hover:text-[#002366] font-medium">Home</Link>
              <Link href="#" className="text-gray-700 hover:text-[#002366] font-medium">Operations</Link>
              <Link href="#" className="text-gray-700 hover:text-[#002366] font-medium">Reports</Link>
              <Link href="#" className="text-gray-700 hover:text-[#002366] font-medium">Training</Link>
              <Link href="#" className="text-gray-700 hover:text-[#002366] font-medium">Resources</Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Last Updated: {new Date().toLocaleDateString('en-IN')}</span>
              <Button asChild className="bg-[#002366] hover:bg-[#001a4d] text-white text-xs px-4 py-1">
                <Link href="/dashboard">Login</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Alert Banner */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm font-medium">
            <Lock className="w-4 h-4 inline mr-2" />
            RESTRICTED ACCESS SYSTEM - Authorized Personnel Only | Report Security Incidents: cybercrime@gov.in
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#002366] mb-3">
              National Digital Investigation Support Centre (NDISC)
            </h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              The NDISC serves as the central hub for digital forensics and cybercrime investigation support 
              within the Indian Cybercrime Coordination Centre (I4C). This portal provides authorized law 
              enforcement agencies with access to specialized tools and resources for cybercrime investigation.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-semibold text-[#002366] flex items-center">
                  <Database className="w-4 h-4 mr-2" />
                  Case Management
                </CardTitle>
                <CardDescription className="text-xs text-gray-600">
                  Access active investigations and case files
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-semibold text-[#002366] flex items-center">
                  <Search className="w-4 h-4 mr-2" />
                  Digital Evidence
                </CardTitle>
                <CardDescription className="text-xs text-gray-600">
                  Submit and analyze digital evidence
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-semibold text-[#002366] flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Threat Analysis
                </CardTitle>
                <CardDescription className="text-xs text-gray-600">
                  View current threat intelligence reports
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="p-4">
                <CardTitle className="text-sm font-semibold text-[#002366] flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Inter-Agency Coord
                </CardTitle>
                <CardDescription className="text-xs text-gray-600">
                  Collaborate with partner agencies
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* System Status */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border border-gray-200">
              <CardHeader className="p-4 border-b bg-gray-50">
                <CardTitle className="text-lg font-semibold text-[#002366]">System Status</CardTitle>
              </CardHeader>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Database Connectivity</span>
                  <Badge className="bg-green-100 text-green-800 text-xs">Online</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Forensic Tools</span>
                  <Badge className="bg-green-100 text-green-800 text-xs">Operational</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Evidence Storage</span>
                  <Badge className="bg-yellow-100 text-yellow-800 text-xs">89% Capacity</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Network Security</span>
                  <Badge className="bg-green-100 text-green-800 text-xs">Protected</Badge>
                </div>
              </div>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader className="p-4 border-b bg-gray-50">
                <CardTitle className="text-lg font-semibold text-[#002366]">Recent Notices</CardTitle>
              </CardHeader>
              <div className="p-4 space-y-3">
                <div className="border-l-4 border-red-500 pl-3">
                  <p className="text-xs font-medium text-gray-800">Security Advisory</p>
                  <p className="text-xs text-gray-600">New phishing campaign targeting government domains. All personnel advised to verify email sources.</p>
                  <p className="text-xs text-gray-500 mt-1">Posted: {new Date(Date.now() - 86400000).toLocaleDateString('en-IN')}</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="text-xs font-medium text-gray-800">System Maintenance</p>
                  <p className="text-xs text-gray-600">Scheduled maintenance window: Saturday 0200-0400 hrs.</p>
                  <p className="text-xs text-gray-500 mt-1">Posted: {new Date(Date.now() - 172800000).toLocaleDateString('en-IN')}</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="text-xs font-medium text-gray-800">Training Update</p>
                  <p className="text-xs text-gray-600">Digital forensics certification program applications now open.</p>
                  <p className="text-xs text-gray-500 mt-1">Posted: {new Date(Date.now() - 259200000).toLocaleDateString('en-IN')}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="border border-gray-200 text-center p-4">
              <div className="text-2xl font-bold text-[#002366]">1,247</div>
              <div className="text-xs text-gray-600">Active Cases</div>
            </Card>
            <Card className="border border-gray-200 text-center p-4">
              <div className="text-2xl font-bold text-[#002366]">89</div>
              <div className="text-xs text-gray-600">Agencies Connected</div>
            </Card>
            <Card className="border border-gray-200 text-center p-4">
              <div className="text-2xl font-bold text-[#002366]">23.4TB</div>
              <div className="text-xs text-gray-600">Evidence Processed</div>
            </Card>
            <Card className="border border-gray-200 text-center p-4">
              <div className="text-2xl font-bold text-[#002366]">156</div>
              <div className="text-xs text-gray-600">Training Sessions</div>
            </Card>
          </div>

          {/* Important Links */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-[#002366] mb-4">Important Resources</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Legal Framework</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Information Technology Act, 2000</li>
                  <li>• Digital Personal Data Protection Act, 2023</li>
                  <li>• Cybersecurity Guidelines</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Standard Procedures</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Evidence Collection Protocol</li>
                  <li>• Chain of Custody Guidelines</li>
                  <li>• Inter-agency Coordination SOPs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Emergency Contacts</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Cyber Helpline: 1930</li>
                  <li>• CERT-In: cert-in@nic.in</li>
                  <li>• I4C Control Room: 24x7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002366] text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">Indian Cybercrime Coordination Centre (I4C)</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Ministry of Home Affairs, Government of India
              </p>
              <p className="text-blue-200 text-sm">
                Securing India's Digital Infrastructure
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><Link href="#" className="hover:text-white">Home</Link></li>
                <li><Link href="#" className="hover:text-white">About I4C</Link></li>
                <li><Link href="#" className="hover:text-white">Services</Link></li>
                <li><Link href="#" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Security Notice</h4>
              <div className="text-sm text-yellow-200 bg-red-900 p-3 rounded">
                <AlertTriangle className="w-4 h-4 inline mr-2" />
                This system is for authorized personnel only. Unauthorized access is prohibited.
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-6 pt-6 text-center text-blue-200 text-sm">
            <p>&copy; 2024 Ministry of Home Affairs, Government of India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 