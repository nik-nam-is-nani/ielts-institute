
const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-6">
                <span className="text-blue-200 text-sm font-medium">
                  🏆 #1 IELTS Preparation Platform
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Achieve Your Dream
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  IELTS Score
                </span>
              </h1>

              {/* Sub-text */}
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                Master all four skills with our expert-led courses, AI-powered practice tests, 
                and personalized study plans. Join thousands who achieved their target scores.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50,000+</div>
                  <div className="text-blue-200 text-sm">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">8.5</div>
                  <div className="text-blue-200 text-sm">Average Band Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-blue-200 text-sm">Success Rate</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                  aria-label="Start your free IELTS preparation trial"
                >
                  Get Started Free
                </button>
                <button 
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                  aria-label="Learn more about our IELTS courses"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 mx-auto w-full max-w-lg">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl p-8 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    {/* Placeholder for hero illustration */}
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">IELTS Success</h3>
                      <p className="text-gray-600 text-sm mt-2">Expert Guidance & Practice</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 -left-6 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-10 -right-6 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-10 w-12 h-12 bg-cyan-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
