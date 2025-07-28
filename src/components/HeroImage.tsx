import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Link, Lightbulb, TrendingUp } from 'lucide-react';
import DemoModal from './DemoModal';

interface SlideData {
  id: string;
  title: string;
  titleParts: string[];
  blueWords: number[];
  backgroundImage: string;
//   connectData: {
//     title: string;
//     items: string[];
//   };
//   createData: {
//     title: string;
//     items: string[];
//   };
//   evolveData: {
//     title: string;
//     items: string[];
//   };
}

const HeroImage: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const slides: SlideData[] = [
    {
      id: 'strategic-impact',
      title: 'While you lead your business , we plan , implement and support all your technology needs .',
      titleParts: ['While you lead your business , we plan , implement and support all your technology needs .'],
      blueWords: [1], // second word will be blue
      backgroundImage: 'https://i.postimg.cc/MTs9pkKP/pexels-pixabay-356056.jpg',
   
    },
  
  ];

  const currentSlideData = slides[currentSlide];

  // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, slides.length]);

  // Listen for external slide change events (from footer navigation)
  useEffect(() => {
    const handleSlideChange = (event: CustomEvent) => {
      const { slideIndex } = event.detail;
      if (slideIndex >= 0 && slideIndex < slides.length) {
        setCurrentSlide(slideIndex);
        setIsAutoPlaying(false); // Stop auto-play when manually navigated
      }
    };

    window.addEventListener('changeHeroSlide', handleSlideChange as EventListener);
    return () => window.removeEventListener('changeHeroSlide', handleSlideChange as EventListener);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleRippleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  const handleEngagementModelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleRippleEffect(e);
    setTimeout(() => {
      if (currentSlideData.id === 'strategic-impact') {
        // Navigate to Strategic Impact section
        const strategicSection = document.querySelector('#strategic-impact-section');
        if (strategicSection) {
          strategicSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        navigate('/engagement-model');
      }
    }, 200);
  };

  const handleLetsBeginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleRippleEffect(e);
    setTimeout(() => {
      setIsDemoModalOpen(true);
    }, 200);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <>
      <section id="hero" className="relative min-h-screen overflow-hidden bg-gray-900">
        {/* Background Images with Transitions */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                  backgroundImage: `url('${slide.backgroundImage}')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/40"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center pt-20 md:pt-0">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8 md:py-0">
              {/* Left Content */}
              <div className="lg:col-span-8">
                {/* Main Title */}
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-nunito  leading-tight mb-8 md:mb-12 animate-fade-in-up animation-delay-400">
                  {currentSlideData.titleParts.map((part, index) => (
                    <div key={index} className="block">
                      <span className={`block relative inline-block ${
                        currentSlideData.blueWords.includes(index)
                          ? 'text-transparent bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text'
                          : 'text-white'
                      }`}>
                        {part}
                        {currentSlideData.blueWords.includes(index) && (
                          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-cyan"></span>
                        )}
                      </span>
                    </div>
                  ))}
                </h1>
                
                {/* Strategic Impact Layout - Special for first slide */}
                {/* {currentSlideData.id === 'strategic-impact' ? (
                  <div className="animate-fade-in-up animation-delay-600 mb-8">
                     
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
                       
                      <button 
                        onClick={() => navigate('/continuous-growth-engine')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Link className="w-6 h-6 text-primary-400" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">Continuous Growth Engine</p>
                            </div>
                          </div>
                        </div>
                      </button>

                     
                      <button 
                        onClick={() => navigate('/transformation-partner')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Lightbulb className="w-6 h-6 text-primary-400" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">Strategic Growth Partner</p>
                            </div>
                          </div>
                        </div>
                      </button>

                       
                      <button 
                        onClick={() => navigate('/leadership-incubator')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <TrendingUp className="w-6 h-6 text-primary-400" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></div>
                              <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">Future Leaders Accelerator</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>

                    
                    <div className="flex justify-start">
                      <button 
                        className="btn-secondary relative overflow-hidden group px-8 py-4"
                        onClick={handleEngagementModelClick}
                      >
                        <span className="text-xs">▶</span>
                        <span>Learn More</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 animate-fade-in-up animation-delay-600 mb-8">
                    
                    {currentSlideData.id === 'technology-scouting' ? (
                      <button 
                        onClick={() => navigate('/emerging-tech-radar')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Link className="w-6 h-6 text-primary-400" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.connectData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : currentSlideData.id === 'capability-gaps' ? (
                      <button 
                        onClick={() => navigate('/team-skills-vs-business-needs')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Link className="w-6 h-6 text-primary-400" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.connectData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : currentSlideData.id === 'enterprise-solutions' ? (
                      <button 
                        onClick={() => navigate('/understand-business-needs')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Link className="w-6 h-6 text-primary-400" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.connectData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : currentSlideData.id === 'platform-integration' ? (
                      <button 
                        onClick={() => navigate('/connect-old-systems-with-new-tech')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Link className="w-6 h-6 text-primary-400" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.connectData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : currentSlideData.id === 'feedback-loop' ? (
                      <button 
                        onClick={() => navigate('/find-whats-broken-and-why')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Link className="w-6 h-6 text-primary-400" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.connectData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : (
                      <div className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Link className="w-6 h-6 text-primary-400" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.connectData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                     
                    {currentSlideData.id === 'technology-scouting' ? (
                      <button 
                        onClick={() => navigate('/cross-industry-solution-matching')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-cyan/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Lightbulb className="w-6 h-6 text-accent-cyan" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.createData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : currentSlideData.id === 'capability-gaps' ? (
                      <button 
                        onClick={() => navigate('/practical-tech-design-sessions')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-cyan/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Lightbulb className="w-6 h-6 text-accent-cyan" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.createData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : currentSlideData.id === 'enterprise-solutions' ? (
                      <button 
                        onClick={() => navigate('/test-fast-with-simulations')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-cyan/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Lightbulb className="w-6 h-6 text-accent-cyan" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.createData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : currentSlideData.id === 'platform-integration' ? (
                      <button 
                        onClick={() => navigate('/build-flexible-systems-that-talk-to-each-other')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-cyan/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Lightbulb className="w-6 h-6 text-accent-cyan" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.createData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : currentSlideData.id === 'feedback-loop' ? (
                      <button 
                        onClick={() => navigate('/fix-quickly-improve-continuously')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-cyan/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Lightbulb className="w-6 h-6 text-accent-cyan" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.createData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : (
                      <div className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-cyan/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <Lightbulb className="w-6 h-6 text-accent-cyan" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.createData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  
                    {currentSlideData.id === 'technology-scouting' ? (
                      <button 
                        onClick={() => navigate('/collaborative-innovation')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <TrendingUp className="w-6 h-6 text-accent-green" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.evolveData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : currentSlideData.id === 'capability-gaps' ? (
                      <button 
                        onClick={() => navigate('/growth-plans-for-future-ready-teams')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <TrendingUp className="w-6 h-6 text-accent-green" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.evolveData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : currentSlideData.id === 'enterprise-solutions' ? (
                      <button 
                        onClick={() => navigate('/scale-smart-with-automation')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <TrendingUp className="w-6 h-6 text-accent-green" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.evolveData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : currentSlideData.id === 'platform-integration' ? (
                      <button 
                        onClick={() => navigate('/one-dashboard-smarter-workflows')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <TrendingUp className="w-6 h-6 text-accent-green" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.evolveData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : currentSlideData.id === 'feedback-loop' ? (
                      <button 
                        onClick={() => navigate('/let-ai-keep-things-getting-better-over-time')}
                        className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-primary-500/20 to-primary-600/10 cursor-pointer text-left w-full"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <TrendingUp className="w-6 h-6 text-accent-green" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.evolveData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    ) : (
                      <div className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-green/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                            <TrendingUp className="w-6 h-6 text-accent-green" />
                          </div>
                          <div className="space-y-2">
                            {currentSlideData.evolveData.items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 flex-shrink-0"></div>
                                <p className="text-white/80 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-300">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )} */}

                {/* CTA Buttons - Only for non-strategic-impact slides */}
                {currentSlideData.id !== 'strategic-impact' && (
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
                    <button 
                      className="btn-primary relative overflow-hidden group"
                      onClick={handleLetsBeginClick}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1" />
                    </button>
                    <button 
                      className="btn-secondary relative overflow-hidden group"
                      onClick={handleEngagementModelClick}
                    >
                      <span className="text-xs">▶</span>
                      <span>Learn More</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Right Content - Navigation */}
              {/* <div className="lg:col-span-4 flex flex-col items-center lg:items-end mt-8 lg:mt-0"> */}
                {/* Slide Counter */}
                {/* <div className="flex items-center gap-4 mb-8">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">
                      {String(currentSlide + 1).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-white/60">
                      of {String(slides.length).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div> */}

                {/* Progress Bar */}
                {/* <div className="w-48 md:w-64 h-1 bg-white/20 rounded-full mb-8">
                  <div 
                    className="h-full bg-primary-500 rounded-full transition-all duration-300"
                    style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                  ></div>
                </div> */}

                {/* Slide Indicators */}
                {/* <div className="flex lg:flex-col flex-row gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-8 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-primary-500' 
                          : 'bg-white/20 hover:bg-white/40 lg:w-2 lg:h-8 w-8 h-2'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="absolute top-24 right-6 hidden lg:block">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'
            }`}
            title={isAutoPlaying ? 'Auto-playing' : 'Paused'}
          />
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  );
};

export default HeroImage;