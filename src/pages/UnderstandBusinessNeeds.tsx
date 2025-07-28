import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, CheckCircle, Zap, Award } from 'lucide-react';

const UnderstandBusinessNeeds: React.FC = () => {
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
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Understand What the Business Really Needs
                </h1>
                <p className="text-lg text-gray-300 mt-2">OphoTech-Specific Case Study</p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center">
              <div className="rounded-2xl overflow-hidden border border-white/20 backdrop-blur-xl max-w-md w-full">
                <img
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Understand What the Business Really Needs"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Case Study Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Case Study: Redefining Digital Strategy for a Manufacturing Enterprise with Low Tech Adoption
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
              <p className="text-gray-300">Global Auto Component Manufacturer</p>
              <p className="text-primary-400 text-sm">(Factories in India, Germany, and Mexico)</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Challenge</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Leadership pushed for "digital transformation," but factories were stuck in legacy ERP systems, low digital maturity, and confusion between automation vs optimization. The CIO faced internal resistance and unclear tech ROI.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Solution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                OphoTech conducted a deep-dive Business Needs Discovery Program, which included leadership interviews, factory walk-throughs, process mapping, and analytics maturity evaluation. The outcome was a focused transformation charter aligned with real business value—not just buzzwords.
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
                      <h4 className="text-xl font-bold text-white">Stakeholder Interviews</h4>
                    </div>
                    <p className="text-gray-300">Spoke to 23+ stakeholders (plant heads, finance, IT, operations, sales)</p>
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
                      <h4 className="text-xl font-bold text-white">Process & Tech Audit</h4>
                    </div>
                    <p className="text-gray-300">Mapped existing workflows vs pain points (manual rework, real-time visibility gaps, ERP bottlenecks)</p>
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
                      <h4 className="text-xl font-bold text-white">Business Goals Alignment</h4>
                    </div>
                    <p className="text-gray-300">Identified 5 key transformation goals (e.g., predictive maintenance, real-time inventory, energy cost reduction)</p>
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
                      <h4 className="text-xl font-bold text-white">Gap vs Readiness Analysis</h4>
                    </div>
                    <p className="text-gray-300">Scored business units on readiness vs ambition</p>
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
                      <h4 className="text-xl font-bold text-white">Strategy Blueprint Delivery</h4>
                    </div>
                    <p className="text-gray-300">Provided a clear, phased tech transformation roadmap (Quick Wins → Foundation → Scale-Up)</p>
                  </div>
                  <div className="lg:pl-8"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">Business Impact</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">70%</div>
                <p className="text-gray-300">alignment achieved between digital goals and actual business priorities (up from 30%)</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">4 out of 5</div>
                <p className="text-gray-300">BU heads approved and budgeted projects based on the new transformation charter</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">60%</div>
                <p className="text-gray-300">cut in decision-making time for IT budget approvals</p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-400 mb-2">80%</div>
                <p className="text-gray-300">reduced vendor confusion—fewer disconnected pilots, more targeted RFPs</p>
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
                  <span className="text-white font-semibold">Digital Alignment Score</span>
                  <span className="text-primary-400 font-bold">70%</span>
                </div>
                <div className="text-sm text-gray-400">Before Discovery: 30% → After OphoTech Enablement: 70%</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Budget Sanction Rate (Tech Projects)</span>
                  <span className="text-primary-400 font-bold">80%</span>
                </div>
                <div className="text-sm text-gray-400">Before Discovery: 20% → After OphoTech Enablement: 80%</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Decision Time for IT Projects</span>
                  <span className="text-primary-400 font-bold">{"<2.5 weeks"}</span>
                </div>
                <div className="text-sm text-gray-400">Before Discovery: 6 weeks avg → After OphoTech Enablement: {"<2.5 weeks"}</div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Pilot/Vendor Redundancy</span>
                  <span className="text-primary-400 font-bold">Reduced by 80%</span>
                </div>
                <div className="text-sm text-gray-400">Before Discovery: High (7 pilots) → After OphoTech Enablement: Reduced by 80%</div>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-hidden rounded-lg border border-white/20">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-500/20">
                    <th className="px-6 py-4 text-left text-white font-semibold">Impact Area</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Before Discovery</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">After OphoTech Enablement</th>
                  </tr>
                </thead>
                <tbody className="bg-white/5">
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Digital Alignment Score</td>
                    <td className="px-6 py-4 text-gray-300">30%</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">70%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Budget Sanction Rate (Tech Projects)</td>
                    <td className="px-6 py-4 text-gray-300">20%</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">80%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-6 py-4 text-gray-300 font-medium">Decision Time for IT Projects</td>
                    <td className="px-6 py-4 text-gray-300">6 weeks avg</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">{"<2.5 weeks"}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300 font-medium">Pilot/Vendor Redundancy</td>
                    <td className="px-6 py-4 text-gray-300">High (7 pilots)</td>
                    <td className="px-6 py-4 text-primary-400 font-semibold">Reduced by 80%</td>
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
                <p className="text-gray-300">Avoid wasted investments in disconnected or irrelevant tech</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Build internal buy-in by connecting digital to business reality</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300"><strong>Prioritize what delivers impact</strong>, not just what sounds innovative</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">Reduce time and conflict in strategic decision-making</p>
              </div>
            </div>
          </div>

          {/* Suggested Tagline */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 rounded-full px-8 py-4 border border-primary-500/30">
              <Award className="w-6 h-6 text-primary-400" />
              <span className="text-white font-semibold">"Transformation That Starts with Truth. Know Before You Build."</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnderstandBusinessNeeds;