import { cn } from '../../lib/utils';
import { CategoryCard } from '../CategoryCard/CategoryCard';

// Category Browse Component

export function CategoryBrowse() {
  // Mock image data using Unsplash images
  const categories = [
    { title: 'News', image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=250&h=250&auto=format' },
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
}
