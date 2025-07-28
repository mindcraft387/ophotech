import React, { useState } from 'react';
import { Users, Zap, Award, ArrowDown, Headphones } from 'lucide-react';

const StrategicImpactSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  // Data from the table transformed into flowchart format
  const flowchartData = [
    {
      stage: "Licensing",
      icon: <Award className="w-6 h-6" />,
      strategicFocus: "IP packaging, platform bundling",
      executionPathways: "SaaS/PaaS/IaaS licensing for B2B/B2G",
      valueRealized: "Revenue stream + Legal IP protection",
    },
    {
      stage: "Deployment",
      icon: <Zap className="w-6 h-6" />,
      strategicFocus: "Cloud/on-prem/hybrid tech rollouts",
      executionPathways: "Secure provisioning + data integration",
      valueRealized: "Fast time-to-value + tech compatibility",
    },
    {
      stage: "Training",
      icon: <Users className="w-6 h-6" />,
      strategicFocus: "Enablement via workshops & toolkits",
      executionPathways: "LLMs, simulators, on-site + virtual bootcamps",
      valueRealized: "Client self-reliance + tech maturity building",
    },
    {
      stage: "Backend Support",
      icon: <Headphones className="w-6 h-6" />,
      strategicFocus: "Ongoing technical support & maintenance",
      executionPathways: "24/7 monitoring, helpdesk, system optimization",
      valueRealized: "Continuous reliability + proactive issue resolution",
    }
  ];

  return (
    <section id="strategic-impact-section" className="py-20 bg-gradient-to-b from-primary-950 via-primary-dark to-primary-medium relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
              Strategic Impact Flow
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            A systematic approach to{' '}
            <span className="text-primary-400 font-semibold">"Flywheel of Innovation"</span> — making OphoTech not just a tech provider, but a{' '}
            <span className="text-primary-400 font-semibold">Transformation Partner</span> and{' '}
            <span className="text-primary-400 font-semibold">Leadership Incubator</span>.
          </p>
        </div>

        {/* Main Content - Left Text, Right Flowchart */}
        <div className="grid lg:grid-cols-2 gap-8 items-center relative">
          
          {/* Left Side - Text Content */}
          <div className="flex justify-center">
            {/* Active Stage Details */}
            <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 w-full max-w-md h-80 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-4">
                Current Focus: {flowchartData[activeStage].stage}
              </h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-semibold text-blue-400 mb-1 uppercase tracking-wider">Strategic Focus</h4>
                  <p className="text-gray-300 text-sm leading-tight">{flowchartData[activeStage].strategicFocus}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-blue-400 mb-1 uppercase tracking-wider">Execution Pathways</h4>
                  <p className="text-gray-300 text-sm leading-tight">{flowchartData[activeStage].executionPathways}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-blue-400 mb-1 uppercase tracking-wider">Value Realized</h4>
                  <p className="text-gray-300 text-sm leading-tight">{flowchartData[activeStage].valueRealized}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connecting Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-y-1/2 z-10">
            {/* Main horizontal line from left box to right */}
            <div className="w-8 h-0.5 bg-primary-500/60"></div>
            
            {/* Connection dots */}
            <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2">
              {/* Line to Licensing (top) */}
              <div className={`absolute w-0.5 h-20 bg-gradient-to-b from-primary-400 to-transparent -translate-y-20 transition-opacity duration-300 ${
                activeStage === 0 ? 'opacity-100' : 'opacity-30'
              }`}></div>
              <div className={`absolute w-8 h-0.5 bg-gradient-to-r from-primary-400 to-primary-500 -translate-y-20 left-0 transition-opacity duration-300 ${
                activeStage === 0 ? 'opacity-100' : 'opacity-30'
              }`}></div>
              
              {/* Line to Deployment (middle) */}
              <div className={`absolute w-8 h-0.5 bg-gradient-to-r from-primary-400 to-primary-500 left-0 transition-opacity duration-300 ${
                activeStage === 1 ? 'opacity-100' : 'opacity-30'
              }`}></div>
              
              {/* Line to Training (bottom) */}
              <div className={`absolute w-0.5 h-20 bg-gradient-to-t from-primary-400 to-transparent translate-y-1 transition-opacity duration-300 ${
                activeStage === 2 ? 'opacity-100' : 'opacity-30'
              }`}></div>
              <div className={`absolute w-8 h-0.5 bg-gradient-to-r from-primary-400 to-primary-500 translate-y-20 left-0 transition-opacity duration-300 ${
                activeStage === 2 ? 'opacity-100' : 'opacity-30'
              }`}></div>
            </div>
            
            {/* Connection dots */}
            <div className="absolute left-16 top-0">
              <div className={`absolute w-2 h-2 rounded-full bg-primary-500 -translate-x-1 -translate-y-20.5 transition-all duration-300 ${
                activeStage === 0 ? 'scale-125 shadow-lg shadow-primary-500/50' : 'scale-100'
              }`}></div>
              <div className={`absolute w-2 h-2 rounded-full bg-primary-500 -translate-x-1 -translate-y-0.5 transition-all duration-300 ${
                activeStage === 1 ? 'scale-125 shadow-lg shadow-primary-500/50' : 'scale-100'
              }`}></div>
              <div className={`absolute w-2 h-2 rounded-full bg-primary-500 -translate-x-1 translate-y-19.5 transition-all duration-300 ${
                activeStage === 2 ? 'scale-125 shadow-lg shadow-primary-500/50' : 'scale-100'
              }`}></div>
            </div>
          </div>
          {/* Right Side - Vertical Flowchart */}
          <div className="flex flex-col items-center space-y-4">
            {flowchartData.map((stage, index) => (
              <div key={index} className="relative w-full max-w-sm">
                {/* Stage Card */}
                <div 
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    activeStage === index 
                      ? 'border-primary-500 bg-primary-500/20 shadow-lg shadow-primary-500/30' 
                      : 'border-white/20 bg-white/5 hover:border-white/30'
                  }`}
                  onClick={() => setActiveStage(index)}
                >
                  {/* Stage Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-500 flex items-center justify-center text-white shadow-lg">
                      {stage.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{stage.stage}</h3>
                      <div className="text-xs text-primary-400 font-semibold">STAGE {index + 1}</div>
                    </div>
                  </div>

                  {/* Stage Content Preview */}
                  <div className="text-sm text-gray-300 leading-relaxed">
                    {stage.strategicFocus}
                  </div>

                  {/* Active Indicator */}
                  {activeStage === index && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Flow Arrow */}
                {index < flowchartData.length - 1 && (
                  <div className="flex justify-center my-2">
                    <ArrowDown className={`w-6 h-6 transition-colors duration-300 ${
                      activeStage === index ? 'text-primary-500' : 'text-gray-600'
                    }`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
            {/* Flow Completion Indicator */}

        {/* Model Enablers Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">Model Enablers</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Key enablers that support and enhance our strategic impact methodology
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 lg:p-12 backdrop-blur-xl border border-white/20">
              <div className="space-y-8">
                {/* GenAI/LLM copilots */}
                <div className="flex items-start gap-6 group">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      GenAI/LLM copilots <span className="text-gray-400 font-normal">for deployment QA</span>
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Advanced AI-powered copilots that assist in quality assurance during deployment phases, 
                      ensuring robust and reliable implementation of solutions.
                    </p>
                  </div>
                </div>

                {/* Vertical connector line */}
                <div className="flex justify-start ml-1.5">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary-500 to-primary-400/50"></div>
                </div>

                {/* Multi-lingual LMS */}
                <div className="flex items-start gap-6 group">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      Multi-lingual LMS <span className="text-gray-400 font-normal">for global reach</span>
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Comprehensive learning management system supporting multiple languages to enable 
                      global training and knowledge transfer across diverse teams and regions.
                    </p>
                  </div>
                </div>

                {/* Vertical connector line */}
                <div className="flex justify-start ml-1.5">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary-500 to-primary-400/50"></div>
                </div>

                {/* Partner Certifications */}
                <div className="flex items-start gap-6 group">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      Partner Certifications <span className="text-gray-400 font-normal">for business units and clients</span>
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Structured certification programs designed to validate expertise and ensure 
                      consistent quality standards across all business units and client engagements.
                    </p>
                  </div>
                </div>

                {/* Vertical connector line */}
                <div className="flex justify-start ml-1.5">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary-500 to-primary-400/50"></div>
                </div>

                {/* Adaptive Sandbox Environments */}
                <div className="flex items-start gap-6 group">
                  <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      Adaptive Sandbox Environments <span className="text-gray-400 font-normal">for training scalability</span>
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Dynamic, scalable sandbox environments that adapt to training needs, providing 
                      hands-on experience and safe testing grounds for skill development and experimentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicImpactSection;