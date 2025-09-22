import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  GraduationCap,
  HandHeart,
  ArrowRight,
  Star,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  const stats = [
    { label: "People Helped", value: "500+", icon: Heart },
    { label: "Students Supported", value: "200+", icon: GraduationCap },
    { label: "Donors", value: "150+", icon: Users },
    { label: "Aid Distributed", value: "₹50L+", icon: HandHeart },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student",
      content:
        "Thanks to Mitraroop Foundation, I was able to complete my engineering degree. Their interest-free aid changed my life.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Small Business Owner",
      content:
        "The foundation helped me start my small business. Now I employ 5 people and give back to my community.",
      rating: 5,
    },
    {
      name: "Anita Devi",
      role: "Mother of 2",
      content:
        "During my medical emergency, Mitraroop Foundation was there for my family. Forever grateful.",
      rating: 5,
    },
  ];

  const photos = [
    "/assets/photo-1.jpeg",
    "/assets/photo-2.jpeg",
    "/assets/photo-3.jpeg",
    "/assets/photo-4.jpeg",
  ];

  return (
    <div className="relative">
      {/* Hero Slider Section */}
      <section className="relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-[80vh] w-full"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[80vh] w-full">
                <img
                  src={photo}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Sticky overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Helping People,
            <span className="block text-green-400">Building Futures</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Mitraroop Foundation provides interest-free financial aid to those in
            need and empowers youth through education and entrepreneurship
            programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <Link
              to="/financial-aid"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
            >
              Apply for Aid
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/donate"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center"
            >
              Donate Now
              <Heart className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Mitraroop Foundation, we believe in the power of community
                support and human kindness. Our mission is to provide
                interest-free financial assistance to individuals and families
                facing financial hardships, while empowering youth through
                education and entrepreneurship.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We work towards creating a society where financial constraints
                don't limit potential, and where every person has the
                opportunity to build a better future for themselves and their
                community.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/assets/photo-4.jpeg"
                alt="Community helping"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Interest-Free Aid</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer various programs designed to support different aspects of
              community development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Financial Aid
              </h3>
              <p className="text-gray-600 mb-6">
                Interest-free financial assistance for medical emergencies,
                education, and basic needs.
              </p>
              <Link
                to="/financial-aid"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
              >
                Apply Now →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Student Programs
              </h3>
              <p className="text-gray-600 mb-6">
                Educational support and youth empowerment through scholarships
                and skill development.
              </p>
              <Link
                to="/student-programs"
                className="text-green-600 font-medium hover:text-green-800 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Startup Hackathon 2.0
              </h3>
              <p className="text-gray-600 mb-6">
                Empowering young entrepreneurs to create innovative solutions
                and build sustainable businesses.
              </p>
              <Link
                to="/student-programs"
                className="text-orange-600 font-medium hover:text-orange-800 transition-colors duration-200"
              >
                Join Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from people whose lives have been transformed through
              our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission Today
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Whether you need help or want to help others, there's a place for
            you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Become a Donor
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
