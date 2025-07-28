import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb, CheckCircle, Target, Zap, Award } from 'lucide-react';

const PracticalTechDesignSessions: React.FC = () => {
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
                  Practical Tech Design Sessions
                </h1>
                <p className="text-lg text-gray-300 mt-2">OphoTech-Specific Case Study</p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center">
              <div className="rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl max-w-md w-full">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Practical Tech Design Sessions"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Case Study Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Case Study: Designing a Scalable Data Lake Architecture for a Logistics Tech Company
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
              <p className="text-gray-300">Fast-scaling Logistics Tech Firm</p>
              <p className="text-primary-400 text-sm">(handling 1M+ deliveries/month across India)</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Challenge</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The client's legacy data systems caused reporting delays, data duplication, and poor integration across business units. They wanted to move to a scalable, cloud-native data architecture—but lacked internal design expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Solution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                OphoTech conducted Practical Tech Design Sessions over 4 weeks, collaborating with business, data, and engineering teams to co-design a fit-for-purpose, future-ready data lake and streaming pipeline.
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
                      <h4 className="text-xl font-bold text-white">Pre-Session Discovery</h4>
                    </div>
                    <p className="text-gray-300">Conducted a 360° assessment of current systems, pain points, and business goals</p>
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
                      <h4 className="text-xl font-bold text-white">Workshop Series</h4>
                    </div>
                    <p className="text-gray-300">Facilitated 6 high-impact sessions with OphoTech architects, client's tech leads, and business analysts</p>
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
                      <h4 className="text-xl font-bold text-white">Architecture Design Canvas</h4>
                    </div>
                    <p className="text-gray-300">Created and validated modular components: ingestion, transformation, storage, and access layers</p>
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
                      <h4 className="text-xl font-bold text-white">Technology Stack Selection</h4>
                    </div>
                    <p className="text-gray-300">Chose tools like AWS S3, Glue, Redshift, Kafka, and Power BI</p>
                  </div>
                  <div className="lg:order-1 lg:text-right lg:pr-8"></div>
                </div>

                {/* Step 5 */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:text-right">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        5
                      </div>
                      <h4 className="text-xl font-bold text-white">Handoff & Go-Live Plan</h4>
                    </div>
                    <p className="text-gray-300">Delivered detailed architecture docs, proof-of-concept, and cost estimates</p>
                  </div>
                  <div className="lg:pl-8"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Business Impact</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">75%</div>
                <p className="text-gray-300">faster reporting cycle (real-time dashboards vs. 24-hour lag)</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">60%</div>
                <p className="text-gray-300">increase in data accuracy and integrity (eliminated duplication, null entries)</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">90%</div>
                <p className="text-gray-300">team clarity on data architecture and roles post-sessions</p>
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
                  <span className="text-white font-semibold">Reporting Time</span>
                  <span className="text-primary-400 font-bold">{"<6 minutes (real-time)"}</span>
                </div>
                <div className="text-sm text-gray-400">Before OphoTech Sessions: 24 hours → After OphoTech Co-Design: {"<6 minutes (real-time)"}</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Data Accuracy</span>
                  <span className="text-primary-400 font-bold">96%+</span>
                </div>
                <div className="text-sm text-gray-400">Before OphoTech Sessions: 68% → After OphoTech Co-Design: 96%+</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Stakeholder Clarity (Survey)</span>
                  <span className="text-primary-400 font-bold">90%+</span>
                </div>
                <div className="text-sm text-gray-400">Before OphoTech Sessions: 48% → After OphoTech Co-Design: 90%+</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Go-to-Market for BI Platform</span>
                  <span className="text-primary-400 font-bold">4 months</span>
                </div>
                <div className="text-sm text-gray-400">Before OphoTech Sessions: 9 months → After OphoTech Co-Design: 4 months</div>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-lg border border-white/20">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-500/20">
                    <th className="px-6 py-4 text-left text-white font-semibold">Impact Area</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Before OphoTech Sessions</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">After OphoTech Co-Design</th>
                  </tr>
                </thead>
                <tbody className="bg-white/5">
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Reporting Time</td>
                    <td className="px-6 py-4 text-gray-300">24 hours</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">{"<6 minutes (real-time)"}</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Data Accuracy</td>
                    <td className="px-6 py-4 text-gray-300">68%</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">96%+</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Stakeholder Clarity (Survey)</td>
                    <td className="px-6 py-4 text-gray-300">48%</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">90%+</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300 font-medium">Go-to-Market for BI Platform</td>
                    <td className="px-6 py-4 text-gray-300">9 months</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">4 months</td>
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
                <p className="text-gray-300">Aligns all stakeholders through <strong>hands-on architecture planning</strong></p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Avoids rework and costly <strong>architectural errors</strong></p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Translates business goals into <strong>real technical solutions</strong></p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Enables faster implementation with <strong>fewer dependencies</strong></p>
              </div>
            </div>
          </div>

          {/* Suggested Tagline */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 rounded-full px-8 py-4 border border-primary-500/30">
              <Award className="w-6 h-6 text-primary-400" />
              <span className="text-white font-semibold">"Plan It Right. Build It Fast. Scale with Confidence."</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticalTechDesignSessions;