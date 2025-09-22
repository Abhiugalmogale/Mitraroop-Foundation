import React, { useState } from 'react';
import { GraduationCap, Lightbulb, Users, Trophy, ArrowRight, CheckCircle, Calendar, MapPin } from 'lucide-react';

const StudentPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState<'scholarship' | 'hackathon'>('scholarship');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    program: '',
    experience: '',
    motivation: '',
    idea: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Program application submitted:', { ...formData, program: selectedProgram });
    alert(`Thank you for applying to our ${selectedProgram} program! We'll contact you within 5-7 business days.`);
  };

  const scholarshipBenefits = [
    'Full or partial tuition fee coverage',
    'Monthly stipend for living expenses',
    'Access to mentorship programs',
    'Career guidance and placement support',
    'Networking opportunities with industry professionals',
    'Skill development workshops and training',
  ];

  const hackathonFeatures = [
    'Intensive 48-hour startup boot camp',
    'Expert mentorship from successful entrepreneurs',
    'Seed funding up to ₹5,00,000 for winning ideas',
    'Legal and business setup support',
    'Marketing and branding guidance',
    'Ongoing support for 6 months post-event',
  ];

  const hackathonTimeline = [
    { date: 'March 1-15, 2024', event: 'Registration Opens', description: 'Submit your application and idea' },
    { date: 'March 20, 2024', event: 'Selection Results', description: 'Selected participants notified' },
    { date: 'March 25-27, 2024', event: 'Pre-Event Workshop', description: 'Online preparation sessions' },
    { date: 'April 5-7, 2024', event: 'Main Event', description: '48-hour intensive hackathon' },
    { date: 'April 15, 2024', event: 'Results & Awards', description: 'Winner announcement and funding' },
  ];

  const successStories = [
    {
      name: 'Arjun Patel',
      program: 'Startup Hackathon 1.0 Winner',
      story: 'Started EcoTech Solutions with ₹3L funding. Now employs 12 people and generates ₹50L+ annually.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    },
    {
      name: 'Priya Singh',
      program: 'Scholarship Recipient 2022',
      story: 'Completed MBA with our support. Now working as a consultant at a Fortune 500 company.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    },
    {
      name: 'Rahul Kumar',
      program: 'Hackathon 1.0 Participant',
      story: 'Launched HealthCare App that serves 10,000+ users. Raised ₹1Cr+ in Series A funding.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-6 text-green-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Programs</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Empowering the next generation through education support, skill development, and entrepreneurship opportunities. 
            Build your future with us.
          </p>
        </div>
      </section>

      {/* Program Selector */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-lg text-gray-600">Select the program that best fits your goals and aspirations</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div 
              className={`cursor-pointer rounded-lg border-2 transition-all duration-200 ${
                selectedProgram === 'scholarship' 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-300 bg-white hover:border-green-300'
              }`}
              onClick={() => setSelectedProgram('scholarship')}
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Educational Scholarships</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Financial support for students pursuing higher education, technical courses, or skill development programs.
                </p>
                <ul className="space-y-2">
                  {scholarshipBenefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div 
              className={`cursor-pointer rounded-lg border-2 transition-all duration-200 ${
                selectedProgram === 'hackathon' 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-300 bg-white hover:border-green-300'
              }`}
              onClick={() => setSelectedProgram('hackathon')}
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Startup Hackathon 2.0</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Intensive program to help young entrepreneurs turn their ideas into successful businesses and startups.
                </p>
                <ul className="space-y-2">
                  {hackathonFeatures.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Program Details */}
          {selectedProgram === 'scholarship' ? (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Educational Scholarship Program</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Program Benefits</h4>
                  <ul className="space-y-3">
                    {scholarshipBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Eligibility Criteria</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Age: 16-30 years
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Family income below ₹5,00,000 annually
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Good academic record (60%+ marks)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Clear career goals and motivation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Trophy className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Startup Hackathon 2.0</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What You'll Get</h4>
                  <ul className="space-y-3">
                    {hackathonFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Event Timeline</h4>
                  <div className="space-y-4">
                    {hackathonTimeline.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-orange-100 p-2 rounded-lg mr-4 flex-shrink-0">
                          <Calendar className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{item.event}</div>
                          <div className="text-sm text-orange-600 font-medium">{item.date}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Event Location</h4>
                </div>
                <p className="text-gray-700">
                  <strong>Venue:</strong> Innovation Hub, New Delhi<br/>
                  <strong>Format:</strong> In-person with live streaming for remote participants<br/>
                  <strong>Capacity:</strong> 100 selected participants
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Apply for {selectedProgram === 'scholarship' ? 'Educational Scholarship' : 'Startup Hackathon 2.0'}
            </h3>

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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min="16"
                    max="30"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Education Status *
                </label>
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                >
                  <option value="">Select your education level</option>
                  <option value="high-school">High School (10th/12th)</option>
                  <option value="diploma">Diploma</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                  <option value="professional">Professional Course</option>
                </select>
              </div>

              {selectedProgram === 'hackathon' && (
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Previous Business/Startup Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Describe any previous business experience, projects, or entrepreneurial activities..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  ></textarea>
                </div>
              )}

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                  Why do you want to join this program? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Explain your motivation, goals, and how this program aligns with your aspirations..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                ></textarea>
              </div>

              {selectedProgram === 'hackathon' && (
                <div>
                  <label htmlFor="idea" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Business Idea *
                  </label>
                  <textarea
                    id="idea"
                    name="idea"
                    value={formData.idea}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Describe your business idea, target market, and how it solves a problem..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  ></textarea>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
              >
                Submit Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Meet some of our program alumni who are making a difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{story.name}</h3>
                  <div className="text-sm text-green-600 font-medium mb-3">{story.program}</div>
                  <p className="text-gray-600 text-sm">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of students and young entrepreneurs who have already benefited from our programs. 
            Take the first step towards building a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setSelectedProgram('scholarship')}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Apply for Scholarship
            </button>
            <button
              onClick={() => setSelectedProgram('hackathon')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Join Hackathon 2.0
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentPrograms;