import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCogs, 
  FaChalkboardTeacher, 
  FaPencilRuler, 
  FaHeadset, 
  FaShieldAlt, 
  FaCode,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaMobileAlt,
  FaDatabase
} from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      icon: FaCogs,
      title: 'Implementation Support',
      description: 'Our team helps you set up Aalo Shikkha quickly with data migration and system configuration tailored to your institution.',
      details: 'We handle everything from server setup to data migration, ensuring a smooth transition from your current system.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 2,
      icon: FaChalkboardTeacher,
      title: 'Staff Training',
      description: 'Comprehensive training for teachers, administrators, and staff to ensure smooth adoption and effective use of the platform.',
      details: 'We provide on-site and online training sessions, user manuals, and video tutorials for all skill levels.',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      id: 3,
      icon: FaPencilRuler,
      title: 'Customization',
      description: 'Tailor the software to meet your institution\'s specific needs, workflows, and academic structures.',
      details: 'We customize modules, reports, and user interfaces to match your unique requirements and branding.',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      id: 4,
      icon: FaHeadset,
      title: '24/7 Technical Support',
      description: 'Round-the-clock assistance via phone, email, and live chat for any technical issues or questions.',
      details: 'Our support team is always available to resolve issues quickly and minimize downtime for your institution.',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      id: 5,
      icon: FaShieldAlt,
      title: 'Data Security & Backup',
      description: 'Regular data backups and enterprise-grade security to protect your institution\'s sensitive information.',
      details: 'We implement encryption, access controls, and automated backups to keep your data safe and recoverable.',
      color: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      id: 6,
      icon: FaCode,
      title: 'API Integration',
      description: 'Connect Aalo Shikkha with your existing systems and third-party applications for seamless operations.',
      details: 'We provide RESTful APIs to integrate with your existing software, payment gateways, and third-party services.',
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
    {
      id: 7,
      icon: FaRocket,
      title: 'System Migration',
      description: 'Seamless migration of your existing data from spreadsheets or other software to Aalo Shikkha.',
      details: 'We ensure zero data loss and minimal disruption to your daily operations during migration.',
      color: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
    {
      id: 8,
      icon: FaChartLine,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting to track your institution\'s performance and identify areas for improvement.',
      details: 'Custom dashboards and reports help you make data-driven decisions for your institution\'s growth.',
      color: 'bg-teal-50',
      iconColor: 'text-teal-600',
    },
    {
      id: 9,
      icon: FaMobileAlt,
      title: 'Mobile App Development',
      description: 'Dedicated mobile apps for parents, teachers, and administrators to access the platform on the go.',
      details: 'Native mobile applications for iOS and Android with all essential features optimized for mobile devices.',
      color: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
    },
  ];

  // Process Steps
  const steps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your institution\'s needs and requirements.',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed implementation plan tailored to you.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We set up the system and migrate your data securely.',
    },
    {
      step: '04',
      title: 'Training',
      description: 'We train your staff to use the platform effectively.',
    },
    {
      step: '05',
      title: 'Support',
      description: 'We provide ongoing support and maintenance.',
    },
  ];

  return (
    <div className="py-20 bg-alabaster-grey">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-glaucous bg-opacity-10 text-glaucous px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-black mb-4">
            Comprehensive Solutions for Your Institution
          </h1>
          <p className="text-lg text-ink-black text-opacity-70">
            We provide end-to-end support to ensure your institution gets the most out of Aalo Shikkha.
          </p>
          <div className="w-24 h-1 bg-glaucous mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`${service.iconColor} text-3xl`} />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink-black mb-3">
                  {service.title}
                </h3>
                <p className="text-ink-black text-opacity-70 mb-3">
                  {service.description}
                </p>
                <p className="text-sm text-ink-black text-opacity-50">
                  {service.details}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-glaucous to-powder-blue rounded-2xl p-10 md:p-16 text-center text-white">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how Aalo Shikkha can help your institution achieve complete transparency and efficiency.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-glaucous px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;