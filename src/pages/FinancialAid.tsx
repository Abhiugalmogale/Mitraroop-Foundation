import React, { useState } from 'react';
import { CheckCircle, Clock, FileText, Heart, AlertCircle, DollarSign } from 'lucide-react';

const FinancialAid = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    aidType: '',
    amount: '',
    description: '',
    income: '',
    familySize: '',
    documents: null as FileList | null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, documents: e.target.files }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Aid application submitted:', formData);
    setIsSubmitted(true);
  };

  const aidTypes = [
    { value: 'medical', label: 'Medical Emergency' },
    { value: 'education', label: 'Education Support' },
    { value: 'business', label: 'Small Business' },
    { value: 'housing', label: 'Housing/Rent' },
    { value: 'food', label: 'Food Security' },
    { value: 'other', label: 'Other' },
  ];

  const eligibilityCriteria = [
    'Annual household income below ₹5,00,000',
    'Valid Indian identification documents',
    'Genuine financial need documentation',
    'First-time applicants given priority',
    'Clear repayment plan (interest-free)',
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out the application form with all required documents',
      icon: FileText,
    },
    {
      step: 2,
      title: 'Review Process',
      description: 'Our team reviews your application within 7-10 business days',
      icon: Clock,
    },
    {
      step: 3,
      title: 'Verification',
      description: 'Document verification and need assessment',
      icon: AlertCircle,
    },
    {
      step: 4,
      title: 'Approval & Disbursement',
      description: 'Upon approval, funds are disbursed directly to your account',
      icon: CheckCircle,
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Application Submitted!</h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for submitting your financial aid application. We have received your request 
              and will review it within 7-10 business days.
            </p>
          </div>
          <div className="bg-blue-50 rounded-md p-4">
            <div className="text-sm text-blue-800">
              <p className="font-medium">What happens next?</p>
              <ul className="mt-2 text-left space-y-1">
                <li>• You'll receive a confirmation email shortly</li>
                <li>• Our team will review your application</li>
                <li>• We may contact you for additional information</li>
                <li>• You'll be notified of our decision via email/phone</li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Aid Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Interest-free financial assistance for those in need. We're here to support you through difficult times.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600">Simple and transparent process to get the help you need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility & Application Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Eligibility Criteria */}
            <div className="lg:col-span-1">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Eligibility Criteria
                </h3>
                <ul className="space-y-3">
                  {eligibilityCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                  Aid Information
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p><strong>Interest Rate:</strong> 0% (Completely interest-free)</p>
                  <p><strong>Maximum Amount:</strong> ₹2,00,000</p>
                  <p><strong>Repayment Period:</strong> Flexible (12-36 months)</p>
                  <p><strong>Processing Time:</strong> 7-10 business days</p>
                  <p><strong>Documentation:</strong> ID proof, income certificate, need verification</p>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply for Financial Aid</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="aidType" className="block text-sm font-medium text-gray-700 mb-1">
                        Type of Aid Required *
                      </label>
                      <select
                        id="aidType"
                        name="aidType"
                        value={formData.aidType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Select aid type</option>
                        {aidTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Complete Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                        Amount Needed (₹) *
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        required
                        min="1000"
                        max="200000"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">
                        Monthly Income (₹) *
                      </label>
                      <input
                        type="number"
                        id="income"
                        name="income"
                        value={formData.income}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="familySize" className="block text-sm font-medium text-gray-700 mb-1">
                        Family Size *
                      </label>
                      <input
                        type="number"
                        id="familySize"
                        name="familySize"
                        value={formData.familySize}
                        onChange={handleInputChange}
                        required
                        min="1"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Detailed Description of Need *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Please provide detailed information about your financial need, current situation, and how this aid will help you..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="documents" className="block text-sm font-medium text-gray-700 mb-1">
                      Supporting Documents
                    </label>
                    <input
                      type="file"
                      id="documents"
                      name="documents"
                      onChange={handleFileChange}
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Upload ID proof, income certificate, medical bills, or other relevant documents (PDF, JPG, PNG, DOC)
                    </p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                    <div className="flex">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-yellow-800">
                        <p className="font-medium">Please note:</p>
                        <p>All information provided will be kept confidential. We may contact you for additional verification. 
                           False information may result in application rejection.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    Submit Application
                    <Heart className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialAid;