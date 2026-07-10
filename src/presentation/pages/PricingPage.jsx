import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes, FaStar, FaRocket, FaBuilding, FaUsers } from 'react-icons/fa';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 1,
      name: 'Starter',
      icon: FaUsers,
      price: {
        monthly: '2,500',
        yearly: '25,000',
      },
      description: 'Perfect for small schools and madrasahs',
      features: [
        { name: '100 Student Profiles', included: true },
        { name: 'Basic Attendance Tracking', included: true },
        { name: 'Manual Fee Collection', included: true },
        { name: '3 Staff Accounts', included: true },
        { name: 'Email Support', included: true },
        { name: 'Basic Reports', included: true },
        { name: 'Parent Portal', included: false },
        { name: 'Biometric Attendance', included: false },
        { name: 'Exam Management', included: false },
        { name: 'API Access', included: false },
      ],
      ctaText: 'Get Started',
      popular: false,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      id: 2,
      name: 'Professional',
      icon: FaRocket,
      price: {
        monthly: '5,000',
        yearly: '50,000',
      },
      description: 'Most popular for growing institutions',
      features: [
        { name: '500 Student Profiles', included: true },
        { name: 'Biometric Attendance', included: true },
        { name: 'Cashless Fee (bKash/Nagad)', included: true },
        { name: '10 Staff Accounts', included: true },
        { name: 'Parent Portal Access', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Exam Management', included: true },
        { name: 'Custom Reports', included: false },
        { name: 'API Access', included: false },
      ],
      ctaText: 'Start Free Trial',
      popular: true,
      color: 'from-glaucous to-powder-blue',
      bgColor: 'bg-glaucous',
      borderColor: 'border-glaucous',
    },
    {
      id: 3,
      name: 'Enterprise',
      icon: FaBuilding,
      price: {
        monthly: '10,000',
        yearly: '100,000',
      },
      description: 'For large schools and multi-campus institutes',
      features: [
        { name: 'Unlimited Students', included: true },
        { name: 'All Features', included: true },
        { name: 'Multi-Campus Support', included: true },
        { name: 'Custom Reports', included: true },
        { name: '24/7 Dedicated Support', included: true },
        { name: 'API Access', included: true },
        { name: 'Custom Integration', included: true },
        { name: 'Data Migration Help', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'SLA Guarantee', included: true },
      ],
      ctaText: 'Contact Sales',
      popular: false,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ];

  // FAQ Data
  const faqs = [
    {
      question: 'Can I switch plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, the Professional plan includes a 14-day free trial. No credit card required.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bKash, Nagad, bank transfers, and all major credit/debit cards.',
    },
    {
      question: 'Do you offer discounts for non-profits?',
      answer: 'Yes, we offer special pricing for non-profit educational institutions. Contact us for details.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption, regular backups, and follow industry best practices for data security.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.',
    },
  ];

  return (
    <div className="py-20 bg-alabaster-grey">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-glaucous bg-opacity-10 text-glaucous px-4 py-2 rounded-full text-sm font-medium mb-4">
            Pricing Plans
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-black mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-ink-black text-opacity-70">
            Choose the plan that fits your institution's needs. All plans include core features.
          </p>
          <div className="w-24 h-1 bg-glaucous mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-ink-black' : 'text-ink-black text-opacity-50'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="relative w-16 h-8 bg-glaucous rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-glaucous focus:ring-offset-2"
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                billingCycle === 'yearly' ? 'translate-x-8' : ''
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-ink-black' : 'text-ink-black text-opacity-50'}`}>
            Yearly
            <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  isPopular ? 'ring-2 ring-glaucous' : 'border border-alabaster-grey'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-glaucous text-white text-xs font-bold px-4 py-1 rounded-bl-lg flex items-center gap-1">
                      <FaStar className="text-yellow-300" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${isPopular ? 'bg-glaucous bg-opacity-10' : 'bg-alabaster-grey'}`}>
                      <Icon className={`text-2xl ${isPopular ? 'text-glaucous' : 'text-ink-black text-opacity-60'}`} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-ink-black">{plan.name}</h3>
                  </div>

                  <p className="text-ink-black text-opacity-60 text-sm mb-4">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="font-serif text-4xl font-bold text-ink-black">
                      ৳{billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-ink-black text-opacity-60 text-sm ml-1">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-green-600 font-medium mt-1">
                        Save 20% with yearly billing
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                      isPopular
                        ? 'bg-glaucous text-white hover:bg-opacity-90 hover:scale-[1.02]'
                        : 'bg-transparent border-2 border-glaucous text-glaucous hover:bg-glaucous hover:text-white'
                    }`}
                  >
                    {plan.ctaText}
                  </Link>

                  {/* Features List */}
                  <div className="mt-6 space-y-2">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm">
                        {feature.included ? (
                          <FaCheck className="text-glaucous mt-1 flex-shrink-0" />
                        ) : (
                          <FaTimes className="text-ink-black text-opacity-30 mt-1 flex-shrink-0" />
                        )}
                        <span className={`${feature.included ? 'text-ink-black text-opacity-80' : 'text-ink-black text-opacity-40 line-through'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-ink-black text-opacity-70">
              Have questions? We've got answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="font-serif text-lg font-semibold text-ink-black mb-2">
                  {faq.question}
                </h4>
                <p className="text-ink-black text-opacity-60 text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-glaucous to-powder-blue rounded-2xl p-10 md:p-16 text-center text-white">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Plan is Right for You?
          </h2>
          <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your institution's needs and find the perfect solution.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-glaucous px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 hover:scale-105 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;