
interface TestimonialCardProps {
  name: string;
  score: string;
  feedback: string;
  image?: string;
  country: string;
}

const TestimonialCard = ({ name, score, feedback, country }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-4">
        <svg className="w-8 h-8 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>

      {/* Feedback Text */}
      <blockquote className="text-gray-700 mb-6 flex-grow">
        "{feedback}"
      </blockquote>

      {/* User Info */}
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        </div>
        <div className="flex-grow">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <div className="flex items-center text-sm text-gray-600">
            <span>{country}</span>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <span className="font-medium text-blue-600">Band {score}</span>
              <div className="ml-2 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(parseFloat(score) / 2) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
