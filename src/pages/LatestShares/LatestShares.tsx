import { cn } from '../../lib/utils';
import { TemplateCard } from '../TemplateCard/TemplateCard';

export function LatestShares() {
  // Mock data for AIgUI visualization templates
  const templates = [
    { title: 'Sales Analytics Dashboard', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=250&h=250&auto=format' },
    { title: 'User Activity Heatmap', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=250&h=250&auto=format' },
    { title: 'Data Flow Diagram', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=250&h=250&auto=format' },
    { title: 'Interactive Chart Builder', image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=250&h=250&auto=format' },
  ];

  return (
    <div className={cn('mt-8 px-4')}>
      <div className={cn('flex justify-between items-center mb-4')}>
        <div className={cn('text-lg font-bold')}>Popular Visualizations</div>
      </div>
      <div className={cn('grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4')}>
        {templates.map((template, index) => (
          <TemplateCard key={index} title={template.title} image={template.image} />
        ))}
      </div>
    </div>
  );
}
