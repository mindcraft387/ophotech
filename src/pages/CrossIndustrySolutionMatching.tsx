import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb, CheckCircle, Target, Zap, Award } from 'lucide-react';

const CrossIndustrySolutionMatching: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Title */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Cross-Industry Solution Matching
                </h1>
                <p className="text-lg text-gray-300 mt-2">OphoTech-Specific Case Study</p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center">
              <div className="rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl max-w-md w-full">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Cross-Industry Solution Matching"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Case Study Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Case Study: Applying Retail Chatbots to Healthcare Appointment Management
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-cyan mx-auto"></div>
          </div>

          {/* Client Information Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Client</h3>
              <p className="text-gray-300">Private Multispecialty Hospital Chain</p>
              <p className="text-primary-400 text-sm">(6 branches, India)</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Challenge</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Appointment scheduling inefficiencies, patient query backlogs, and inconsistent engagement on digital platforms
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Solution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                OphoTech mapped an AI-powered customer support chatbot—originally designed for retail order tracking—to healthcare's patient appointment and support systems.
              </p>
            </div>
          </div>

          {/* Enablement Process Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Enablement Process</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-400 hidden lg:block"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <h4 className="text-xl font-bold text-white">Solution Discovery</h4>
                    </div>
                    <p className="text-gray-300">Identified a multilingual retail chatbot licensed for customer interaction</p>
                  </div>
                  <div className="lg:pl-8"></div>
                </div>

                {/* Step 2 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <h4 className="text-xl font-bold text-white">Use-case Reframing</h4>
                    </div>
                    <p className="text-gray-300">Mapped retail features (order tracking, returns, FAQs) to healthcare needs (appointment booking, doctor availability, patient queries)</p>
                  </div>
                  <div className="lg:order-1 lg:text-right lg:pr-8"></div>
                </div>

                {/* Step 3 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <h4 className="text-xl font-bold text-white">Deployment</h4>
                    </div>
                    <p className="text-gray-300">Integrated chatbot with hospital CRM and WhatsApp Business</p>
                  </div>
                  <div className="lg:pl-8"></div>
                </div>

                {/* Step 4 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <h4 className="text-xl font-bold text-white">Training & Personalization</h4>
                    </div>
                    <p className="text-gray-300">Added healthcare-specific conversational flows and compliance with health data protection (HIPAA-inspired locally)</p>
                  </div>
                  <div className="lg:order-1 lg:text-right lg:pr-8"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Business Impact</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">85%</div>
                <p className="text-gray-300">automation of appointment scheduling across all branches</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">50%</div>
                <p className="text-gray-300">reduction in front-desk workload</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">35%</div>
                <p className="text-gray-300">increase in patient satisfaction (measured through post-chat surveys)</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">4x</div>
                <p className="text-gray-300">improvement in digital query resolution time</p>
              </div>
            </div>
          </div>

          {/* Website-Ready Metrics Summary */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Website-Ready Metrics Summary</h3>
            
            {/* Mobile-First Responsive Design */}
            <div className="space-y-6 lg:hidden">
              {/* Mobile Cards */}
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Appointment Booking (Manual)</span>
                  <span className="text-primary-400 font-bold">85% Automated</span>
                </div>
                <div className="text-sm text-gray-400">Before: 100% → After: 85% Automated</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Query Response Time</span>
                  <span className="text-primary-400 font-bold">7 mins avg</span>
                </div>
                <div className="text-sm text-gray-400">Before: 30 mins avg → After: 7 mins avg</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Patient Engagement Rate</span>
                  <span className="text-primary-400 font-bold">75%+</span>
                </div>
                <div className="text-sm text-gray-400">Before: 40% → After: 75%+</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Customer Support Staff Required</span>
                  <span className="text-primary-400 font-bold">9 (Reassigned to critical areas)</span>
                </div>
                <div className="text-sm text-gray-400">Before: 18 → After: 9 (Reassigned to critical areas)</div>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-lg border border-white/20">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-500/20">
                    <th className="px-6 py-4 text-left text-white font-semibold">Impact Area</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Before</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">After Using OphoTech Solution Mapping</th>
                  </tr>
                </thead>
                <tbody className="bg-white/5">
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Appointment Booking (Manual)</td>
                    <td className="px-6 py-4 text-gray-300">100%</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">85% Automated</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Query Response Time</td>
                    <td className="px-6 py-4 text-gray-300">30 mins avg</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">7 mins avg</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Patient Engagement Rate</td>
                    <td className="px-6 py-4 text-gray-300">40%</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">75%+</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300 font-medium">Customer Support Staff Required</td>
                    <td className="px-6 py-4 text-gray-300">18</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">9 (Reassigned to critical areas)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategic Value */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Strategic Value for Clients</h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Discover cross-industry innovations with proven results</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Reduce solution development costs by <strong>repurposing successful tech</strong></p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Speed up implementation with <strong>pre-tested, scalable modules</strong></p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Bridge business challenges with <strong>non-traditional tech solutions</strong></p>
              </div>
            </div>
          </div>

          {/* Suggested Tagline */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 rounded-full px-8 py-4 border border-primary-500/30">
              <Award className="w-6 h-6 text-primary-400" />
              <span className="text-white font-semibold">"Transform Your Industry with Proven Tech from Others. Innovation Doesn't Have to Start from Scratch."</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrossIndustrySolutionMatching;