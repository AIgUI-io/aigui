import { cn } from '../../lib/utils';
import { useState } from 'react';

// Search Bar Component for finding templates
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={cn('relative w-full max-w-3xl mx-auto')}>
      <div className={cn('flex items-center border rounded-full bg-white p-2 shadow-sm')}>
        <div className={cn('flex-1 flex items-center')}>
          <svg className={cn('w-5 h-5 text-gray-400 ml-2')} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search for AI-powered UI components and visualizations"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={cn('w-full px-3 py-1 outline-none text-sm')}
          />
        </div>
      </div>
    </div>
  );
};

// Hero Component for template exploration
export function Hero({
  title = 'AI-Powered UI Generation',
  description = 'Create beautiful, interactive UI components with the power of AI',
  gradientFrom = 'from-blue-900',
  gradientTo = 'to-purple-800',
  className = '',
}) {
  return (
    <div className={cn(
      'w-full bg-gradient-to-r py-10 px-4',
      gradientFrom,
      gradientTo,
      className
    )}>
      <h1 className={cn('text-3xl font-bold text-center text-white mb-6')}>
        {title}
      </h1>
      <p className={cn('text-center text-white mb-6')}>
        {description}
      </p>
      <SearchBar />
    </div>
  );
}
