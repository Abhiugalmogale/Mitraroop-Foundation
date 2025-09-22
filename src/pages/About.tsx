import React from 'react';
import { Heart, Target, Eye, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We believe in showing genuine care and empathy for those in need.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong communities through collective support and collaboration.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Maintaining transparency and honesty in all our operations.',
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Creating meaningful and lasting change in people\'s lives.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mitraroop Foundation</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Dedicated to creating positive change through compassionate support and sustainable empowerment
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide interest-free financial assistance to individuals and families facing hardships, 
                while empowering youth through education, skill development, and entrepreneurship opportunities. 
                We strive to create a supportive ecosystem where financial constraints don't limit human potential.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To build a society where every individual has access to opportunities for growth and development, 
                regardless of their financial background. We envision a future where communities are self-reliant, 
                empowered, and committed to supporting one another in times of need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Mitraroop Foundation was born from a simple belief: that everyone deserves a chance to succeed, 
                  regardless of their financial circumstances. Founded in 2020, our organization emerged during 
                  challenging times when many families were struggling with unprecedented difficulties.
                </p>
                <p>
                  What started as a small community initiative to help local families has grown into a 
                  comprehensive foundation serving hundreds of individuals across various programs. Our approach 
                  has always been centered on dignity, respect, and sustainable support.
                </p>
                <p>
                  Today, we continue to expand our reach while maintaining our core values of transparency, 
                  compassion, and community-driven impact. Every person we help becomes part of our extended 
                  family, and many of our beneficiaries have become donors themselves, creating a beautiful 
                  cycle of giving.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="../assets/photo-2.jpeg"
                alt="Community gathering"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">4+</div>
                <div className="text-sm">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-colors duration-200">
                    <Icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">MF</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Message from Our Founder</h2>
              <p className="text-gray-600">Founder & CEO, Mitraroop Foundation</p>
            </div>

            <div className="text-center">
              <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
                "When I started Mitraroop Foundation, I had a simple vision: to create a world where 
                financial hardship doesn't prevent someone from achieving their dreams. Every person we've 
                helped, every student we've supported, and every family we've assisted has reinforced my 
                belief that together, we can build a more compassionate and equitable society."
              </blockquote>
              
              <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
                "Our work goes beyond just providing financial aid. We're building relationships, 
                fostering hope, and creating opportunities for people to not just survive, but thrive. 
                I'm grateful to our donors, volunteers, and partners who share this vision and make 
                our work possible."
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-600"></div>
                <div className="text-gray-900 font-semibold">Thank you for being part of our journey</div>
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-600"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact by Numbers</h2>
            <p className="text-xl text-blue-100">
              Measurable change in our community since 2020
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">₹50L+</div>
              <div className="text-blue-200">Aid Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Students Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Active Donors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;