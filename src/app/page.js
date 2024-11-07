import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        {/* App Name with Icon */}
        <div className="flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
            />
          </svg>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600">BookQuest</h1>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8">
          Embark on a journey to discover new books and endless adventures.
        </p>

        {/* Get Started Button */}
        <Link href="/search" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition duration-300">
          <span>Get Started</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>

      {/* Decorative SVGs */}
      <div className="absolute inset-0 flex justify-around items-center pointer-events-none opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
          className="w-20 h-20 sm:w-32 sm:h-32 text-blue-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20v-6m0 0V8m0 6l6-6m-6 6l-6-6"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
          className="w-16 h-16 sm:w-24 sm:h-24 text-blue-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.354a4.318 4.318 0 100 8.637m0-8.637V20m0-6.645a4.318 4.318 0 110 8.637"
          />
        </svg>
      </div>
    </div>
  );
}
