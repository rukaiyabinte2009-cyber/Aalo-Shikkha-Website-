import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaMoneyBillWave, FaBook, FaChartLine, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';

const HomePage = () => {
  const features = [
    { icon: FaUsers, title: 'Real-Time Attendance', description: 'Track student attendance instantly with biometric and mobile-based check-ins.' },
    { icon: FaMoneyBillWave, title: 'Cashless Fee Collection', description: 'Integrated with bKash and Nagad for seamless, transparent fee payments.' },
    { icon: FaBook, title: 'Exam & Grade Management', description: 'Automate exam scheduling, result processing, and report card generation.' },
    { icon: FaChartLine, title: 'Analytics & Reporting', description: 'Real-time insights into student performance, attendance, and financials.' },
    { icon: FaMobileAlt, title: 'Parent Portal', description: 'Parents get full visibility into their child\'s academic journey.' },
    { icon: FaShieldAlt, title: 'Secure Cloud Storage', description: 'All data encrypted and backed up securely on the cloud.' },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-ink-black to-glaucous text-white min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
            alt="Clouds"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-powder-blue bg-opacity-20 text-powder-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              ✦ Built for Bangladesh
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Illuminate Your <span className="text-powder-blue">Institution</span>
            </h1>
            <p className="text-xl md:text-2xl text-alabaster-grey mb-8 leading-relaxed">
              Imagine a school where everything is visible, trackable, and accountable. That's Aalo Shikkha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-glaucous text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-center">
                Get Started
              </Link>
              <Link to="/features" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-ink-black transition-all text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-alabaster-grey">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-black mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-ink-black text-opacity-70">
              From attendance to fees, Aalo Shikkha brings complete transparency to your institution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="bg-pale-sky bg-opacity-30 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-glaucous text-2xl" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-ink-black mb-2">{feature.title}</h3>
                  <p className="text-ink-black text-opacity-70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-glaucous">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Illuminate Your Institution?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Join 100+ institutions already using Aalo Shikkha.
          </p>
          <Link to="/contact" className="bg-white text-glaucous px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
