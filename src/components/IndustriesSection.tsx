import React, { useState } from 'react';
import { Building2, Landmark, Truck, Factory, MapPin, Zap, TrendingUp, CheckCircle } from 'lucide-react';

interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  solutions: string[];
  stats: {
    clients: string;
    projects: string;
    satisfaction: string;
  };
  challenges: string[];
  benefits: string[];
  color: string;
  bgGradient: string;
}

const IndustriesSection: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>('government');

  const industries: Industry[] = [
    {
      id: 'government',
      name: 'Government',
      icon: <Building2 className="w-8 h-8" />,
      description: 'Modernizing public services with secure, scalable technology solutions that enhance citizen engagement and operational efficiency.',
      solutions: ['Digital Transformation', 'Cybersecurity', 'Data Analytics', 'Cloud Migration', 'AI Automation'],
      stats: {
        clients: '50+',
        projects: '200+',
        satisfaction: '98%'
      },
      challenges: ['Legacy system modernization', 'Data security compliance', 'Citizen service digitization', 'Inter-agency collaboration'],
      benefits: ['Improved citizen services', 'Enhanced security', 'Cost reduction', 'Operational efficiency'],
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/10 to-blue-600/5'
    },
    {
      id: 'banking',
      name: 'Banking',
      icon: <Landmark className="w-8 h-8" />,
      description: 'Transforming financial services with cutting-edge fintech solutions, enhanced security, and seamless customer experiences.',
      solutions: ['Fraud Detection AI', 'Digital Banking', 'Risk Management', 'Compliance Automation', 'Customer Analytics'],
      stats: {
        clients: '75+',
        projects: '350+',
        satisfaction: '99%'
      },
      challenges: ['Regulatory compliance', 'Fraud prevention', 'Digital transformation', 'Customer experience'],
      benefits: ['Reduced fraud losses', 'Faster transactions', 'Better compliance', 'Enhanced customer satisfaction'],
      color: 'from-blue-600 to-blue-700',
      bgGradient: 'from-blue-600/10 to-blue-700/5'
    },
    {
      id: 'transportation',
      name: 'Transportation',
      icon: <Truck className="w-8 h-8" />,
      description: 'Optimizing logistics and transportation networks with IoT, AI-powered route optimization, and real-time tracking solutions.',
      solutions: ['Fleet Management', 'Route Optimization', 'Predictive Maintenance', 'Supply Chain Analytics', 'IoT Integration'],
      stats: {
        clients: '40+',
        projects: '180+',
        satisfaction: '97%'
      },
      challenges: ['Route optimization', 'Fleet maintenance', 'Supply chain visibility', 'Cost management'],
      benefits: ['Reduced fuel costs', 'Improved delivery times', 'Better asset utilization', 'Enhanced visibility'],
      color: 'from-blue-400 to-blue-500',
      bgGradient: 'from-blue-400/10 to-blue-500/5'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: <Factory className="w-8 h-8" />,
      description: 'Revolutionizing manufacturing with Industry 4.0 solutions, predictive maintenance, and intelligent automation systems.',
      solutions: ['Smart Factory', 'Predictive Analytics', 'Quality Control AI', 'Supply Chain Optimization', 'IoT Sensors'],
      stats: {
        clients: '60+',
        projects: '280+',
        satisfaction: '96%'
      },
      challenges: ['Equipment downtime', 'Quality control', 'Production optimization', 'Supply chain disruptions'],
      benefits: ['Reduced downtime', 'Improved quality', 'Higher efficiency', 'Cost savings'],
      color: 'from-blue-700 to-blue-800',
      bgGradient: 'from-blue-700/10 to-blue-800/5'
    },
    {
      id: 'smart-cities',
      name: 'Smart Cities',
      icon: <MapPin className="w-8 h-8" />,
      description: 'Building intelligent urban ecosystems with IoT infrastructure, smart governance, and sustainable technology solutions.',
      solutions: ['Smart Infrastructure', 'Traffic Management', 'Energy Optimization', 'Waste Management', 'Citizen Apps'],
      stats: {
        clients: '25+',
        projects: '120+',
        satisfaction: '95%'
      },
      challenges: ['Urban planning', 'Resource management', 'Traffic congestion', 'Environmental sustainability'],
      benefits: ['Better quality of life', 'Reduced emissions', 'Efficient resource use', 'Improved governance'],
      color: 'from-blue-800 to-blue-900',
      bgGradient: 'from-blue-800/10 to-blue-900/5'
    }
  ];

  const currentIndustry = industries.find(industry => industry.id === activeIndustry) || industries[0];

  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-primary-950 via-primary-dark to-primary-medium">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header - Matching other sections */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Heading with Decorative Elements */}
          <div className="text-left relative">
            {/* Top decorative line */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
              <div className="w-2 h-2 bg-primary-500 rounded-full mx-3"></div>
              <div className="w-6 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Industries{' '}
              <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                We Serve
              </span>
            </h2>
            
            {/* Bottom decorative element */}
            <div className="flex items-center">
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
              <div className="w-1 h-1 bg-accent-cyan rounded-full mx-2"></div>
              <div className="w-4 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent"></div>
            </div>
          </div>
          
          {/* Right Side - Description */}
          <div className="text-left lg:text-left relative">
            {/* Subtle accent line for mobile/tablet */}
            <div className="lg:hidden flex items-center mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan"></div>
            </div>
            
            <p className="text-base md:text-lg text-gray-300 leading-relaxed relative">
              Delivering specialized technology solutions across diverse industries, 
              helping organizations transform their operations and achieve sustainable growth through innovative AI, cloud, and data solutions.
            </p>
            
            {/* Subtle corner accent */}
            <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Industry Selection Cards */}
          <div className="lg:col-span-1 space-y-4">
            {industries.map((industry, index) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`w-full p-4 rounded-xl border transition-all duration-300 text-left group hover:scale-[1.02] ${
                  activeIndustry === industry.id
                    ? `bg-gradient-to-r ${industry.bgGradient} border-white/30 shadow-lg`
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${
                      activeIndustry === industry.id ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {industry.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Industry Details */}
          <div className="lg:col-span-2">
            <div className={`glass-effect rounded-2xl p-8 backdrop-blur-xl border border-white/20 bg-gradient-to-br ${currentIndustry.bgGradient} animate-fade-in-up`}>
              
              {/* Industry Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentIndustry.color} flex items-center justify-center text-white shadow-xl`}>
                  {currentIndustry.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{currentIndustry.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{currentIndustry.description}</p>
                </div>
              </div>
              {/* Solutions & Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Key Solutions */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-400" />
                    Key Solutions
                  </h4>
                  <div className="space-y-2">
                    {currentIndustry.solutions.map((solution, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    Key Benefits
                  </h4>
                  <div className="space-y-2">
                    {currentIndustry.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
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

export default IndustriesSection;