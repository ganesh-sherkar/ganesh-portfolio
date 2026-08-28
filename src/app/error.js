'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('App error boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="text-center max-w-lg mx-auto">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 text-3xl font-bold">
            !
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
          Something went wrong
        </h1>
        
        <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
          An unexpected error occurred while rendering this page.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
