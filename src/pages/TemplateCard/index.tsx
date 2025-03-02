import { cn } from '../lib/utils';

// Template Card Component for displaying a card with an image and title
export function TemplateCard({ title, image }: { title: string; image: string }) {
  return (
    <div className={cn('flex flex-col rounded-lg overflow-hidden shadow-sm')}>
      <div className={cn('relative aspect-[4/3] overflow-hidden')}>
        <img 
          src={image} 
          alt={title} 
          className={cn('w-full h-full object-cover')} 
        />
      </div>
      <div className={cn('p-2 text-center text-sm')}>
        {title}
      </div>
    </div>
  );
}
