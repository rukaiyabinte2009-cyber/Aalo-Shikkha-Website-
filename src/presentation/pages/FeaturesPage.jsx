import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUsers, 
  FaMoneyBillWave, 
  FaBook, 
  FaChartLine, 
  FaMobileAlt, 
  FaShieldAlt,
  FaClock,
  FaFileInvoice,
  FaGraduationCap,
  FaBell,
  FaDatabase,
  FaCloudUploadAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaRobot,
  FaLock,
  FaEnvelope
} from 'react-icons/fa';

const FeaturesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Features' },
    { id: 'administration', name: 'Administration' },
    { id: 'academic', name: 'Academic' },
    { id: 'financial', name: 'Financial' },
    { id: 'communication', name: 'Communication' },
    { id: 'security', name: 'Security' },
  ];

  const features = [
    // Administration
    {
      id: 1,
      category: 'administration',
      icon: FaUsers,
      title: 'Student Information System',
      description: 'Complete student profiles with academic history, attendance records, and personal information in one place.',
      details: 'Manage student enrollment, class assignments, and track academic progress throughout their educational journey.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 2,
      category: 'administration',
      icon: FaClock,
      title: 'Real-Time Attendance',
      description: 'Track student attendance instantly with biometric, RFID, and mobile-based check-in systems.',
      details: 'Generate daily, weekly, and monthly attendance reports. Send automatic notifications to parents for absences.',
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
    {
      id: 3,
      category: 'administration',
      icon: FaUserGraduate,
      title: 'Staff Management',
      description: 'Complete teacher and staff profiles with attendance tracking, leave management, and payroll integration.',
      details: 'Manage teacher schedules, workload distribution, and performance evaluations with ease.',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    // Financial
    {
      id: 4,
      category: 'financial',
      icon: FaMoneyBillWave,
      title: 'Cashless Fee Collection',
      description: 'Integrated with bKash and Nagad for seamless, transparent fee payments from anywhere, anytime.',
      details: 'Parents can pay fees online. Automated receipts and instant notifications for every transaction.',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      id: 5,
      category: 'financial',
      icon: FaFileInvoice,
      title: 'Invoice & Payment Tracking',
      description: 'Generate invoices, track payments, and manage outstanding dues with automated reminders.',
      details: 'Detailed financial reports, payment history, and export capabilities for accounting purposes.',
      color: 'bg-teal-50',
      iconColor: 'text-teal-600',
    },
    // Academic
    {
      id: 6,
      category: 'academic',
      icon: FaBook,
      title: 'Exam & Grade Management',
      description: 'Automate exam scheduling, result processing, and report card generation with customizable grading systems.',
      details: 'Supports both traditional and semester systems. Generate detailed report cards and transcripts.',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      id: 7,
      category: 'academic',
      icon: FaGraduationCap,
      title: 'Curriculum Management',
      description: 'Manage subjects, syllabi, lesson plans, and academic calendars with integrated scheduling.',
      details: 'Assign teachers to classes, track curriculum completion, and manage academic years and terms.',
      color: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      id: 8,
      category: 'academic',
      icon: FaRobot,
      title: 'Smart Analytics',
      description: 'AI-powered insights into student performance, attendance trends, and institutional growth.',
      details: 'Predictive analytics to identify at-risk students and areas for improvement in teaching.',
      color: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
    },
    // Communication
    {
      id: 9,
      category: 'communication',
      icon: FaMobileAlt,
      title: 'Parent Portal',
      description: 'Parents get full visibility into their child\'s academic journey including attendance, grades, fees, and notices.',
      details: 'Mobile app and web portal for parents to monitor progress, communicate with teachers, and receive updates.',
      color: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
    {
      id: 10,
      category: 'communication',
      icon: FaBell,
      title: 'Notification System',
      description: 'Automatic alerts for attendance, fee due dates, exam schedules, and important announcements.',
      details: 'Push notifications, SMS, and email alerts keep everyone informed in real-time.',
      color: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
    {
      id: 11,
      category: 'communication',
      icon: FaEnvelope,
      title: 'Parent-Teacher Communication',
      description: 'Seamless communication channels between parents and teachers for better student outcomes.',
      details: 'Direct messaging, feedback forms, and parent-teacher meeting scheduling and management.',
      color: 'bg-violet-50',
      iconColor: 'text-violet-600',
    },
    // Security
    {
      id: 12,
      category: 'security',
      icon: FaShieldAlt,
      title: 'Secure Cloud Storage',
      description: 'All data encrypted and backed up securely on the cloud with ISO-certified data centers.',
      details: '99.9% uptime guarantee with automated backups and disaster recovery protocols.',
      color: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      id: 13,
      category: 'security',
      icon: FaDatabase,
      title: 'Data Security & Privacy',
      description: 'Enterprise-grade security with role-based access control, data encryption, and audit logs.',
      details: 'GDPR and Bangladesh data protection law compliant. Regular security audits and penetration testing.',
      color: 'bg-slate-50',
      iconColor: 'text-slate-600',
    },
    {
      id: 14,
      category: 'security',
      icon: FaLock,
      title: 'Role-Based Access Control',
      description: 'Granular permissions for administrators, teachers, parents, and students.',
      details: 'Custom roles and permissions to control access to sensitive information and features.',
      color: 'bg-stone-50',
      iconColor: 'text-stone-600',
    },
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(f => f.category === activeCategory);

  return (
    <div className="py-20 bg-alabaster-grey">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-glaucous bg-opacity-10 text-glaucous px-4 py-2 rounded-full text-sm font-medium mb-4">
            Features
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-black mb-4">
            Powerful Features for Modern Education
          </h1>
          <p className="text-lg text-ink-black text-opacity-70">
            Aalo Shikkha brings together everything you need to manage your institution with complete transparency.
          </p>
          <div className="w-24 h-1 bg-glaucous mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 md:px-6 py-2 rounded-lg font-medium text-sm transition-all ${
                activeCategory === category.id
                  ? 'bg-glaucous text-white shadow-md'
                  : 'bg-white text-ink-black text-opacity-70 hover:bg-pale-sky'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`${feature.iconColor} text-3xl`} />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-ink-black text-opacity-70 mb-3">
                  {feature.description}
                </p>
                <p className="text-sm text-ink-black text-opacity-50">
                  {feature.details}
                </p>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison / Why Choose Aalo Shikkha */}
        <div className="bg-white rounded-2xl shadow-sm p-10 md:p-16 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-black mb-4">
              Why Choose Aalo Shikkha?
            </h2>
            <p className="text-lg text-ink-black text-opacity-70">
              Built specifically for Bangladeshi institutions with unique features you won't find elsewhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold text-ink-black mb-4 flex items-center gap-2">
                <span className="text-glaucous">✦</span> What Makes Us Different
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheck className="text-glaucous mt-1 flex-shrink-0" />
                  <span className="text-ink-black text-opacity-70">Built specifically for Bangladesh's educational landscape</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-glaucous mt-1 flex-shrink-0" />
                  <span className="text-ink-black text-opacity-70">Integrated with bKash and Nagad for cashless payments</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-glaucous mt-1 flex-shrink-0" />
                  <span className="text-ink-black text-opacity-70">Supports Bengali language interface</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-glaucous mt-1 flex-shrink-0" />
                  <span className="text-ink-black text-opacity-70">Works for all institution types: schools, colleges, madrasahs</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-glaucous mt-1 flex-shrink-0" />
                  <span className="text-ink-black text-opacity-70">Affordable pricing for institutions of all sizes</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-ink-black mb-4 flex items-center gap-2">
                <span className="text-glaucous">✦</span> Key Benefits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheck className="text-glaucous mt-1 flex-shrink-0" />
                  <span className="text-ink-black text-opacity-70">100% transparent operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-glaucous mt-1 flex-shrink-0" />
                  <span className="text-ink-black text-opacity-70">Save hours on manual paperwork</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-glaucous mt-1 flex-shrink-0" />
                  <span className="text-ink-black text-opacity-70">Real-time access for parents and teachers</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-glaucous mt-1 flex-shrink-0" />
                  <span className="text-ink-black text-opacity-70">Reduce financial disputes and errors</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-glaucous mt-1 flex-shrink-0" />
                  <span className="text-ink-black text-opacity-70">Improve student outcomes with data-driven insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-glaucous to-powder-blue rounded-2xl p-10 md:p-16 text-center text-white">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Discover how Aalo Shikkha can bring transparency and efficiency to your school or madrasah.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-glaucous px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;