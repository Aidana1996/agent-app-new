import React, { useState } from 'react';
import { 
  Home, 
  Send, 
  Receipt, 
  UserCheck, 
  DollarSign, 
  Bell, 
  Settings, 
  Search,
  Plus,
  Eye,
  CheckCircle,
  AlertCircle,
  Clock,
  Camera,
  Scan,
  Phone,
  MapPin,
  CreditCard,
  FileText,
  Users,
  TrendingUp,
  BookOpen,
  Share2,
  Upload,
  Lock,
  Globe,
  Target,
  Calendar,
  Edit,
  AlertTriangle,
  QrCode,
  Mail,
  User,
  Fingerprint,
  ChevronRight,
  Filter,
  Download
} from 'lucide-react';

const AgentApp = () => {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [activeTab, setActiveTab] = useState('home');
  const [notifications, setNotifications] = useState(5);
  const [showBiometric, setShowBiometric] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showOTPFlow, setShowOTPFlow] = useState(false);

  // Login Screen Component
  const LoginScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 p-6">
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="text-white" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">AgentPay</h1>
          <p className="text-gray-600">Secure Agent Portal</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Agent ID</label>
            <input 
              type="text" 
              placeholder="Enter your Agent ID"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">PIN</label>
            <input 
              type="password" 
              placeholder="Enter 6-digit PIN"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <button 
            onClick={() => setShowBiometric(true)}
            className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg font-medium flex items-center justify-center"
          >
            <Fingerprint className="mr-2" size={20} />
            Use Biometric
          </button>

          <button 
            onClick={() => setCurrentScreen('main')}
            className="w-full p-3 bg-blue-600 text-white rounded-lg font-medium"
          >
            Sign In
          </button>
        </div>

        <div className="text-center mt-6">
          <button className="text-sm text-blue-600">Forgot PIN?</button>
        </div>
      </div>

      {showBiometric && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <div className="text-center">
              <Fingerprint className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-lg font-bold mb-2">Biometric Authentication</h3>
              <p className="text-gray-600 mb-4">Use your fingerprint or face ID to sign in</p>
              <div className="space-y-3">
                <button 
                  onClick={() => {
                    setShowBiometric(false);
                    setCurrentScreen('main');
                  }}
                  className="w-full p-3 bg-blue-600 text-white rounded-lg"
                >
                  Authenticate
                </button>
                <button 
                  onClick={() => setShowBiometric(false)}
                  className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Home Screen Component
  const HomeScreen = () => (
    <div className="space-y-6">
      {/* Balance Overview */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-blue-100">Available Balance</p>
            <h2 className="text-3xl font-bold">$8,450.00</h2>
          </div>
          <button className="p-2 bg-white bg-opacity-20 rounded-lg">
            <QrCode className="text-white" size={24} />
          </button>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-blue-100">Float Limit: $10,000</span>
          <span className="text-blue-100">85% Used</span>
        </div>
      </div>

      {/* Exchange Rates Card */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 flex items-center">
            <TrendingUp className="mr-2 text-green-600" size={20} />
            Today's Rates
          </h3>
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="mr-1" size={12} />
            Updated 2 min ago
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="w-6 h-4 bg-blue-500 rounded-sm mr-2"></div>
              <span className="text-sm font-medium">USD → MXN</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold">18.45</div>
              <div className="text-xs text-green-600 flex items-center">
                ↑ 0.02 <span className="ml-1">(+0.1%)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="w-6 h-4 bg-orange-500 rounded-sm mr-2"></div>
              <span className="text-sm font-medium">USD → INR</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold">83.12</div>
              <div className="text-xs text-red-600 flex items-center">
                ↓ 0.15 <span className="ml-1">(-0.2%)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="w-6 h-4 bg-red-500 rounded-sm mr-2"></div>
              <span className="text-sm font-medium">USD → PHP</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold">55.67</div>
              <div className="text-xs text-green-600 flex items-center">
                ↑ 0.08 <span className="ml-1">(+0.1%)</span>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-3 p-2 text-blue-600 text-sm font-medium hover:bg-blue-50 rounded-lg">
          View All 12 Currencies →
        </button>
      </div>

      {/* Today's Earnings & Commission */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-xl text-white">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-white flex items-center">
            <DollarSign className="mr-2" size={20} />
            Today's Commission
          </h3>
          <span className="text-green-100 text-sm">+12.5% vs yesterday</span>
        </div>
        <div className="mb-3">
          <div className="text-3xl font-bold">$48.50</div>
          <div className="text-green-100 text-sm">Earned from 24 transactions</div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-3 border-t border-green-400">
          <div className="text-center">
            <div className="text-lg font-bold">$1,850</div>
            <div className="text-xs text-green-100">Volume</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">2.6%</div>
            <div className="text-xs text-green-100">Avg Rate</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">$186</div>
            <div className="text-xs text-green-100">This Week</div>
          </div>
        </div>
        <div className="mt-3 p-2 bg-green-400 bg-opacity-30 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm">Daily Goal Progress</span>
            <span className="text-sm font-medium">$48.50 / $60.00</span>
          </div>
          <div className="w-full bg-green-300 rounded-full h-2 mt-1">
            <div className="bg-white h-2 rounded-full" style={{width: '81%'}}></div>
          </div>
        </div>
      </div>

      {/* Attention Alerts */}
      <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl">
        <div className="flex items-center mb-2">
          <AlertTriangle className="text-orange-600 mr-2" size={20} />
          <h3 className="font-bold text-orange-800">Attention Required</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-orange-700">2 incomplete transactions</span>
            <ChevronRight className="text-orange-600" size={16} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-orange-700">Daily reconciliation pending</span>
            <ChevronRight className="text-orange-600" size={16} />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setCurrentScreen('customer-search')}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-left"
        >
          <Search className="text-blue-600 mb-2" size={24} />
          <div className="font-medium text-gray-900">Find Customer</div>
          <div className="text-sm text-gray-600">Search & verify</div>
        </button>
        <button 
          onClick={() => setActiveTab('rates')}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-left"
        >
          <TrendingUp className="text-green-600 mb-2" size={24} />
          <div className="font-medium text-gray-900">Live Rates</div>
          <div className="text-sm text-gray-600">18.45 MXN/USD</div>
        </button>
        <button 
          onClick={() => setCurrentScreen('deposit')}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-left"
        >
          <Upload className="text-purple-600 mb-2" size={24} />
          <div className="font-medium text-gray-900">Submit Deposit</div>
          <div className="text-sm text-gray-600">Upload check</div>
        </button>
        <button 
          onClick={() => setCurrentScreen('qr-scanner')}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-left"
        >
          <Scan className="text-orange-600 mb-2" size={24} />
          <div className="font-medium text-gray-900">Scan QR</div>
          <div className="text-sm text-gray-600">Quick payment</div>
        </button>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-900">Recent Activity</h3>
          <button 
            onClick={() => setActiveTab('transactions')}
            className="text-sm text-blue-600"
          >
            View All
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <Send className="text-green-600" size={14} />
              </div>
              <div>
                <div className="font-medium text-sm">Maria Rodriguez</div>
                <div className="text-xs text-gray-500">Send Money • 10:30 AM</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-sm">$750.00</div>
              <div className="text-xs text-green-600">Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Customer Search Screen
  const CustomerSearchScreen = () => (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <button 
          onClick={() => setCurrentScreen('main')}
          className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
        >
          ←
        </button>
        <h1 className="text-xl font-bold">Find Customer</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Method</label>
            <div className="grid grid-cols-3 gap-2">
              <button className="p-2 bg-blue-50 border-2 border-blue-600 text-blue-600 rounded-lg text-sm font-medium">
                Phone
              </button>
              <button className="p-2 bg-gray-50 border-2 border-gray-200 text-gray-600 rounded-lg text-sm font-medium">
                Card #
              </button>
              <button className="p-2 bg-gray-50 border-2 border-gray-200 text-gray-600 rounded-lg text-sm font-medium">
                ID + DOB
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input 
              type="tel" 
              placeholder="Enter phone number"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex space-x-2">
            <button 
              onClick={() => {
                setSelectedCustomer({
                  name: 'Maria Rodriguez',
                  phone: '+1-555-0123',
                  id: 'ID12345678',
                  status: 'verified'
                });
                setCurrentScreen('customer-details');
              }}
              className="flex-1 p-3 bg-blue-600 text-white rounded-lg font-medium"
            >
              Search
            </button>
            <button className="p-3 bg-gray-100 text-gray-700 rounded-lg">
              <Scan size={20} />
            </button>
          </div>
        </div>

        {/* Recent Customers */}
        <div className="mt-6">
          <h3 className="font-medium text-gray-900 mb-3">Recent Customers</h3>
          <div className="space-y-2">
            <button 
              onClick={() => {
                setSelectedCustomer({
                  name: 'John Smith',
                  phone: '+1-555-0124',
                  id: 'ID87654321',
                  status: 'pending'
                });
                setCurrentScreen('customer-details');
              }}
              className="w-full p-3 bg-gray-50 rounded-lg text-left flex items-center justify-between hover:bg-gray-100"
            >
              <div>
                <div className="font-medium">John Smith</div>
                <div className="text-sm text-gray-600">+1-555-0124</div>
              </div>
              <ChevronRight className="text-gray-400" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Customer Details Screen
  const CustomerDetailsScreen = () => (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <button 
          onClick={() => setCurrentScreen('customer-search')}
          className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
        >
          ←
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-bold">{selectedCustomer?.name}</h1>
          <p className="text-sm text-gray-600">Customer Details</p>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          selectedCustomer?.status === 'verified' 
            ? 'bg-green-100 text-green-600' 
            : 'bg-yellow-100 text-yellow-600'
        }`}>
          {selectedCustomer?.status}
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900">Contact Information</h3>
          <button 
            onClick={() => setShowOTPFlow(true)}
            className="text-blue-600"
          >
            <Edit size={16} />
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Phone</span>
            <span className="font-medium">{selectedCustomer?.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email</span>
            <span className="font-medium">maria.rodriguez@email.com</span>
          </div>
        </div>
      </div>

      {/* Address Info */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900">Address Information</h3>
          <button className="text-blue-600">
            <Edit size={16} />
          </button>
        </div>
        <div className="space-y-2">
          <div className="text-sm">
            <div className="font-medium">123 Main Street</div>
            <div className="text-gray-600">New York, NY 10001</div>
            <div className="text-gray-600">United States</div>
          </div>
        </div>
      </div>

      {/* ID Upload */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900">Identity Documents</h3>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="text-orange-500" size={16} />
            <span className="text-xs text-orange-600">Expires in 30 days</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <FileText className="text-gray-400 mr-3" size={20} />
              <div>
                <div className="font-medium text-sm">Driver's License</div>
                <div className="text-xs text-gray-600">Uploaded 2 months ago</div>
              </div>
            </div>
            <Eye className="text-gray-400" size={16} />
          </div>
          <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            <Camera className="mx-auto mb-1" size={20} />
            <div className="text-sm">Upload New Document</div>
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900">Additional Information</h3>
          <button className="text-blue-600">
            <Edit size={16} />
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Occupation</span>
            <span className="font-medium">Teacher</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Nationality</span>
            <span className="font-medium">US Citizen</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date of Birth</span>
            <span className="font-medium">March 15, 1985</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button className="p-3 bg-blue-600 text-white rounded-lg font-medium">
          Process Transaction
        </button>
        <button className="p-3 bg-green-600 text-white rounded-lg font-medium">
          Complete Verification
        </button>
      </div>

      {/* OTP Flow Modal */}
      {showOTPFlow && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-bold mb-4">Update Phone Number</h3>
            <div className="space-y-4">
              <input 
                type="tel" 
                placeholder="New phone number"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <button className="w-full p-3 bg-blue-600 text-white rounded-lg">
                Send OTP
              </button>
              <button 
                onClick={() => setShowOTPFlow(false)}
                className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Transactions Screen
  const TransactionsScreen = () => (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-4 mb-3">
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Search transactions..."
              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <button className="p-2 bg-blue-600 text-white rounded-lg">
            <Filter size={16} />
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">All</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">Send</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">Receive</button>
          <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">Pending</button>
        </div>
      </div>

      {/* Transaction List */}
      <div className="space-y-3">
        {[
          { type: 'send', customer: 'Maria Rodriguez', amount: '750.00', status: 'completed', time: 'Today, 3:45 PM', commission: '7.50' },
          { type: 'receive', customer: 'John Smith', amount: '1,200.00', status: 'pending', time: 'Today, 2:30 PM', commission: '12.00' },
          { type: 'send', customer: 'Ahmed Hassan', amount: '380.50', status: 'completed', time: 'Today, 1:15 PM', commission: '3.80' },
          { type: 'send', customer: 'Sofia Chen', amount: '925.75', status: 'completed', time: 'Yesterday, 5:20 PM', commission: '9.25' }
        ].map((transaction, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'send' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
                }`}>
                  {transaction.type === 'send' ? <Send size={16} /> : <Receipt size={16} />}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.customer}</p>
                  <p className="text-sm text-gray-500">{transaction.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">${transaction.amount}</p>
                <div className="flex items-center space-x-1 mb-1">
                  {transaction.status === 'completed' && <CheckCircle size={12} className="text-green-500" />}
                  {transaction.status === 'pending' && <Clock size={12} className="text-yellow-500" />}
                  <span className={`text-xs ${
                    transaction.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
                <div className="text-xs text-green-600 font-medium">
                  💰 +${transaction.commission} earned
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Referral Dashboard
  const ReferralDashboard = () => (
    <div className="space-y-6">
      {/* QR Code & Links */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Share Your Referral</h3>
        <div className="text-center mb-4">
          <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto flex items-center justify-center mb-3">
            <QrCode size={48} className="text-gray-400" />
          </div>
          <p className="text-sm text-gray-600">Referral Code: AG001234</p>
        </div>
        <div className="space-y-2">
          <button className="w-full p-3 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center">
            <Share2 className="mr-2" size={16} />
            Share Link
          </button>
          <button className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg font-medium flex items-center justify-center">
            <Download className="mr-2" size={16} />
            Download QR
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-900">Referral Stats</h3>
          <select className="text-sm border border-gray-300 rounded px-2 py-1">
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">47</div>
            <div className="text-xs text-gray-600">Links Sent</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">23</div>
            <div className="text-xs text-gray-600">Customers Registered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">156</div>
            <div className="text-xs text-gray-600">Transactions Completed</div>
          </div>
        </div>
      </div>

      {/* Recent Referrals */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Recent Referrals</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Carlos Martinez</div>
              <div className="text-xs text-gray-500">Registered • 2 days ago</div>
            </div>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">$15 earned</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Lisa Wong</div>
              <div className="text-xs text-gray-500">First transaction • 1 week ago</div>
            </div>
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">$25 earned</span>
          </div>
        </div>
      </div>
    </div>
  );

  // QR Scanner Screen
  const QRScannerScreen = () => (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <button 
          onClick={() => setCurrentScreen('main')}
          className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
        >
          ←
        </button>
        <h1 className="text-xl font-bold">QR Scanner</h1>
      </div>

      {/* Scanner Interface */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="text-center mb-4">
          <h3 className="font-bold text-gray-900 mb-2">Position QR Code in Frame</h3>
          <p className="text-sm text-gray-600">Hold steady for automatic detection</p>
        </div>

        {/* Camera Viewfinder Simulation */}
        <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4" style={{aspectRatio: '4/3'}}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border-4 border-blue-500 rounded-lg relative">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-blue-500"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-blue-500"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-blue-500"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-blue-500"></div>
              
              {/* Scanning line animation simulation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-0.5 bg-blue-500 opacity-75 animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Camera controls */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <button className="p-2 bg-black bg-opacity-50 rounded-full text-white">
              <Camera size={20} />
            </button>
            <button className="p-2 bg-black bg-opacity-50 rounded-full text-white">
              <Eye size={20} />
            </button>
          </div>
        </div>

        {/* Quick Scan Options */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button 
            onClick={() => setCurrentScreen('qr-result')}
            className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-center"
          >
            <CreditCard className="mx-auto mb-1 text-blue-600" size={20} />
            <div className="text-xs font-medium text-blue-600">Payment QR</div>
          </button>
          <button 
            onClick={() => setCurrentScreen('qr-result')}
            className="p-3 bg-green-50 border border-green-200 rounded-lg text-center"
          >
            <UserCheck className="mx-auto mb-1 text-green-600" size={20} />
            <div className="text-xs font-medium text-green-600">Customer ID</div>
          </button>
        </div>

        {/* Manual Input Option */}
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 mb-2">Can't scan? Enter manually:</p>
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Enter QR code data"
              className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
            />
            <button className="p-2 bg-blue-600 text-white rounded-lg">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* QR Type Guide */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-3">Supported QR Types</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <CreditCard className="text-blue-600" size={16} />
            </div>
            <div>
              <div className="font-medium text-sm">Mobile Wallets</div>
              <div className="text-xs text-gray-600">Cash App, Venmo, PayPal, Zelle</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <Globe className="text-green-600" size={16} />
            </div>
            <div>
              <div className="font-medium text-sm">International Services</div>
              <div className="text-xs text-gray-600">Western Union, MoneyGram, Remitly</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <UserCheck className="text-purple-600" size={16} />
            </div>
            <div>
              <div className="font-medium text-sm">Customer Verification</div>
              <div className="text-xs text-gray-600">ID cards, verification codes</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
              <Receipt className="text-orange-600" size={16} />
            </div>
            <div>
              <div className="font-medium text-sm">Transaction Codes</div>
              <div className="text-xs text-gray-600">Pickup codes, confirmation numbers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Exchange Rates Screen
  const ExchangeRatesScreen = () => (
    <div className="space-y-6">
      {/* Header with last update */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-gray-900">Live Exchange Rates</h3>
          <button className="p-2 bg-blue-50 rounded-lg">
            <TrendingUp className="text-blue-600" size={16} />
          </button>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="mr-1" size={12} />
          Last updated: Today 11:47 AM
          <button className="ml-auto text-blue-600 font-medium">Refresh</button>
        </div>
      </div>

      {/* Major Currencies */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Popular Destinations</h3>
        <div className="space-y-3">
          {[
            { from: 'USD', to: 'MXN', flag: '🇲🇽', rate: '18.45', change: '+0.02', changePercent: '+0.1%', color: 'green' },
            { from: 'USD', to: 'INR', flag: '🇮🇳', rate: '83.12', change: '-0.15', changePercent: '-0.2%', color: 'red' },
            { from: 'USD', to: 'PHP', flag: '🇵🇭', rate: '55.67', change: '+0.08', changePercent: '+0.1%', color: 'green' },
            { from: 'USD', to: 'GTQ', flag: '🇬🇹', rate: '7.89', change: '+0.01', changePercent: '+0.1%', color: 'green' },
            { from: 'USD', to: 'COP', flag: '🇨🇴', rate: '4,285', change: '-12.50', changePercent: '-0.3%', color: 'red' },
            { from: 'USD', to: 'DOP', flag: '🇩🇴', rate: '56.85', change: '+0.05', changePercent: '+0.1%', color: 'green' }
          ].map((currency, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center">
                <span className="text-xl mr-3">{currency.flag}</span>
                <div>
                  <div className="font-medium">{currency.from} → {currency.to}</div>
                  <div className="text-sm text-gray-600">Agent rate: {(parseFloat(currency.rate) * 0.975).toFixed(2)}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">{currency.rate}</div>
                <div className={`text-sm flex items-center ${
                  currency.color === 'green' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {currency.color === 'green' ? '↗' : '↘'} {currency.change} ({currency.changePercent})
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rate Calculator */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Quick Rate Calculator</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>USD - US Dollar</option>
                <option>EUR - Euro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>MXN - Mexican Peso</option>
                <option>INR - Indian Rupee</option>
                <option>PHP - Philippine Peso</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2 text-gray-400" size={16} />
              <input 
                type="number" 
                placeholder="100.00"
                className="w-full p-2 pl-8 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Customer receives:</span>
              <span className="text-xl font-bold text-blue-600">$1,845.00 MXN</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-sm text-gray-600">Your commission:</span>
              <span className="text-sm font-medium text-green-600">$2.50 USD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rate Alerts */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-3">Rate Alerts</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center">
              <AlertTriangle className="text-yellow-600 mr-2" size={16} />
              <span className="text-sm">USD/INR dropped 0.2% - Consider promoting</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-2 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={16} />
              <span className="text-sm">USD/MXN up 0.1% - Great time for remittances</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const QRResultScreen = () => (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <button 
          onClick={() => setCurrentScreen('qr-scanner')}
          className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
        >
          ←
        </button>
        <h1 className="text-xl font-bold">QR Scan Result</h1>
      </div>

      {/* Scan Success */}
      <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
        <div className="flex items-center mb-2">
          <CheckCircle className="text-green-600 mr-2" size={20} />
          <h3 className="font-bold text-green-800">QR Code Detected</h3>
        </div>
        <p className="text-sm text-green-700">Cash App payment QR successfully scanned</p>
      </div>

      {/* Parsed Information */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Payment Details</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Service</span>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded mr-2"></div>
              <span className="font-medium">Cash App</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Account Name</span>
            <span className="font-medium">Maria Rodriguez</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phone</span>
            <span className="font-medium">+1 (555) 123-4567</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Account ID</span>
            <span className="font-medium font-mono">$mariarodriguez</span>
          </div>
        </div>
      </div>

      {/* Transaction Amount */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <label className="block text-sm font-medium text-gray-700 mb-2">Transfer Amount</label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
          <input 
            type="number" 
            placeholder="0.00"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-lg font-medium"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">Fee: $2.50 • Total: $X.XX</p>
      </div>

      {/* Security Verification */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-3">Security Verification</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={16} />
            <span className="text-sm text-gray-700">QR code verified authentic</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={16} />
            <span className="text-sm text-gray-700">Account status confirmed</span>
          </div>
          <div className="flex items-center">
            <Clock className="text-yellow-500 mr-2" size={16} />
            <span className="text-sm text-gray-700">Customer verification pending</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setCurrentScreen('qr-scanner')}
          className="p-3 border border-gray-300 text-gray-700 rounded-lg font-medium"
        >
          Scan Another
        </button>
        <button className="p-3 bg-blue-600 text-white rounded-lg font-medium">
          Process Payment
        </button>
      </div>

      {/* Transaction History with this QR */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-3">Previous Transactions</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
            <div>
              <div className="text-sm font-medium">$500.00 sent</div>
              <div className="text-xs text-gray-500">March 15, 2025</div>
            </div>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Completed</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
            <div>
              <div className="text-sm font-medium">$750.00 sent</div>
              <div className="text-xs text-gray-500">February 28, 2025</div>
            </div>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
  const DepositScreen = () => (
    <div className="space-y-6">
      <div className="flex items-center mb-4">
        <button 
          onClick={() => setCurrentScreen('main')}
          className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
        >
          ←
        </button>
        <h1 className="text-xl font-bold">Submit Deposit</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        {/* Check Image Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Check Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Camera className="mx-auto mb-2 text-gray-400" size={32} />
            <p className="text-sm text-gray-600 mb-2">Take a photo of your deposit check</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
              Take Photo
            </button>
          </div>
        </div>

        {/* Deposit Details */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Deposit Date</label>
            <input 
              type="date"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Deposit Amount</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="number" 
                placeholder="0.00"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check Number</label>
            <input 
              type="text" 
              placeholder="Enter check number"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Balance Calculation */}
        <div className="bg-gray-50 p-4 rounded-lg mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Current Balance</span>
            <span className="font-medium">$8,450.00</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Deposit Amount</span>
            <span className="font-medium">$0.00</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <span>New Balance</span>
            <span>$8,450.00</span>
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full p-3 bg-blue-600 text-white rounded-lg font-medium mt-6">
          Submit Deposit
        </button>
      </div>
    </div>
  );

  // Training Screen
  const TrainingScreen = () => (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Training Progress</h3>
        <div className="flex items-center mb-2">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
          </div>
          <span className="ml-3 text-sm font-medium">75%</span>
        </div>
        <p className="text-sm text-gray-600">12 of 16 modules completed</p>
      </div>

      {/* Required Training */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Required Training</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="text-red-500 mr-3" size={20} />
              <div>
                <div className="font-medium text-sm">AML Compliance</div>
                <div className="text-xs text-red-600">Due in 2 days</div>
              </div>
            </div>
            <button className="px-3 py-1 bg-red-600 text-white text-xs rounded">Start</button>
          </div>
        </div>
      </div>

      {/* Available Modules */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Training Modules</h3>
        <div className="space-y-3">
          {[
            { title: 'Customer Verification', status: 'completed', time: '15 min' },
            { title: 'Transaction Processing', status: 'completed', time: '20 min' },
            { title: 'Fraud Detection', status: 'in-progress', time: '25 min' },
            { title: 'Regulatory Compliance', status: 'available', time: '30 min' }
          ].map((module, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-3 ${
                  module.status === 'completed' ? 'bg-green-500' :
                  module.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                }`}></div>
                <div>
                  <div className="font-medium text-sm">{module.title}</div>
                  <div className="text-xs text-gray-500">{module.time}</div>
                </div>
              </div>
              <button className={`px-3 py-1 text-xs rounded ${
                module.status === 'completed' ? 'bg-green-100 text-green-600' :
                module.status === 'in-progress' ? 'bg-yellow-100 text-yellow-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                {module.status === 'completed' ? 'Review' :
                 module.status === 'in-progress' ? 'Continue' : 'Start'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Notifications Screen
  const NotificationsScreen = () => (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-900">Notifications</h3>
          <button className="text-sm text-blue-600">Mark all read</button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <Bell className="text-blue-600 mt-1" size={16} />
            <div className="flex-1">
              <div className="font-medium text-sm">System Update</div>
              <div className="text-xs text-gray-600">New features available in version 2.1</div>
              <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
            <AlertTriangle className="text-orange-500 mt-1" size={16} />
            <div className="flex-1">
              <div className="font-medium text-sm">Compliance Reminder</div>
              <div className="text-xs text-gray-600">AML training due in 2 days</div>
              <div className="text-xs text-gray-500 mt-1">1 day ago</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
            <DollarSign className="text-green-500 mt-1" size={16} />
            <div className="flex-1">
              <div className="font-medium text-sm">Commission Payment</div>
              <div className="text-xs text-gray-600">$186 deposited to your account</div>
              <div className="text-xs text-gray-500 mt-1">3 days ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Settings Screen
  const SettingsScreen = () => (
    <div className="space-y-6">
      {/* App Security */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-900">App Security</h3>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Fingerprint className="text-gray-400 mr-3" size={20} />
              <span className="text-gray-700">Face ID / Touch ID</span>
            </div>
            <div className="w-12 h-6 bg-blue-600 rounded-full relative">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Lock className="text-gray-400 mr-3" size={20} />
              <span className="text-gray-700">PIN Protection</span>
            </div>
            <ChevronRight className="text-gray-400" size={16} />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-900">Preferences</h3>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Globe className="text-gray-400 mr-3" size={20} />
              <span className="text-gray-700">Language</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">English</span>
              <ChevronRight className="text-gray-400" size={16} />
            </div>
          </div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="text-gray-400 mr-3" size={20} />
              <span className="text-gray-700">Notifications</span>
            </div>
            <ChevronRight className="text-gray-400" size={16} />
          </div>
        </div>
      </div>

      {/* Account */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-900">Account</h3>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <User className="text-gray-400 mr-3" size={20} />
              <span className="text-gray-700">Profile Information</span>
            </div>
            <ChevronRight className="text-gray-400" size={16} />
          </div>
          <button className="w-full p-4 flex items-center text-red-600">
            <span className="text-red-600">Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Main App Navigation
  const renderMainApp = () => {
    if (currentScreen === 'customer-search') return <CustomerSearchScreen />;
    if (currentScreen === 'customer-details') return <CustomerDetailsScreen />;
    if (currentScreen === 'deposit') return <DepositScreen />;
    if (currentScreen === 'qr-scanner') return <QRScannerScreen />;
    if (currentScreen === 'qr-result') return <QRResultScreen />;

    return (
      <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">AgentPay</h1>
              <p className="text-sm text-gray-600">Field Agent Portal</p>
            </div>
            <div className="relative">
              <button 
                onClick={() => setActiveTab('notifications')}
                className="p-2 bg-gray-100 rounded-full"
              >
                <Bell size={20} className="text-gray-600" />
              </button>
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 pb-24">
          {activeTab === 'home' && <HomeScreen />}
          {activeTab === 'transactions' && <TransactionsScreen />}
          {activeTab === 'training' && <TrainingScreen />}
          {activeTab === 'notifications' && <NotificationsScreen />}
          {activeTab === 'referral' && <ReferralDashboard />}
          {activeTab === 'rates' && <ExchangeRatesScreen />}
          {activeTab === 'settings' && <SettingsScreen />}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 p-4">
          <div className="grid grid-cols-5 gap-1">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
                activeTab === 'home' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Home size={18} />
              <span className="text-xs mt-1 font-medium">Home</span>
            </button>
            
            <button
              onClick={() => setActiveTab('transactions')}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
                activeTab === 'transactions' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Receipt size={18} />
              <span className="text-xs mt-1 font-medium">Transfers</span>
            </button>

            <button
              onClick={() => setActiveTab('rates')}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
                activeTab === 'rates' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <TrendingUp size={18} />
              <span className="text-xs mt-1 font-medium">Rates</span>
            </button>
            
            <button
              onClick={() => setActiveTab('training')}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
                activeTab === 'training' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BookOpen size={18} />
              <span className="text-xs mt-1 font-medium">Training</span>
            </button>
            
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
                activeTab === 'settings' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Settings size={18} />
              <span className="text-xs mt-1 font-medium">Settings</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Main render logic
  if (currentScreen === 'login') {
    return <LoginScreen />;
  }

  return renderMainApp();
};

export default AgentApp;