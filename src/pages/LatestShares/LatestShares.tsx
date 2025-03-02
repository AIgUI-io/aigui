import { cn } from '../../lib/utils';
import { ShareCard } from '../ShareCard/ShareCard';

export function LatestShares() {
  // Mock data for AIgUI visualization templates
  const templates = [
    { title: 'Sales Analytics Dashboard', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=250&h=250&auto=format' },
    { title: 'User Activity Heatmap', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=250&h=250&auto=format' },
    { title: 'Data Flow Diagram', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=250&h=250&auto=format' },
    { title: 'Interactive Chart Builder', image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=250&h=250&auto=format' },
    { title: 'Financial Performance Tracker', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=250&h=250&auto=format' },
    { title: 'Customer Journey Map', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=250&h=250&auto=format' },
    { title: 'Product Analytics Suite', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=250&h=250&auto=format' },
  ];

  return (
    <div className={cn('mt-8 px-4')}>
      <div className={cn('flex justify-between items-center mb-4')}>
        <div className={cn('text-lg font-bold')}>Popular Visualizations</div>
      </div>
      <div className={cn('flex flex-wrap gap-4')}>
        {templates.map((template, index) => (
          <div key={`6f4651_${index}`}>
            <ShareCard title={template.title} image={template.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
