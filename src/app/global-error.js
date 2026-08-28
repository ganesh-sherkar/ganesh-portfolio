'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Global error boundary caught:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
        <div className="text-center max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <p className="text-gray-400 mb-6 text-sm">
            A critical error occurred. Please try reloading the page.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
