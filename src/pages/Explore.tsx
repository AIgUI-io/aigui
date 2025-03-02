import { cn } from '../lib/utils';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import { Hero } from '../components/Hero/Hero';
import { CategoryCard } from './CategoryCard';
import { TemplateCard } from './TemplateCard';

// Search Bar Component
const SearchBar = () => {
  return (
    <div className={cn('relative w-full max-w-3xl mx-auto')}>
      <div className={cn('flex items-center border rounded-full bg-white p-2 shadow-sm')}>
        <div className={cn('flex-1 flex items-center')}>
          <svg className={cn('w-5 h-5 text-gray-400 ml-2')} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search in massive templates"
            className={cn('w-full px-3 py-1 outline-none text-sm')}
          />
        </div>
      </div>
    </div>
  );
};

// Category Browse Component
const CategoryBrowse = () => {
  // Mock image data using Unsplash images
  const categories = [
    { title: 'News', image: 'https://images.unsplash.com/photo-1585007600263-71c52a49e7c4?q=80&w=250&auto=format' },
    { title: 'Productivity', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=250&auto=format' },
    { title: 'Health', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=250&auto=format' },
    { title: 'Travel', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=250&auto=format' },
    { title: 'Learning', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=250&auto=format' },
    { title: 'Technology', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=250&auto=format' },
    { title: 'Finance', image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=250&auto=format' },
    { title: 'Lifestyle', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=250&auto=format' },
  ];

  return (
    <div className={cn('mt-4 px-4')}>
      <div className={cn('flex justify-between items-center mb-4')}>
        <div className={cn('text-lg font-bold')}>Browse by Category</div>
      </div>
      <div className={cn('flex overflow-x-auto gap-4 pb-2 no-scrollbar')}>
        {categories.map((category, index) => (
          <CategoryCard key={index} title={category.title} image={category.image} />
        ))}
      </div>
    </div>
  );
};

// Latest Templates Component
const LatestTemplates = () => {
  // Mock image data using Unsplash images
  const templates = [
    { title: 'Resignation Application', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=250&auto=format' },
    { title: 'Flower Shop Opening', image: 'https://images.unsplash.com/photo-1561181286-d5c92b900f68?q=80&w=250&auto=format' },
    { title: 'Career Promotion', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=250&auto=format' },
    { title: 'Odor Removal', image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=250&auto=format' },
  ];

  return (
    <div className={cn('mt-8 px-4')}>
      <div className={cn('flex justify-between items-center mb-4')}>
        <div className={cn('text-lg font-bold')}>Latest Templates</div>
      </div>
      <div className={cn('grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4')}>
        {templates.map((template, index) => (
          <TemplateCard key={index} title={template.title} image={template.image} />
        ))}
      </div>
    </div>
  );
};

export function Explore({
  className = '', children = null,
}) {
  return (
    <div className={cn('min-h-screen bg-white', className)}>
      <Hero 
        gradientFrom="from-rose-200" 
        gradientTo="to-rose-300" 
      />
      <div className={cn('pt-4 pb-6')}>
        <CategoryBrowse />
        <LatestTemplates />
      </div>
      {children}
    </div>
  );
}
