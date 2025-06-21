import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Search, Database, Globe, Users, Lock, ArrowRight, CheckCircle, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Government Header */}
      <div className="bg-[#1a237e] text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="font-medium">भारत सरकार</span>
              <span className="text-blue-200">|</span>
              <span className="font-medium">GOVERNMENT OF INDIA</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">गृह मंत्रालय</span>
              <span className="text-blue-200">|</span>
              <span className="font-medium">MINISTRY OF HOME AFFAIRS</span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="w-8 h-8 border-2 border-white rounded flex items-center justify-center hover:bg-white hover:text-[#1a237e] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* I4C Header */}
      <div className="bg-white border-b-2 border-[#1a237e] py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left side - Government emblem and I4C logo */}
            <div className="flex items-center space-x-6">
              <div className="h-20 w-20 relative">
                <Image
                  src="/images/ministry-home-affairs-logo.svg"
                  alt="Government of India"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="h-20 w-32 relative">
                <Image
                  src="/images/i4c-logo.png"
                  alt="Indian Cybercrime Coordination Centre"
                  width={128}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Center - Main heading */}
            <div className="text-center flex-1 px-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-2">भारतीय साइबर अपराध समन्वय केंद्र</h1>
              <h2 className="text-xl md:text-2xl font-semibold text-[#1a237e]">
                Indian Cybercrime Coordination Centre (I4C)
              </h2>
              <p className="text-sm text-gray-600 mt-2">सुरक्षित साइबरस्पेस • Working Together With Vigour</p>
            </div>

            {/* Right side - Circular logos */}
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 relative">
                <Image
                  src="/images/cyberdost-logo.png"
                  alt="Cyber Dost"
                  width={64}
                  height={64}
                  className="object-contain rounded-full"
                />
              </div>
              <div className="h-16 w-16 relative">
                <Image
                  src="/images/azadi-logo.png"
                  alt="Azadi Ka Amrit Mahotsav"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-xl font-bold text-[#1a237e]">OSINT Portal</h1>
              <p className="text-xs text-gray-600">Intelligence Operations Center</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-700 hover:text-[#1a237e] transition-colors font-medium">
              Capabilities
            </Link>
            <Link href="#security" className="text-gray-700 hover:text-[#1a237e] transition-colors font-medium">
              Security
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-[#1a237e] transition-colors font-medium">
              About I4C
            </Link>
            <Button asChild className="bg-[#1a237e] hover:bg-[#0d1b5e] text-white">
              <Link href="/dashboard">Access Portal</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto text-center max-w-5xl">
          <Badge variant="outline" className="mb-6 bg-[#1a237e] text-white border-[#1a237e] px-4 py-2">
            <Lock className="w-4 h-4 mr-2" />
            Classified - Government Use Only
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-[#1a237e] mb-6 leading-tight">
            Advanced OSINT
            <span className="block text-[#1a237e]">Intelligence Platform</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Comprehensive Open Source Intelligence gathering and analysis platform designed for the Indian Cyber Crime
            Coordination Centre (I4C) to combat cybercrime and enhance national cybersecurity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-[#1a237e] hover:bg-[#0d1b5e] text-white px-8 py-4 text-lg">
              <Link href="/dashboard">
                Launch Dashboard <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white px-8 py-4 text-lg"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-6">Intelligence Capabilities</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Advanced tools and methodologies for effective open source intelligence gathering and cybercrime
              investigation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-100 hover:border-[#1a237e] hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-[#1a237e] rounded-xl flex items-center justify-center mb-4 mx-auto transition-colors">
                  <Search className="w-8 h-8 text-[#1a237e] group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-[#1a237e] text-xl">Multi-Source Search</CardTitle>
                <CardDescription className="text-gray-600">
                  Aggregate data from multiple open sources including social media, forums, and public databases for
                  comprehensive intelligence gathering
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#1a237e] hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-[#1a237e] rounded-xl flex items-center justify-center mb-4 mx-auto transition-colors">
                  <Database className="w-8 h-8 text-[#1a237e] group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-[#1a237e] text-xl">Data Analytics</CardTitle>
                <CardDescription className="text-gray-600">
                  Advanced analytics and pattern recognition for threat assessment and investigation support with
                  AI-powered insights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#1a237e] hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-[#1a237e] rounded-xl flex items-center justify-center mb-4 mx-auto transition-colors">
                  <Globe className="w-8 h-8 text-[#1a237e] group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-[#1a237e] text-xl">Geospatial Intelligence</CardTitle>
                <CardDescription className="text-gray-600">
                  Location-based intelligence gathering with mapping and geographical analysis tools for spatial threat
                  assessment
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#1a237e] hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-[#1a237e] rounded-xl flex items-center justify-center mb-4 mx-auto transition-colors">
                  <Users className="w-8 h-8 text-[#1a237e] group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-[#1a237e] text-xl">Social Network Analysis</CardTitle>
                <CardDescription className="text-gray-600">
                  Map relationships and connections between entities for comprehensive investigation and network
                  visualization
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#1a237e] hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-[#1a237e] rounded-xl flex items-center justify-center mb-4 mx-auto transition-colors">
                  <Shield className="w-8 h-8 text-[#1a237e] group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-[#1a237e] text-xl">Threat Intelligence</CardTitle>
                <CardDescription className="text-gray-600">
                  Real-time threat monitoring and intelligence feeds for proactive security measures and incident
                  response
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#1a237e] hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-50 group-hover:bg-[#1a237e] rounded-xl flex items-center justify-center mb-4 mx-auto transition-colors">
                  <Lock className="w-8 h-8 text-[#1a237e] group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-[#1a237e] text-xl">Secure Operations</CardTitle>
                <CardDescription className="text-gray-600">
                  End-to-end encryption and secure data handling compliant with government security standards and
                  protocols
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6 bg-white text-[#1a237e] border-[#1a237e] px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Security First
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-6">
                Government-Grade Security Standards
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Built with the highest security standards to protect sensitive intelligence operations and maintain
                operational security for government agencies and national cybersecurity initiatives.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#1a237e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a237e] text-lg mb-2">End-to-End Encryption</h3>
                    <p className="text-gray-700">
                      All data transmission and storage encrypted using AES-256 military-grade encryption standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#1a237e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a237e] text-lg mb-2">Multi-Factor Authentication</h3>
                    <p className="text-gray-700">
                      Advanced authentication with biometric and token-based access control systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#1a237e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a237e] text-lg mb-2">Complete Audit Trail</h3>
                    <p className="text-gray-700">
                      Comprehensive logging and monitoring of all system activities for accountability
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#1a237e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a237e] text-lg mb-2">Compliance Ready</h3>
                    <p className="text-gray-700">
                      Meets government security protocols and international data protection standards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#1a237e] rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 text-center">Security Metrics</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">256-bit</div>
                    <div className="text-blue-200">Encryption</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-blue-200">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">99.9%</div>
                    <div className="text-blue-200">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">ISO 27001</div>
                    <div className="text-blue-200">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-6">Developed for I4C Operations</h2>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            This OSINT platform has been specifically designed and developed to support the Indian Cyber Crime
            Coordination Centre (I4C) under the Ministry of Home Affairs in their mission to combat cybercrime and
            enhance national cybersecurity infrastructure across India.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-50 group-hover:bg-[#1a237e] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                <Shield className="w-10 h-10 text-[#1a237e] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a237e] mb-4">National Security</h3>
              <p className="text-gray-700">
                Supporting India's cybersecurity infrastructure and protecting national digital assets
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-50 group-hover:bg-[#1a237e] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                <Search className="w-10 h-10 text-[#1a237e] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a237e] mb-4">Crime Investigation</h3>
              <p className="text-gray-700">
                Advanced tools for cybercrime investigation and digital forensics analysis
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-50 group-hover:bg-[#1a237e] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                <Database className="w-10 h-10 text-[#1a237e] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a237e] mb-4">Intelligence Analysis</h3>
              <p className="text-gray-700">
                Comprehensive data analysis capabilities for threat assessment and prevention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a237e] text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#1a237e]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">OSINT Portal</h3>
                  <p className="text-blue-200">Ministry of Home Affairs - I4C</p>
                </div>
              </div>
              <p className="text-blue-100 max-w-md leading-relaxed">
                Advanced Open Source Intelligence platform for government operations and cybersecurity initiatives.
                Protecting India's digital infrastructure through comprehensive intelligence gathering.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-blue-100">
                <li>
                  <Link href="/dashboard" className="hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Training
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Contact Information</h4>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  I4C Headquarters
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Ministry of Home Affairs
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Government of India
                </li>
                <li className="text-red-300 font-medium flex items-center">
                  <Lock className="w-4 h-4 mr-2" />
                  Classified Access Only
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
            <p className="mb-2">&copy; 2024 Ministry of Home Affairs, Government of India. All rights reserved.</p>
            <p className="text-sm">
              This system is for authorized government personnel only. Unauthorized access is prohibited and will be
              prosecuted.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
