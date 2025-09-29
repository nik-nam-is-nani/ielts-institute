import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      score: '8.5',
      country: 'Singapore',
      feedback: 'The personalized study plan and AI band score predictor helped me focus on my weak areas. I achieved my target score of 8.5 in just 3 months!',
    },
    {
      name: 'Ahmed Hassan',
      score: '7.5',
      country: 'Egypt',
      feedback: 'Outstanding speaking practice sessions with native trainers. The mock tests were incredibly realistic and prepared me well for the actual exam.',
    },
    {
      name: 'Maria Rodriguez',
      score: '8.0',
      country: 'Spain',
      feedback: 'IELTSPro exceeded my expectations. The comprehensive course structure and expert feedback helped me improve from 6.5 to 8.0 band score.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students who achieved their dream IELTS scores with our comprehensive preparation program.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              score={testimonial.score}
              country={testimonial.country}
              feedback={testimonial.feedback}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-700 font-medium">Students Trained</div>
              <div className="text-sm text-gray-600 mt-1">Since 2020</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">8.2</div>
              <div className="text-gray-700 font-medium">Average Band Score</div>
              <div className="text-sm text-gray-600 mt-1">All sections combined</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Success Rate</div>
              <div className="text-sm text-gray-600 mt-1">Target score achieved</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your IELTS preparation journey today and achieve the band score you need for your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
              View Course Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
