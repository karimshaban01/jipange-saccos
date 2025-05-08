import { useState } from 'react'
import './App.css'
import { ChevronDown, ChevronUp, CheckCircle, Shield, Calendar, Users, Database, Send, BarChart2, Smartphone } from 'lucide-react';

export default function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const features = [
    {
      title: "Member Registration",
      description: "Easily register members with basic information including name, phone, group role, and start date.",
      icon: <Users className="h-10 w-10 text-green-600" />
    },
    {
      title: "Savings Tracking",
      description: "Record regular contributions, penalties, and missed payments with complete transparency.",
      icon: <Database className="h-10 w-10 text-green-600" />
    },
    {
      title: "Loan Management",
      description: "Issue loans, track repayments, and automatically calculate interest with minimal effort.",
      icon: <BarChart2 className="h-10 w-10 text-green-600" />
    },
    {
      title: "USSD/SMS Interface",
      description: "Access your savings information without internet or smartphones via simple SMS commands.",
      icon: <Smartphone className="h-10 w-10 text-green-600" />
    },
    {
      title: "Balance Reports",
      description: "View individual and group-level balances with comprehensive reporting tools.",
      icon: <Send className="h-10 w-10 text-green-600" />
    },
    {
      title: "Offline Support",
      description: "Continue working even without internet using our offline-capable mobile application.",
      icon: <Shield className="h-10 w-10 text-green-600" />
    }
  ];

  const faqs = [
    {
      question: "How does Jipange Sacco work?",
      answer: "Jipange Sacco is a digital platform that helps community savings groups track contributions, manage loans, calculate interest, and maintain member records. It works through both web/mobile interfaces and USSD/SMS for those without smartphones."
    },
    {
      question: "Do members need smartphones to use the system?",
      answer: "No! While group administrators benefit from the full web or mobile app, regular members can access their information and perform transactions using basic feature phones through our USSD and SMS interfaces."
    },
    {
      question: "How does the offline functionality work?",
      answer: "Our mobile application can work without an internet connection, allowing field officers to record transactions during community meetings. Once internet connectivity is available, the data automatically syncs with the central database."
    },
    {
      question: "Is the system secure?",
      answer: "Yes! All transactions are PIN-protected, data is encrypted, and we maintain comprehensive audit logs to ensure transparency and accountability."
    },
    {
      question: "What languages does the system support?",
      answer: "Currently, Jipange Sacco supports both Swahili and English, making it accessible to a wide range of users across East Africa."
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="bg-green-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Jipange Sacco</h1>
              <p className="text-2xl mb-6">Digitizing community savings for a brighter financial future</p>
              <p className="text-lg mb-8">Simplify your SACCO and village savings management with our all-in-one platform designed for rural communities.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100">Get Started</button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-600">Contact Us</button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="bg-green-100 rounded-lg p-4 mb-4">
                  <h3 className="text-green-800 font-semibold text-lg mb-2">Jipange SACCO Group</h3>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Total Savings</span>
                    <span className="font-semibold">4,250,000 TZS</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Members</span>
                    <span className="font-semibold">43</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active Loans</span>
                    <span className="font-semibold">12</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Weekly contribution recorded</span>
                    </div>
                    <span className="font-semibold">15,000 TZS</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Loan repayment received</span>
                    </div>
                    <span className="font-semibold">50,000 TZS</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      <span>Next meeting</span>
                    </div>
                    <span className="font-semibold">May 15, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to manage your community savings group effectively and transparently.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A simple and inclusive platform for all your savings group members.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Register Your Group</h3>
              <p className="text-gray-600">Set up your savings group with member information and contribution schedules.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Record Transactions</h3>
              <p className="text-gray-600">Easily track savings, loans, and repayments through web, mobile, or SMS.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Generate Reports</h3>
              <p className="text-gray-600">Access transparent records and financial reports for your entire group.</p>
            </div>
          </div>
        </div>
      </div>

      {/* USSD Demo Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Access Anywhere with USSD</h2>
              <p className="text-lg text-gray-600 mb-6">No smartphone? No problem! Our USSD interface works on any mobile phone.</p>
              <div className="bg-gray-800 text-green-400 font-mono p-4 rounded-lg mb-6">
                <p className="mb-2">Dial *150*00# to access your Jipange account</p>
                <p className="mb-2">1. Check Balance</p>
                <p className="mb-2">2. View Loan Status</p>
                <p className="mb-2">3. Submit Savings</p>
                <p>4. Request Loan</p>
              </div>
              <p className="text-gray-600">Simple SMS commands also available. Example: Send "SAV 5000" to submit 5,000 TZS savings.</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-black rounded-3xl w-64 p-4 shadow-lg">
                <div className="bg-gray-200 rounded-2xl p-3">
                  <div className="bg-white rounded-lg p-3 text-sm">
                    <p className="text-center font-bold mb-2">JIPANGE SACCO</p>
                    <p className="border-t border-gray-200 pt-2 mb-2">Welcome Anna!</p>
                    <p className="mb-2">1. Balance: 120,000 TZS</p>
                    <p className="mb-2">2. Loans: 0 TZS</p>
                    <p className="mb-2">3. Group: Umoja Group</p>
                    <p className="mb-2">4. Next Meeting: 15/05/25</p>
                    <p className="text-center text-gray-600 text-xs">Reply with number</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((key) => (
                    <div key={key} className="bg-gray-700 text-white rounded-full h-8 w-8 flex items-center justify-center text-sm">
                      {key}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear from community savings groups already using Jipange Sacco.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">"Jipange has transformed how we manage our village savings group. No more paper records getting lost or calculation errors. Everyone trusts the system!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">MN</span>
                </div>
                <div>
                  <h4 className="font-semibold">Maria Nkwabi</h4>
                  <p className="text-sm text-gray-500">Treasurer, Umoja VSLA</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">"The SMS feature is amazing! I can check my balance and loan status even when I'm away at the market without having to wait for the next meeting."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">JM</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Malimbe</h4>
                  <p className="text-sm text-gray-500">Member, Mwangaza SACCO</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">"As a field officer managing multiple groups, the offline feature saves me so much time. I can record all transactions during meetings and sync later."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">GL</span>
                </div>
                <div>
                  <h4 className="font-semibold">Grace Laizer</h4>
                  <p className="text-sm text-gray-500">Field Officer, CARE Tanzania</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions about Jipange Sacco.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-lg">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-4 text-left bg-white rounded-lg hover:bg-gray-50"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openFaqIndex === index ? 
                    <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  }
                </button>
                {openFaqIndex === index && (
                  <div className="p-4 bg-gray-50 rounded-b-lg">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your savings group?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Jipange Sacco helps you manage your community savings with transparency, efficiency, and convenience.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100">Get Started Now</button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-green-600">Schedule a Demo</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Jipange Sacco</h3>
              <p className="text-gray-400">Empowering community savings groups across East Africa through simple digital tools.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Member Registration</li>
                <li>Savings Tracking</li>
                <li>Loan Management</li>
                <li>USSD/SMS Interface</li>
                <li>Offline Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>User Guide</li>
                <li>API Documentation</li>
                <li>SMS Commands</li>
                <li>Tutorials</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@jipangesacco.com</li>
                <li>+255 755 123 456</li>
                <li>Dar es Salaam, Tanzania</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-green-400">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-green-400">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-green-400">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Jipange Sacco. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}