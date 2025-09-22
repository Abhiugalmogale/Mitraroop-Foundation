import React, { useState } from 'react';
import { Heart, CreditCard, Users, Zap, Shield, Gift } from 'lucide-react';

const Donate = () => {
  const [donationType, setDonationType] = useState<'one-time' | 'recurring'>('one-time');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    anonymous: false,
  });

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const handleAmountSelect = (selectedAmount: number) => {
    setAmount(selectedAmount.toString());
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount || amount;
    console.log('Donation:', { ...formData, amount: finalAmount, type: donationType });
    
    // In a real application, you would integrate with payment gateways here
    alert(`Thank you for your ${finalAmount ? '₹' + finalAmount : ''} ${donationType} donation! 
           Redirecting to secure payment gateway...`);
  };

  const impactExamples = [
    { amount: 500, impact: 'Provides a week of meals for a family in need' },
    { amount: 1000, impact: 'Supports a student\'s monthly education expenses' },
    { amount: 2500, impact: 'Covers basic medical expenses for emergency treatment' },
    { amount: 5000, impact: 'Helps a small business owner restart their venture' },
    { amount: 10000, impact: 'Provides comprehensive support for a family crisis' },
    { amount: 25000, impact: 'Funds a complete educational scholarship for one year' },
  ];

  const features = [
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Your donation is processed through secure, encrypted payment gateways.',
    },
    {
      icon: Heart,
      title: 'Direct Impact',
      description: 'Your donation directly reaches those in need without administrative overhead.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join a community of donors committed to positive social change.',
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Your donation is processed immediately and put to work right away.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="h-16 w-16 mx-auto mb-6 text-orange-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Your donation helps us provide interest-free aid and support to families and individuals in need. 
            Every contribution makes a real difference in someone's life.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Choose Your Donation</h2>
              <p className="text-blue-100">Select an amount and donation type that works for you</p>
            </div>

            <form onSubmit={handleDonate} className="p-8">
              {/* Donation Type */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Donation Type</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`p-4 rounded-lg border-2 transition-colors duration-200 ${
                      donationType === 'one-time'
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-300 hover:border-orange-300'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Gift className="h-6 w-6 mr-2" />
                      <span className="font-semibold">One-time Donation</span>
                    </div>
                    <p className="text-sm text-gray-600">Make a single donation today</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDonationType('recurring')}
                    className={`p-4 rounded-lg border-2 transition-colors duration-200 ${
                      donationType === 'recurring'
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-300 hover:border-orange-300'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Heart className="h-6 w-6 mr-2" />
                      <span className="font-semibold">Monthly Donation</span>
                    </div>
                    <p className="text-sm text-gray-600">Ongoing support every month</p>
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Amount</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map((presetAmount) => (
                    <button
                      type="button"
                      key={presetAmount}
                      onClick={() => handleAmountSelect(presetAmount)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-colors duration-200 ${
                        amount === presetAmount.toString()
                          ? 'border-orange-500 bg-orange-500 text-white'
                          : 'border-gray-300 hover:border-orange-300 text-gray-700'
                      }`}
                    >
                      ₹{presetAmount.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div>
                  <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-1">
                    Or enter a custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">₹</span>
                    <input
                      type="number"
                      id="customAmount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Enter amount"
                      min="100"
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Impact Display */}
              {(amount || customAmount) && (
                <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Your Impact</h4>
                  <p className="text-green-700">
                    ₹{(customAmount || amount).toLocaleString()} can help make a significant difference in someone's life. 
                    Thank you for your generosity!
                  </p>
                </div>
              )}

              {/* Donor Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Share a message of support or dedication..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="anonymous"
                      checked={formData.anonymous}
                      onChange={handleInputChange}
                      className="rounded border-gray-300 text-orange-600 shadow-sm focus:ring-orange-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Make this donation anonymous</span>
                  </label>
                </div>
              </div>

              {/* Donate Button */}
              <button
                type="submit"
                disabled={!(amount || customAmount)}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CreditCard className="mr-3 h-6 w-6" />
                Donate {(customAmount || amount) ? `₹${(customAmount || amount).toLocaleString()}` : ''} 
                {donationType === 'recurring' ? '/month' : ' now'}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By clicking donate, you agree to our terms and conditions. Your donation is secure and encrypted.
                You will receive an email receipt for tax purposes.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Impact Examples */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact in Action</h2>
            <p className="text-lg text-gray-600">See how different donation amounts create real change</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactExamples.map((example, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="text-2xl font-bold text-orange-600 mb-2">₹{example.amount.toLocaleString()}</div>
                <p className="text-gray-700">{example.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Tax Benefits Available</h2>
          <p className="text-xl text-blue-100 mb-8">
            Your donations to Mitraroop Foundation are eligible for tax benefits under Section 80G of the Income Tax Act. 
            You can claim up to 50% deduction on your taxable income.
          </p>
          <div className="bg-blue-700 rounded-lg p-6 inline-block">
            <div className="text-3xl font-bold mb-2">50% Tax Deduction</div>
            <div className="text-blue-200">On your donation amount</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;