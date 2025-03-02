import { cn } from '../../lib/utils';

// Category Card Component
export function CategoryCard({ title, image }: { title: string; image: string; }) {
  return (
    <div className={cn('flex flex-col items-center')}>
      <div className={cn('relative w-[120px] h-[120px] overflow-hidden rounded-lg shadow-sm mb-2')}>
        <img src={image} alt={title} className={cn('w-full h-full object-cover')} />
      </div>
      <div className={cn('text-center text-xs')}>
        {title}
      </div>
    </div>
  );
}
